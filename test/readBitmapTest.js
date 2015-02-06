'use strict';

var expect = require("chai").expect;
var readBitmap = require("../lib/readBitmap");

describe("test.bmp properties", function() {
  it("should have a palette size of 256", function() {
    expect(readBitmap().paletteSize).eql(256);
  });
  it("should have a width and height of 100 pixels", function() {
    expect(readBitmap.width && readBitmap.height).eql(100);
  });
});