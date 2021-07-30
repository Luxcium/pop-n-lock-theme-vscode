export const terminalCursor = {
  background: '#29153A',
  foreground: '#F33',
};

export const terminal = {
  background: '#202010',
  border: '#77116655',
  foreground: '#C4BDB5DD',
  selectionBackground: '#33227777',
  ansiBlack: '#201020',
  ansiBlue: '#458588',
  ansiCyan: '#689E6A',
  ansiGreen: '#98971A',
  ansiMagenta: '#B16286',
  ansiRed: '#CC241D',
  ansiWhite: '#C0B0A0',
  ansiYellow: '#E7A931',
  ansiBrightBlack: '#928374',
  ansiBrightBlue: '#99C6CA',
  ansiBrightCyan: '#8AE180',
  ansiBrightGreen: '#B5C033',
  ansiBrightMagenta: '#D66282',
  ansiBrightRed: '#F42C3E',
  ansiBrightWhite: '#DDCCAA',
  ansiBrightYellow: '#FABE2F',
};

export function terminalJson(terminalObj: any, name: string) {
  let accumulator = '';
  for (const property in terminalObj) {
    accumulator = `${accumulator}"${name}.${property}": "${terminalObj[property]}", `;
  }
  const sliced = accumulator.slice(0, -2);
  return JSON.parse(`{${sliced}}`);
}

export function getTerminalColors() {
  return {
    ...terminalJson(terminal, 'terminal'),
    ...terminalJson(terminalCursor, 'terminalCursor'),
  };
}

// console.log('getTerminal() :>> ', getTerminalColors());
