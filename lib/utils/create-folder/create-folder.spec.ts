import { createFolder } from '.';

describe('createFolder', () => {
  it('createFolderSync', () => {
    expect(createFolder(`/tmp/test/createFolderSync/${Date.now()}`)).toBeUndefined();
  });

  it('createFolderSync should throw', () => {
    try {
      expect(createFolder(`/dev/null/${Date.now()}`)).toThrow();
    } catch (error) {}
  });

  it('createFolderAsync', async () => {
    expect(await createFolder(Promise.resolve(`/tmp/test/createFolderAsync/${Date.now()}`))).toBeUndefined();
  });

  it('createFolderAsync should throw', async () => {
    try {
      expect(await createFolder(Promise.resolve(`/dev/null/${Date.now()}`))).toThrow();
    } catch (error) {}
  });
});
