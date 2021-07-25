import { readFile, writeFile } from 'fs';
import { promisify } from 'util';
import { readFileAsyncFromPath } from './read-file-async-from-path';
import { writeFileToPathAsync } from './write-file-to-path-async';

export const readFileAsync = promisify(readFile);
export const writeFileAsync = promisify(writeFile);

export const IO = {
  read: readFileAsyncFromPath,
  write: writeFileToPathAsync,
};

export { fileToWrite, writeTo } from './write-to-file';
