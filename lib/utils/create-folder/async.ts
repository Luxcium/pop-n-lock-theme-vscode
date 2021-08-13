import { promises as fs } from 'fs';
export async function createFolderAsync(relativePath: string) {
  (() =>
    fs.mkdir(relativePath, { recursive: true }).then(
      ok => console.log('Creating path:', ok),
      err => console.error(`Error:${err}`)
    ))();
}
