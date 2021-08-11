import { filterOutNullColorElements } from '.';
import { shortDummyList } from '../../tests';
void shortDummyList;

describe('filterOutNullColorElements', () => {
  it('should be defined', () => {
    const awaitedList = filterOutNullColorElements(shortDummyList())(false);
    expect(awaitedList.length).toBe(13);
  });
  it('should be defined', () => {
    expect(filterOutNullColorElements(shortDummyList())(true)).toBeDefined();
  });
});
