import { getTerminalColors } from './terminal';

describe('terminal colors to JSON', () => {
  it('should export function getTerminal()', () => {
    const result = getTerminalColors();
    expect(result).toBeDefined();
  });
});
// function terminalJson(terminalObj: any, name: string) {
//   let accumulator = '';
//   for (const property in terminalObj) {
//     accumulator = `${accumulator}"${name}.${property}": "${terminalObj[property]}", `;
//   }
//   const sliced = accumulator.slice(0, -2);
//   return JSON.parse(`{${sliced}}`);
// }

// export function getTerminal() {
//   return {
//     ...terminalJson(terminal, 'terminal'),
//     ...terminalJson(terminalCursor, 'terminalCursor'),
//   };
// }
