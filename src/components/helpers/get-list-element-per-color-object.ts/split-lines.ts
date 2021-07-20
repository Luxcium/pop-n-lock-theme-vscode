export async function splitLines(
  lines_: Promise<string[]>
): Promise<[string, string][]> {
  return (await lines_).map(line => {
    return line.split(':').reverse() as [string, string];
  });
}
