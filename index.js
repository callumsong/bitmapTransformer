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
  if (process.argv[2] == 'colorize') {
    var colorizeBitmap = fs.readFileSync('./colorize.bmp');
    console.log(colorizeBitmap);
    // readBitmap(colorizeBitmap);
  } else if (process.argv[2] == 'randomize') {
    var randomizeBitmap = fs.readFileSync('./randomize.bmp');
    console.log(randomizeBitmap);
    // readBitmap(randomizeBitmap);
  }  else {
    console.log(bitmap);
    readBitmap(bitmap);
  }
}

picturesque();
readNewFile();

module.exports = picturesque;