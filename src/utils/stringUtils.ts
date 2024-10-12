export function normalizeNewLineDelimiters(numbers: string): string {
  return numbers.replace(/\n/g, ",")
}
