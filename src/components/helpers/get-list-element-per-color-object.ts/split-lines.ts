export async function splitLines(
  lines: Promise<string[]>
): Promise<[string, string][]> {
  return (await lines).map(line => {
    return line.split(':').reverse() as [string, string];
  });
}
