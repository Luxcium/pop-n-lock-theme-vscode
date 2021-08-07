import prettier from 'prettier';

export function prettifyJsonString(input: any) {
  const output = prettier.format(JSON.stringify(input, null, 2), {
    parser: 'json-stringify',
  });
  return output;
}
