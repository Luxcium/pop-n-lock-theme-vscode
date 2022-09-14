const rrgbbbaa = /[0-9a-f]{8}/gi;
const rrggbb = /[0-9a-f]{6}/gi;
const rgba = /[0-9a-f]{4}/gi;
const rgb = /[0-9a-f]{3}/gi;
export const colorHexRegExps = [rrgbbbaa, rrggbb, rgba, rgb];

export const colorHexRexp =
  /^#?(?:[0-9a-fA-F]{3}){1,2}$|^#?(?:[0-9a-fA-F]{4}){1,2}$/;
