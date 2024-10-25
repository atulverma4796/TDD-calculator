export function normalizeNewLineDelimiters(numbers: string): string {
  return numbers.replace(/\n/g, ",")
}

export function extractCustomDelimiter(numbers: string): {
  delimiter: string
  normalizedNumbers: string
} {
  let delimiter = ","

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n")
    delimiter = numbers.substring(2, delimiterEndIndex)
    const regex = new RegExp(`\\${delimiter}`, "g")
    numbers = numbers.substring(delimiterEndIndex + 1).replace(regex, ",")
  }

  return { delimiter, normalizedNumbers: numbers }
}
