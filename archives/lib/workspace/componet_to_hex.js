function format(color) {
  return Math.floor(color * 255)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
}

const myColors = [
  {
    Red: 0.85099476248393557,
    Blue: 0.853973388671875,
    Alpha: 1,
    Green: 0.75335109699517488,
  },
  {
    Red: 0.996551513671875,
    Blue: 0.33394268481060863,
    Alpha: 1,
    Green: 0.79744246790430962,
  },
  {
    Red: 0.94989013671875,
    Blue: 0.72556381765753031,
    Alpha: 1,
    Green: 0.83772695314983092,
  },
  {
    Red: 0.20258408715164933,
    Blue: 0.479583740234375,
    Alpha: 1,
    Green: 0.12064967537298799,
  },
  {
    Red: 0.38342204410582781,
    Blue: 0.836761474609375,
    Alpha: 1,
    Green: 0.7518018186261328,
  },
  {
    Red: 0.90000000000000002,
    Blue: 0.63,
    Alpha: 1,
    Green: 0.6,
  },
  {
    Red: 0.63,
    Blue: 0.63,
    Alpha: 1,
    Green: 0.9,
  },
  {
    Red: 0.63,
    Blue: 0.90000000000000002,
    Alpha: 1,
    Green: 0.6,
  },
  {
    Red: 0.90000000000000002,
    Blue: 0.90000000000000002,
    Alpha: 1,
    Green: 0.6,
  },
  {
    Red: 0.63,
    Blue: 0.90000000000000002,
    Alpha: 1,
    Green: 0.90000000000000002,
  },
  {
    Red: 1,
    Blue: 0,
    Alpha: 0.1065673828125,
    Green: 0.6873779296875,
  },
  {
    Red: 0.929229736328125,
    Blue: 0.26110482169315219,
    Alpha: 1,
    Green: 0.70162671426878498,
  },
  {
    Red: 0,
    Blue: 0.73423302173614502,
    Alpha: 1,
    Green: 0.56792816677625524,
  },
  {
    Red: 1,
    Blue: 0.77647058823529413,
    Alpha: 1,
    Green: 0.97254901960784312,
  },
  {
    Red: 0.60441819950938225,
    Blue: 0.76435546953587163,
    Alpha: 1,
    Green: 0.94537353515625,
  },
  {
    Red: 0.72137451171875,
    Blue: 0.21054766327142715,
    Alpha: 1,
    Green: 0.71877111561002494,
  },
  {
    Red: 0.993927001953125,
    Blue: 0.31809743368474286,
    Alpha: 1,
    Green: 0.25125715089961886,
  },
  {
    Red: 0.70340559678152204,
    Blue: 0.881439208984375,
    Alpha: 1,
    Green: 0.86690585288618294,
  },
  {
    Red: 0.15696869697421789,
    Blue: 0.241424560546875,
    Alpha: 1,
    Green: 0.072512833401560783,
  },
  {
    Red: 0.80000000000000004,
    Blue: 0.20000000000000001,
    Alpha: 1,
    Green: 0.13333333333333333,
  },
  {
    Red: 0.79437255859375,
    Blue: 0.18630228005349636,
    Alpha: 1,
    Green: 0.21062508561859181,
  },
  {
    Red: 0.514251708984375,
    Blue: 0.38812915468588471,
    Alpha: 1,
    Green: 0.45119044780979312,
  },
  {
    Red: 0.83860548997372264,
    Blue: 0.28261736640706658,
    Alpha: 1,
    Green: 0.885650634765625,
  },
  {
    Red: 1,
    Blue: 0,
    Alpha: 0.5,
    Green: 0.1491314172744751,
  },
  {
    Red: 0.12412435412704781,
    Blue: 0.25225830078125,
    Alpha: 1,
    Green: 0.050281527452170849,
  },
  {
    Red: 0.814056396484375,
    Blue: 0.63076452352106571,
    Alpha: 1,
    Green: 0.72241046000272036,
  },
  {
    Red: 0.18627165630459785,
    Blue: 0.8040771484375,
    Alpha: 1,
    Green: 0.45260223436457636,
  },
  {
    Red: 0.9759521484375,
    Blue: 0.8767873328179121,
    Alpha: 1,
    Green: 0.92636974062770605,
  },
  {
    Red: 0.49509981647133827,
    Blue: 0.61470430798153586,
    Alpha: 1,
    Green: 0.7403564453125,
  },
  {
    Red: 0.014733385294675827,
    Blue: 0.1424560546875,
    Alpha: 1,
    Green: 0.044068126806223518,
  },
  {
    Red: 0.836944580078125,
    Blue: 0.30717766378074862,
    Alpha: 1,
    Green: 0.24831467308104038,
  },
  {
    Red: 0.935546875,
    Blue: 0.604401982149675,
    Alpha: 1,
    Green: 0.47825151681900024,
  },
  {
    Red: 0.822418212890625,
    Blue: 0.67029558027361413,
    Alpha: 1,
    Green: 0.5429370724596083,
  },
].map(I => {
  const R = {};

  R.Red = format(I.Red);
  R.Green = format(I.Green);
  R.Blue = format(I.Blue);
  R.Alpha = format(I.Alpha);

  if ((I.Alpha = 1)) {
    R.hexS_tring = `#${R.Red}${R.Green}${R.Blue}`.toUpperCase();
    return R;
  }
  R.hexS_tring = `#${R.Red}${R.Green}${R.Blue}${R.Alpha}`.toUpperCase();
  return R;
});

