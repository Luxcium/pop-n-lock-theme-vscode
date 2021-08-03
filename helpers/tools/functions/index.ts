import { colorHexMatch } from './color-hex-match';
import { colorHexRegExps } from './color-hex-reg-exps';
import { colorHexMatch_ } from './colorHexMatch_temp';
import { createFolder } from './create-folder';
import {
  colorHexMatchComplex,
  extractColorInformation,
} from './extract-color-information-complex';
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
};

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
};
