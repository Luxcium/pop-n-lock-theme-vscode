import prettier from 'prettier';
/** Should return a JSON string with proper indentation and traling return */
export function prettifyJsonString(input: any) {
  const output = prettier.format(JSON.stringify(input, null, 2), {
    parser: 'json-stringify',
  });
  return output;
}

//
