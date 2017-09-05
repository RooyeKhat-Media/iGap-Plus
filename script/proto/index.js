const fs = require('fs');

var protobuf = require('protobufjs');
const pbjs = require('protobufjs/cli/pbjs');

function getFileExtension(filename) {
  const re = /(?:\.([^.]+))?$/;
  return re.exec(filename)[1];
}

fs.readdir(__dirname + '/src/', (err, files) => {
  let protoFiles = [];
  files.forEach(file => {
    if (getFileExtension(file) === 'proto') {
      protoFiles.push(file);
    }
  });

  pbjs.main([
    '--target', 'static-module',
    '--out', './src/modules/Proto/bundle.js',
    '--es6',
    '--force-long',
    '--force-message',
    '--no-delimited',
    '--no-convert',
    '--path', __dirname + '/src/',
    ...protoFiles,
  ], function(err, bundle) {
    if (err) {
      throw err;
    }

    pbjs.main([
      '--target', __dirname + '/custom_target',
      '--path', __dirname + '/src/',
      '--force-long',
      ...protoFiles,
    ], function(err, output) {
      if (err) {
        throw err;
      }
      fs.writeFile(`./src/modules/Proto/wrappers.js`, output, function(err) {
        if (err) {
          throw err;
        }
      });

    });

  });
});
