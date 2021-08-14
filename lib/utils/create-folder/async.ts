import { promises as fs } from 'fs';
export async function createFolderAsync(relativePath: Promise<string>) {
  fs.mkdir(await relativePath, { recursive: true })
    .then(ok => console.log('Creating path:', ok))
    .catch(err => console.error(`Error:${err}`));
}
