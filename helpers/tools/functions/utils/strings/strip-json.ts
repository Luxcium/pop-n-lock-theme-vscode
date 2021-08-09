import { stripBraces, stripQuotes, stripSpaces } from '.';

export function stripJson(str: string): string {
  return stripQuotes(stripBraces(stripSpaces(str)));
}
