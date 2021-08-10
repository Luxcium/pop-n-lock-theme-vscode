import { prettifyJsonString } from '.';

describe('prettifyJsonString', () => {
  it('Should return a JSON string with proper indentation and traling return', () => {
    expect(
      prettifyJsonString({
        $schema: 'vscode://schemas/color-theme',
        name: 'Pop N Lock Theme by Luxcium',
        type: 'dark',
      })
    ).toBe(`{
  "$schema": "vscode://schemas/color-theme",
  "name": "Pop N Lock Theme by Luxcium",
  "type": "dark"
}
`);
  });
});

/*


 */
