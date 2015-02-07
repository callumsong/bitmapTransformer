'use strict';

var fs = require('fs');
var expect = require("chai").expect;
var readBitmap = require("../lib/readBitmap");
var bitmap = fs.readFileSync('test.bmp');

describe("reading bitmaps", function() {
  it("should have a palette size of 256", function() {
    expect(readBitmap(bitmap).paletteSize).eql(256);
  });
  it("should have a width and height of 100 pixels", function() {
    expect(readBitmap(bitmap).width && readBitmap(bitmap).height).eql(100);
  });
});