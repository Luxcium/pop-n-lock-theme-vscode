import { filterOutNullColorElements } from '.';
import { shortDummyList } from '../../tests';
void shortDummyList;

describe('filterOutNullColorElements', () => {
  it('should be defined', async () => {
    const awaitedList = await filterOutNullColorElements(
      Promise.resolve(shortDummyList())
    )(false);
    expect(awaitedList.length).toBe(13);
  });
  it('should be defined', () => {
    expect(
      filterOutNullColorElements(Promise.resolve(shortDummyList()))(true)
    ).toBeDefined();
  });
});
