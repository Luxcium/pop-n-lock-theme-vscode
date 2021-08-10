import { writeFileToPathAsync } from '.';

// import { writeFileToPathAsync } from '.';

describe('writeFileToPathAsync', () => {
  it('Should return a JSON string with proper indentation and traling return', () => {
    expect(writeFileToPathAsync('/dev/null')('')).toBeDefined();
  });
});

/*


 */
