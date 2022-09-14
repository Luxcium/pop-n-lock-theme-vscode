import type { ColorElement } from '.';

export type ColorElementSelections = {
  list: { [selctionName: string]: ColorElement[] };
  setList: string[];
  length: number;
  setLengths?: any;
};
