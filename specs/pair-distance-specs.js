const { expect } = require("chai");
const pairsDistance = require("../pair-distance");

const values = [
  { pattern: "pattr en", value: 0.5454545454545454},
  { pattern: "pattren", value: 0.5},
  { pattern: "pattrn", value: 0.7272727272727273},
]

describe("#pairsDistance", () =>
  values.forEach(({ pattern, value }) => {
    it(`matches the value ${value} generated by the gem`, () =>
      expect(pairsDistance(pattern, "pattern")).to.equal(value)
    )
  })
);
