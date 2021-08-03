import chroma from 'chroma-js';

export const chromaHex = (colorHex: string) =>
  chroma(colorHex).hex('rgba').toUpperCase();
