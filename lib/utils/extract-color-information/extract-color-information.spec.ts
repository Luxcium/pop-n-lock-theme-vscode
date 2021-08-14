import { extractColorInformation } from '.';
import { colorHexMatchTemplated } from '../color-hex-match';
import { extractColorInformationAsync } from './async';
import { extractColorInformationSync } from './sync';

describe('DUMMY TEST', () => {
  it('extractColorInformation', () => {
    const result = extractColorInformation;

    expect(result).toBeDefined();
  });

  it('extractColorInformationAsync', () => {
    const some = extractColorInformationAsync;

    expect(some).toBeDefined();
  });

  it('extractColorInformationSync', () => {
    const some = extractColorInformationSync;

    expect(some).toBeDefined();
  });

  it('colorHexMatch', () => {
    const some = colorHexMatchTemplated;

    expect(some).toBeDefined();
  });
});

/*

 */
