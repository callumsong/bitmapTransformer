'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');

module.exports = function(myFile) {
  var newBitmap = {};
  newBitmap.type = myFile.toString('utf-8', 0, 2);
  newBitmap.size = myFile.readInt32LE(2);
  newBitmap.startOfPixels = myFile.readInt32LE(10);
  newBitmap.width = myFile.readInt32LE(18);
  newBitmap.height = myFile.readInt32LE(22);
  newBitmap.colorDepth = myFile.readInt16LE(28);
  newBitmap.paletteSize = myFile.readInt32LE(46);
  console.log(newBitmap);
};