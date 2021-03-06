'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');

var bitmapObject = exports = module.exports = {}; //jshint ignore:line

bitmapObject.type = bitmap.toString('utf-8', 0, 2);
bitmapObject.size = bitmap.readInt32LE(2);
bitmapObject.startOfPixels = bitmap.readInt32LE(10);
bitmapObject.width = bitmap.readInt32LE(18);
bitmapObject.height = bitmap.readInt32LE(22);
bitmapObject.colorDepth = bitmap.readInt16LE(28);
bitmapObject.paletteSize = bitmap.readInt32LE(46);

if (process.argv[2] == "headline") {
  console.log(bitmapObject);
}

if (process.argv[2] == "transform") {
  for (var i = 0; i < 1023; i++) {
    bitmap[54 + i] = Math.floor(Math.random() * 256);
  }
  console.dir(bitmapObject);

  fs.writeFile('colorSmile.bmp', bitmap, 'utf-8', function (err, data){
    console.log("Type 'open colorSmile.bmp' to view changed file");
  });
}

if (process.argv[2] == "randomize") {
  for (var i = 0; i < 1023; i++) {
    bitmap[54 + i] = Math.floor(Math.random() * 256);
  }
  for (var i = 1078; i < 11078; i++) {
    bitmap[i] = Math.floor(Math.random() * 256);
  }
  console.dir(bitmapObject);

  fs.writeFile('randomize.bmp', bitmap, 'utf-8', function (err, data){
    console.log("Type 'open randomize.bmp' to view changed file");
  });
}