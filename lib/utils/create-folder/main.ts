import { createFolderAsync } from './async';
import { createFolderSync } from './sync';

export function createFolder(path: string): void;
export function createFolder(path: Promise<string>): Promise<void>;
export function createFolder(
  path: string | Promise<string>
): void | Promise<void> {
  if (path instanceof Promise) {
    return void createFolderAsync(path);
  }

  return void createFolderSync(path);
}

// /* istanbul ignore if */
// if (require?.main?.filename === __filename) main();
// /* istanbul ignore next */
// async function main() {
//   console.log(createFolder(`/tmp/test/karen/nancy/${Date.now()}`));
// }
