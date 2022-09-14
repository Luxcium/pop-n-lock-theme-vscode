import { promises as fs } from 'fs';
export async function createFolderAsync(relativePath: Promise<string>) {
  return fs.mkdir(await relativePath, { recursive: true });
}
