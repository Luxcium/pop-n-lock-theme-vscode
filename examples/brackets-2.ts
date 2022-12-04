export const brakets = <X>(tVal: X) => [
  [
    [
      {
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
      },
    ],
  ],
  void tVal,
];
