'use strict';
module.exports = custom_target;

var protobuf = require('protobufjs'),
  cliUtil = protobuf.util,
  espree = require('espree'),
  escodegen = require('escodegen'),
  estraverse = require('estraverse');

var Type = protobuf.Type,
  Enum = protobuf.Enum,
  Namespace = protobuf.Namespace,
  util = protobuf.util;

var out = [];
var indent = 0;
var config = {};

custom_target.description = 'Customized target with setter getter that compatible with google-protobuf-js';

function custom_target(root, options, callback) {
  config = options;
  try {
    buildNamespace(null, root);
    return callback(null, out.join('\n'));
  } catch (err) {
    return callback(err);
  } finally {
    out = [];
    indent = 0;
    config = {};
  }
}

function push(line) {
  if (line === '') {
    return out.push('');
  }
  var ind = '';
  for (var i = 0; i < indent; ++i) {
    ind += '  ';
  }
  return out.push(ind + line);
}

function pushComment(lines) {
  if (!config.comments) {
    return;
  }
  var split = [];
  for (var i = 0; i < lines.length; ++i) {
    if (lines[i] != null && lines[i].substring(0, 8) !== '@exclude') {
      Array.prototype.push.apply(split, lines[i].split(/\r?\n/g));
    }
  }
  push('/**');
  split.forEach(function(line) {
    if (line === null) {
      return;
    }
    push(' * ' + line.replace(/\*\//g, '* /'));
  });
  push(' */');
}

function exportName(object, asInterface = true) {
  if (asInterface) {
    if (object.__interfaceName) {
      return object.__interfaceName;
    }
  } else if (object.__exportName) {
    return object.__exportName;
  }

  var parts = object.fullName.substring(1).split('.'),
    i = 0;
  while (i < parts.length) {
    parts[i] = escapeName(parts[i++]);
  }

  if (asInterface) {
    return object['__interfaceName'] = util.ucFirst(parts.shift()) + parts.join('_');
  } else {
    return object['__exportName'] = parts.join( '.');
  }


}

function escapeName(name) {
  if (!name) {
    return '$root';
  }
  return cliUtil.isReserved(name) ? name + '_' : name;
}

function aOrAn(name) {
  return ((/^[hH](?:ou|on|ei)/.test(name) || /^[aeiouAEIOU][a-z]/.test(name)) && !/^us/i.test(name)
    ? 'an '
    : 'a ') + name;
}

function buildNamespace(ref, ns) {
  if (!ns) {
    return;
  }

  if (ns.name !== '') {
    if (!ref) {
      push("import proto from './bundle';");
    }
  }

  if (ns instanceof Type) {
    buildType(ref, ns);
  }

  ns.nestedArray.forEach(function(nested) {
    if (nested instanceof Enum) {
      buildEnum(ns.name, nested);
    } else if (nested instanceof Namespace) {
      buildNamespace(ns.name, nested);
    }
  });

  if (ns.name !== '') {
    if (!ref) {
      push('');
      push('export default proto;');
    }
  }
}


function toJsType(field) {
  var type;

  switch (field.type) {
    case 'double':
    case 'float':
    case 'int32':
    case 'uint32':
    case 'sint32':
    case 'fixed32':
    case 'sfixed32':
      type = 'number';
      break;
    case 'int64':
    case 'uint64':
    case 'sint64':
    case 'fixed64':
    case 'sfixed64':
      type = config.forceLong ? 'Long' : config.forceNumber ? 'number' : 'number|Long';
      break;
    case 'bool':
      type = 'boolean';
      break;
    case 'string':
      type = 'string';
      break;
    case 'bytes':
      type = 'Uint8Array';
      break;
    default:
      if (field.resolve().resolvedType) {
        type = exportName(field.resolvedType);
      } else {
        type = '*';
      } // should not happen
      break;
  }
  if (field.map) {
    return 'Object.<string,' + type + '>';
  }
  if (field.repeated) {
    return 'Array.<' + type + '>';
  }
  return type;
}

function buildType(ref, type) {

  if (config.comments) {
    var typeDef = [
      '@interface ' +  exportName(type),
    ];
    push('');
    pushComment(typeDef);
  }

  // serializeBinary
  if (config.comments) {
    push('');
    pushComment([
      'Serializes the message to binary data (in protobuf wire format).',
      '@return {Uint8Array}',
    ]);
  }
  push('proto.' + exportName(type, false) + '.prototype.serializeBinary = function() {');
  ++indent;
  push('return proto.' + exportName(type, false) + '.encode(this).finish();');
  --indent;
  push('};');

  // deserializeBinary
  if (config.comments) {
    push('');
    pushComment([
      'Deserializes binary data (in protobuf wire format).',
      '@param {Uint8Array} buffer',
      '@return {' + exportName(type) + '}',
    ]);
  }
  push('proto.' + exportName(type, false) + '.deserializeBinary = function(buffer) {');
  ++indent;
  push('return proto.' + exportName(type, false) + '.decode(buffer);');
  --indent;
  push('};');



  // Getter
  var firstField = true;
  type.fieldsArray.forEach(function(field) {
    field.resolve();
    if (config.comments) {
      push('');
      var jsType = toJsType(field);
      if (field.optional && !field.map && !field.repeated && field.resolvedType instanceof Type) {
        jsType = '(' + jsType + '|null|undefined)';
      }
      pushComment([
        field.comment,
        'Get ' + type.name + ' ' + field.name + '.',
        '@memberof ' +  exportName(type),
        '@return {' + jsType + '}',
      ]);
    } else if (firstField) {
      push('');
      firstField = false;
    }
    push('proto.' + exportName(type, false) + '.prototype.get' + util.ucFirst(util.camelCase(field.name)) + (field.repeated ? 'List' : '') + ' = function() {');
    ++indent;
    push('return this.' + util.camelCase(field.name) + ';');
    --indent;
    push('};');
    // Setter
    if (config.comments) {
      push('');
      pushComment([
        field.comment,
        'Set ' + type.name + ' ' + field.name + '.',
        '@memberof ' +  exportName(type),
        '@param {' + jsType + '} value',
      ]);
    } else if (firstField) {
      push('');
    }
    push('proto.' + exportName(type, false) + '.prototype.set' + util.ucFirst(util.camelCase(field.name)) + (field.repeated ? 'List' : '') + ' = function(value) {');
    ++indent;
    push('this.' + util.camelCase(field.name) + ' = value;');
    --indent;
    push('};');
  });

}

function buildEnum(ref, enm) {

  if (config.comments) {
    var typeDef = [
      '@typedef {number} ' +  exportName(enm),
    ];
    push('');
    pushComment(typeDef);
  }

  push('');
  pushComment([
    enm.comment || enm.name + ' enum.',
    '@enum {' + exportName(enm) + '}',
    '@memberof ' +  exportName(enm.parent),
  ]);

  const prototypeGen = (3 < enm.fullName.split('.').length) ?
    ' = proto.' + exportName(enm.parent, false) + '.prototype.' + util.ucFirst(util.camelCase(enm.name))
    : '';

  push('proto.' + exportName(enm, false) + prototypeGen + ' = {');
  ++indent;

  Object.keys(enm.values).forEach(function(key) {
    var valueId = enm.values[key];
    push(`${key} : ${valueId},`);
  });

  --indent;
  push('};');
}
