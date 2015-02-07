'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync("test.bmp");

module.exports = function() {
  for (var i = 1078; i < 11078; i++) {
    bitmap[i] = Math.floor(Math.random() * 256);
  }
  fs.writeFileSync('randomize.bmp', bitmap, 'utf-8', function (err, data){
    console.log("Type 'open randomize.bmp' to view changed file");
  });
  var randomizeBuffer = fs.readFileSync('randomize.bmp');
  return randomizeBuffer;
};