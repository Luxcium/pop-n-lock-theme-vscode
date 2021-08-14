import { PathOrFileDescriptor, writeFile } from 'fs';
import { promisify } from 'util';

export function writeFileToPathAsync(
  path: PathOrFileDescriptor
) {
  return (data: string): Promise<void> =>
    promisify(writeFile)(path, data, { encoding: 'utf8' });
}
