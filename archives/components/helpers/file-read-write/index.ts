import { promises } from 'fs';
import { readFileAsyncFromPath } from './read-file-async-from-path';
import { writeFileToPathAsync } from './write-file-to-path-async';

export const readFileAsync = promises.readFile;
export const writeFileAsync = promises.writeFile;

export const IO = {
  read: readFileAsyncFromPath,
  write: writeFileToPathAsync,
};

export { fileToWrite, writeTo } from './write-to-file';
