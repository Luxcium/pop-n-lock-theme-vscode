import type { ColorElementTupleOrList } from './sync';
import { normalizeQuotedStringsSync } from './sync';

export async function normalizeQuotedStringsAsync(
  stringsTupleList: Promise<ColorElementTupleOrList>
) {
  return normalizeQuotedStringsSync(await stringsTupleList);
}
