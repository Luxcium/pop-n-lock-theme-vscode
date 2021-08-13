import { mkdirSync } from 'fs';
export function createFolderAsync(relativePath: string): string {
  try {
    console.log('Creating path:', mkdirSync(relativePath, { recursive: true }));
    return relativePath;
  } catch (error) {
    console.error(`Error:${error}`);
    return ``;
  }
}
