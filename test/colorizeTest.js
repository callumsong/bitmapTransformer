'use strict';

var fs = require('fs');
var expect = require("chai").expect;
var colorize = require("../lib/colorize");
var bitmapColorize = fs.readFileSync('colorize.bmp');

describe("creating colorized bitmap", function() {
  it("should be a buffer", function() {
    expect(Buffer.isBuffer(colorize())).eql(true);
  });
});