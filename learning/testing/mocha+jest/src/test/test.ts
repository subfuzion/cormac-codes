import {strict as assert} from "node:assert/strict";
import {add} from "../lib/lib";

describe("add tests", function() {
  it("should add two numbers", function() {
     let sum = add(1, 2);
     let exp = 3;
     assert(sum === exp, `got ${sum}, but 1 + 2 should equal ${exp}`);
  });
});