console.log(myColors.map(R => R.hexS_tring));
// [

//   {
//     'terminal.background': '#221E25',
//     'terminal.ansiCyan': '#689E6A',
//     'terminal.border': '#77116633',
//     'terminal.ansiBrightCyan': '#8AE180',
//     'terminal.ansiBrightBlack': '#928374',
//     'terminal.ansiGreen': '#98971A',
//     'terminal.ansiBrightBlue': '#99C6CA',
//     'terminal.ansiMagenta': '#B16286',
//     'terminal.ansiBrightGreen': '#B5C033',
//     'terminal.ansiWhite': '#C0B0A0',
//     'terminal.ansiRed': '#CC241D',
//     'terminal.ansiBrightMagenta': '#D66282',
//     'terminal.foreground': '#DDBC9A',
//     'terminal.ansiBrightWhite': '#DDCCAA',
//     'terminal.ansiYellow': '#E7A931',
//     'terminal.ansiBrightRed': '#F42C3E',
//     'terminal.ansiBrightYellow': '#FABE2F',
//   },
/*
foregroundBackground
Bold
Links
Cursor
Cursor text
Selection
Selected textBadge
Tab Color
Underline Color
Cursor guide

black
Red
green
yellow
blue
magenta
cyan
withe

bright black
bright Red
bright green
bright yellow
bright blue
bright magenta
bright cyan
bright withe

ansiansiBright
ansiBright



"Ansi 0 Color",
black
"Ansi 1 Color",
Red
"Ansi 2 Color",
green
"Ansi 3 Color",
yellow
"Ansi 4 Color",
blue
"Ansi 5 Color",
magenta
"Ansi 6 Color",
cyan
"Ansi 7 Color",
withe

"Ansi 8 Color",
bright black
"Ansi 9 Color" ,
bright Red
"Ansi 10 Color",
bright green
"Ansi 11 Color",
bright yellow
"Ansi 12 Color",
bright blue
"Ansi 13 Color",
bright magenta
"Ansi 14 Color",
bright cyan
"Ansi 15 Color",
bright withe

"Ansi 0 Color",
"Ansi 1 Color",
"Ansi 2 Color",
"Ansi 3 Color",
"Ansi 4 Color",
"Ansi 5 Color",
"Ansi 6 Color",
"Ansi 7 Color",

"Ansi 8 Color",
"Ansi 9 Color" ,
"Ansi 10 Color",
"Ansi 11 Color",
"Ansi 12 Color",
"Ansi 13 Color",
"Ansi 14 Color",
"Ansi 15 Color",
*/


















[
  '#0090BB',
  '#030B24',
  '#1F0C40',
  '#28123D',
  '#2F73CD',
  '#331E7A',
  '#61BFD5',
  '#7EBC9C',
  '#837362',
  '#9AF1C2',
  '#A099E5',
  '#A0E5A0',
  '#A0E5E5',
  '#B3DDE0',
  '#B7B735',
  '#CA352F',
  '#CC2233',
  '#CFB8A0',
  '#D18AAA',
  '#D53F4E',
  '#D5E148',
  '#D9C0D9',
  '#E599A0',
  '#E599E5',
  '#ECB242',
  '#EE799A',
  '#F2D5B9',
  '#F8ECDF',
  '#FD4051',
  '#FECB55',
  '#FF2600',
  '#FFAF00',
  '#FFF8C6',
];
//   '#0090bb',
//   '#030b24',
//   '#1f0c40',
//   '#28123d',
//   '#2f73cd',
//   '#331e7a',
//   '#61bfd5',
//   '#7ebc9c',
//   '#837362',
//   '#9af1c2',
//   '#a099e5',
//   '#a0e5a0',
//   '#a0e5e5',
//   '#b3dde0',
//   '#b7b735',
//   '#ca352f',
//   '#cc2233',
//   '#cfb8a0',
//   '#d18aaa',
//   '#d53f4e',
//   '#d5e148',
//   '#d9c0d9',
//   '#e599a0',
//   '#e599e5',
//   '#ecb242',
//   '#ee799a',
//   '#f2d5b9',
//   '#f8ecdf',
//   '#fd4051',
//   '#fecb55',
//   '#ff2600',
//   '#ffaf00',
//   '#fff8c6',

// ];
