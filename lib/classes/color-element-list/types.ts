export type CallbackfnT<T> = (
  previousValue: T,
  currentValue: T,
  currentIndex: number,
  array: T[]
) => T;

export type CallbackfnU<U, T> = (
  previousValue: U | T,
  currentValue: T,
  currentIndex: number,
  array: T[]
) => U | T;
