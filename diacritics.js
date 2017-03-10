const diacritics = [
  { diacritic: /[àáâãäå]/g, letter: "a", }, 
  { diacritic: /[òóôõöø]/g, letter: "o", },
  { diacritic: /[èéêëð]/g, letter: "e", },
  { diacritic: /[ç]/g, letter: "c", },
  { diacritic: /[ìíîï]/g, letter: "i", },
  { diacritic: /[ùúûüñ]/g, letter: "u", },
  { diacritic: /[š]/g, letter: "s", },
  { diacritic: /[ÿý]/g, letter: "y", },
  { diacritic: /[ž]/g, letter: "z", },
]

module.exports = diacritics;
