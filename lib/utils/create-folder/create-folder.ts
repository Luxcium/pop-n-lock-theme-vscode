import { promises as fs } from 'fs';
export async function createFolder(relativePath: string): Promise<void> {
  (() =>
    fs.mkdir(relativePath, { recursive: true }).then(
      ok => console.log('Creating path:', ok),
      err => console.error(`Error:${err}`)
    ))();
  return void 0;
}
