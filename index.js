'use strict';

var fs = require('fs'),
colorize = require('./lib/colorize.js'),
randomize = require('./lib/randomize.js'),
readBitmap = require('./lib/readBitmap.js'),
bitmap = fs.readFileSync('test.bmp');

function picturesque() {
  if (process.argv[2] == "colorize") {
    colorize.run();
    var colorizeBitmap = fs.readFileSync('colorize.bmp');
    readBitmap(colorizeBitmap);
  } else if (process.argv[2] == "randomize") {
    randomize();
    var randomizeBitmap = fs.readFileSync('randomize.bmp');
    readBitmap(randomizeBitmap);
  } else {
    readBitmap(bitmap);
  }
}

picturesque();

module.exports = picturesque;