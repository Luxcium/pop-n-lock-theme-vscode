import { colorHexMatch } from './color-hex-match';
import { colorHexRegExps } from './color-hex-reg-exps';
import { colorHexMatch_ } from './colorHexMatch_temp';
import { createFolder } from './create-folder';
import {
  colorHexMatchComplex,
  extractColorInformation,
} from './extract-color-information-complex';
import { listElementPerColor } from './list-element-per-color';
import { normalizeQuotedStrings } from './normalize-strings';
import { reversedSplitLines } from './split-lines';
import { standardize } from './standardize';
import { standardizeTuple } from './standardize-tuple';
import { tsColorConstWriter } from './ts-color-cons-writer';

export const funs = {
  colorHexMatch_,
  colorHexMatch,
  colorHexMatchComplex,
  colorHexRegExps,
  createFolder,
  extractColorInformation,
  standardize,
  standardizeTuple,
  tsColorConstWriter,
  listElementPerColor,
  normalizeQuotedStrings,
  reversedSplitLines,
};

export { createColorElementsList } from './create-color-element-list';
export {
  colorHexMatch_,
  colorHexMatch,
  colorHexMatchComplex,
  colorHexRegExps,
  createFolder,
  extractColorInformation,
  standardize,
  standardizeTuple,
  tsColorConstWriter,
  listElementPerColor,
  normalizeQuotedStrings,
  reversedSplitLines,
};
