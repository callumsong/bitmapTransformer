'use strict';

var fs = require('fs');
var expect = require("chai").expect;
var colorize = require("../lib/colorize");

describe("creating colorized bitmap", function() {
  it("should be a buffer", function() {
    expect(Buffer.isBuffer(colorize())).eql(true);
  });
});