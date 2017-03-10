"use strict";

const diacritics = require("./diacritics");
const toLowerCase = str => str.toLowerCase();
const removeDiacritics = str => diacritics.reduce((str, { diacritic, letter}) => str.replace(diacritic, letter), str);
const removeSpecialChars = str => str.replace(/[^a-zA-Z1-9]/g, "");
const unique = arr => arr.filter((value, index, self) => self.indexOf(value) == index);

const union = (arr1, arr2) => arr1.concat(arr2);

const intersection = (arr1, arr2) =>
  unique(
    union(arr1, arr2)
    .filter(value => arr1.indexOf(value) != -1 && arr2.indexOf(value) != -1)
  );

const toPairs = str =>
  str.split("").map(
    (char, idx, array) => array[idx + 1] ? `${char}${array[idx + 1]}` : null
  ).filter(str => str != null);

module.exports = (a, b) => {
  const [pairsA, pairsB] = [a, b]
    .map(toLowerCase)
    .map(removeDiacritics)
    .map(removeSpecialChars)
    .map(toPairs)
    .map(unique);

  return (intersection(pairsA, pairsB).length * 2) / (pairsA.length + pairsB.length);
}
