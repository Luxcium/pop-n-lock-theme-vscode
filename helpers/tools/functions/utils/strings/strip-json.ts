import { stripBraces, stripQuotes } from '.';

export function stripJson(str: string): string {
  return stripQuotes(stripBraces(str));
}
