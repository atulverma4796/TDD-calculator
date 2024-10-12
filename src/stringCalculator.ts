import {
  normalizeNewLineDelimiters,
  extractCustomDelimiter,
} from "./utils/stringUtils"
class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0
    const { normalizedNumbers } = extractCustomDelimiter(numbers)
    const normalizedNewLineNumbers =
      normalizeNewLineDelimiters(normalizedNumbers)
    const numArray = normalizedNewLineNumbers.split(",").map(Number)
    const negatives = numArray.filter((num) => num < 0)
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`)
    }
    return numArray.reduce((sum, num) => sum + num, 0)
  }
}
export default StringCalculator
