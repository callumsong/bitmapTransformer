'use strict';

var expect = require("chai").expect;
var bitmap_transformer = require("../bitmap_transformer");

describe("headline properties", function() {
  it("should have a palette size of 256", function() {
    expect(bitmap_transformer.paletteSize).eql(256);
  });
  it("should have a width and height of 100 pixels", function() {
    expect(bitmap_transformer.width && bitmap_transformer.height).eql(100);
  });
});