const fs = require('fs');

function getFileExtension(filename) {
  const re = /(?:\.([^.]+))?$/;
  return re.exec(filename)[1];
}

const defaultSource = require(__dirname + '/../../src/i18n/en.js').default;

fs.readdir(__dirname + '/../../src/i18n', (err, files) => {

  files.forEach(function(file) {
    const output = {};
    if (file === 'index.js' || getFileExtension(file) !== 'js') {
      return;
    }

    const input = require(__dirname + '/../../src/i18n/' + file).default;
    const source = {
      ...defaultSource,
      ...input,
    };

    for (const id in source) {
      if (output.hasOwnProperty(source[id]['id'])) {
        throw new Error('Duplicated ' + source[id]['id']);
      }
      output[source[id]['id']] = source[id]['defaultMessage'];
    }

    fs.writeFile(__dirname + '/../../src/i18n/compiled/' + file, 'export default ' + JSON.stringify(output, null, 2), function(err) {
      if (err) {
        throw err;
      }
    });
  });
});