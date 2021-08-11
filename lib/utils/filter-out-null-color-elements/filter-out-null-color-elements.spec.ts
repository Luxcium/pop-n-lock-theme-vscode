import { filterOutNullColorElements } from '.';
import { shortDummyList } from '../../tests';

describe('filterOutNullColorElements', () => {
  it('should be defined', () => {
    const awaitedList = filterOutNullColorElements(shortDummyList())();
    expect(awaitedList.length).toBe(13);
  });
  it('should be defined', () => {
    expect(filterOutNullColorElements(shortDummyList())(true)).toBeDefined();
  });
});
