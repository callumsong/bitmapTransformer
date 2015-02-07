'use strict';

var fs = require('fs');
var expect = require("chai").expect;
var randomize = require("../lib/randomize");

describe("creating randomized bitmap", function() {
  it("should be a buffer", function() {
    expect(Buffer.isBuffer(randomize())).eql(true);
  });
});