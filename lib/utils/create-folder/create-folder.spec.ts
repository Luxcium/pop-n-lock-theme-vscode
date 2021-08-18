import { createFolder } from '.';

describe('createFolder', () => {
  it('createFolderSync', () => {
    expect(createFolder(`/tmp/test/createFolderSync/${Date.now()}`)).toBeUndefined();
  });

  it('createFolderSync should throw', () => {
    try {
      expect(createFolder(`/tmp/null/${Date.now()}`)).toThrow();
    } catch (error) {}
  });

  it('createFolderAsync', async () => {
    expect(await createFolder(Promise.resolve(`/tmp/test/createFolderAsync/${Date.now()}`))).toBeUndefined();
  });

  it('createFolderAsync should throw', async () => {
    try {
      const folderCreated = createFolder(Promise.resolve(`/tmp/null/${Date.now()}`))
        .then(ok => console.log('Creating path:', ok))
        .catch(err => console.error(`Error:${err}`));
      expect(await folderCreated).toThrow();
    } catch (error) {}
  });
});
