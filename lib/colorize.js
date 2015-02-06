'use strict';

var colorize = exports = module.exports = {};

colorize.fs = require('fs');
colorize.bitmap = colorize.fs.readFileSync("test.bmp");

colorize.run = function(){
  for (var i = 54; i < 1078; i++) {
    colorize.bitmap[i] = Math.floor(Math.random() * 256);
  }
  colorize.fs.writeFile('colorize.bmp', colorize.bitmap, 'utf-8', function (err, data){
    console.log("Type 'open colorize.bmp' to view changed file");
  });
};