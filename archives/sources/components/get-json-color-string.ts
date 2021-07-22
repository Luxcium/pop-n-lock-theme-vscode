export function getJsonColorString(colorInfos: any, start: string): any {
  function recursor(_colorInfos: any, _start: string) {
    let accumulator = {};
    for (let info in _colorInfos) {
      if (_colorInfos[info]?.color !== undefined) {
        const composant = JSON.parse(
          `{"${_start ? _start + '.' : ''}${info}": "${
            _colorInfos[info]?.color
          }"}`
        );
        accumulator = { ...accumulator, ...composant };
      } else {
        accumulator = {
          ...accumulator,
          ...recursor(_colorInfos[info], info),
        };
      }
    }
    return accumulator;
  }
  const out = recursor(colorInfos, start);

  return `${JSON.stringify(out, null, 2)}\n`;
}
