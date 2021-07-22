export const getCandlesByStockSymbol = (
  willGetFirstSymbolInfosList: any,
  getCandlesByStockId: any,
  tap?: (<T>(value: T) => T) | undefined
) => async (symbolString: string) => {
  const result = await willGetFirstSymbolInfosList(tap)(symbolString);
  return getCandlesByStockId(result.symbolId);
};

/*
storage.type.function.arrow.ts
meta.arrow.ts
meta.var.expr.ts
source.ts
foreground	source.ts storage.type.function.arrow { "foreground": "#77CC22CC" }

textmate scopes	storage.type.function.arrow.ts



foreground	source.ts storage.type.function.arrow { "foreground": "#77CC22CC" }




*/
