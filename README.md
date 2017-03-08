# Pair distance

This package provides a simple function to calculate similarity between two strings it is based this ruby gem (amatch)[https://github.com/flori/amatch] and this (article)[http://www.catalysoft.com/articles/StrikeAMatch.html].

The function returns a value between `0` and `1`, when `0` been strings completely different and `1` when they are equal.

The result from this package may have a very small difference from the `amatch gem` in some cases, but in my tests the difference is irrelevant since it was less than `0.05`.

## Usage

```javascript
const pairDistance = require("./pair-distance");
const similarity = pairDistance("James Bond", "Bond, James Bond")
console.log(similarity); // prints: 0.9411764705882353
```
