import { mkdirSync } from 'fs';
export function createFolderSync(relativePath: string): string {
  try {
    mkdirSync(relativePath, { recursive: true });
    //console.log('Creating path:', mkdirSync(relativePath, { recursive: true }));
    return relativePath;
  } catch (error) {
    // console.error(`Error:${error}`);
    throw error;
  }
}
