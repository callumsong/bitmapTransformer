'use strict';

var fs = require('fs'),
colorize = require('./lib/colorize.js'),
randomize = require('./lib/randomize.js'),
readBitmap = require('./lib/readBitmap.js'),
bitmap = fs.readFileSync('test.bmp');

function picturesque() {
  if (process.argv[2] == "colorize") {
    colorize();
  } else if (process.argv[2] == "randomize") {
    randomize();
  }
}

function readNewFile() {
  var randomizeBitmap = fs.readFileSync('randomize.bmp');
  var colorizeBitmap = fs.readFileSync('colorize.bmp');
  if (process.argv[2] == 'colorize') {
    readBitmap(colorizeBitmap);
  } else if (process.argv[2] == 'randomize') {    
    readBitmap(randomizeBitmap);
  }  else {
    readBitmap(bitmap);
  }
}

picturesque();
// readNewFile();

module.exports = picturesque;