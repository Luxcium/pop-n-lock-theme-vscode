export type DummyGeneric<T> = Promise<T>;

export const brakets = {
  BracketsColors: [
    {
      brakets<T>(value: T) {
        return value as T;
      },
    },
    [
      {
        brakets<T>(value: T) {
          return value as T;
        },
      },
      [
        {
          brakets<T>(value: T) {
            return value as T;
          },
        },
      ],
    ],
  ],
};
