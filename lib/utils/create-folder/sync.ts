import { mkdirSync } from 'fs';
export function createFolderSync(relativePath: string): string {
  try {
    console.log('Creating path:', mkdirSync(relativePath, { recursive: true }));
    return relativePath;
  } catch (error) {
    console.error(`Error:${error}`);
    throw error;
  }
}
