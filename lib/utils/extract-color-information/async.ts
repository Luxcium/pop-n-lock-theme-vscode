import { ColorElementTuple } from '../../types/ColorElementTuple';
import { colorHexMatchTemplated } from '../color-hex-match';

export async function extractColorInformationAsync(
  colorElementTupleList: Promise<ColorElementTuple[]>,
  template: string | [string] | [string, string] = 'x'
): Promise<ColorElementTuple[]> {
  return Promise.all(
    (await colorElementTupleList).map(
      async colorElementTuple => {
        const [colorElementName, colorHexValue] =
          colorElementTuple;
        return [
          colorElementName,
          colorHexMatchTemplated(colorHexValue, template),
        ] as ColorElementTuple;
      }
    )
  );
}
