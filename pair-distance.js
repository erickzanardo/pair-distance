"use strict";

const toLowerCase = str => str.toLowerCase();
const removeSpecialChars = str => str.replace(/[^a-zA-Z1-9]/, "");
const unique = arr => arr.filter((value, index, self) => self.indexOf(value) == index);

const union = (arr1, arr2) => arr1.concat(arr2);

const intersection = (arr1, arr2) =>
  unique(
    union(arr1, arr2)
    .filter(value => arr1.indexOf(value) != -1 && arr2.indexOf(value) != -1)
  );

const matchPairs = str => str.match(/../g);

const toPairs = str => unique(union(matchPairs(str), matchPairs(str.slice(1))));

module.exports = (a, b) => {
  const [pairsA, pairsB] = [a, b]
    .map(toLowerCase)
    .map(removeSpecialChars)
    .map(toPairs)
    .map(unique);

  return intersection(pairsA, pairsB).length * 2 / (pairsA.length + pairsB.length);
}
