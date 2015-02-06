'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync("test.bmp");

module.exports = function(){
  for (var i = 54; i < 1078; i++) {
    bitmap[i] = Math.floor(Math.random() * 256);
  }
  fs.writeFile('colorize.bmp', bitmap, 'utf-8', function (err, data){
    console.log("Type 'open colorize.bmp' to view changed file");
  });
};