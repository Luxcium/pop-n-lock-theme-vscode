import * as path from 'path';
import { writeFileToPathAsync } from './write-file-to-path-async';

const normalizeFilePath = (projectRelativeFilePath: string) => {
  let pathToLog = path.relative(__dirname, projectRelativeFilePath);
  return path.normalize(pathToLog);
};

export const fileToWrite = (projectRelativeFileName: string) =>
  writeFileToPathAsync(normalizeFilePath(projectRelativeFileName));

const alexisBlack = fileToWrite('themes/Pop-N-Lock.alexis-black.json');
const tsaAsd = fileToWrite('themes/Pop-N-Lock.tsa-asd.json');
const original = fileToWrite('themes/Pop-N-Lock.original.json');

export const writeTo = {
  alexisBlack,
  tsaAsd,
  original,
};
