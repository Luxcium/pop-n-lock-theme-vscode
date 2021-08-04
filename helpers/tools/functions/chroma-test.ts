import chroma from 'chroma-js';

console.log(
  "chroma('FFBBCCDD').hex('rgba') ->",
  chroma('FFBBCCDD').hex('rgba')
);
// chroma('FFBBCCDD').hex('rgba') -> #ffbbccde

console.log(
  "chroma('orange').hex() === '#ffa500'",
  chroma('orange').hex() === '#ffa500'
);
console.log(
  "chroma('orange').alpha(0.75).hex() === '#ffa500bf'",
  chroma('orange').alpha(0.75).hex() === '#ffa500bf',
  chroma('orange').alpha(0.75).hex()
);

console.log(
  "chroma('#f058').hex() === '#ff005588'",
  chroma('#f058').hex() === '#ff005588',
  chroma('#f058').hex()
  // chroma('#f058').hex() === '#f058' false #ff005587
);
