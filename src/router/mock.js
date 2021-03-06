const fs = require('fs');
const join = require('path').join;
var express = require('express');
const outputPath = require('../../config').outputPath || './src/mockRouter'

var router = express.Router();

function scan(path, app) {
  const files = fs.readdirSync(path);

  for (let i = 0; i < files.length; i++) {
    const fpath = join(path, files[i]);
    const stats = fs.statSync(fpath);

    if (stats.isDirectory()) {
      scan(fpath, app);
    }
    if (stats.isFile()) {
      require(fpath)(app);
    }
  }
}

scan(join(__dirname, '../../', outputPath), router);

module.exports = router;