import { normalizeNewLineDelimiters } from "./utils/stringUtils"
class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0
    const normalizedNewLineNumbers = normalizeNewLineDelimiters(numbers)
    const numArray = normalizedNewLineNumbers.split(",").map(Number)
    return numArray.reduce((sum, num) => sum + num, 0)
  }
}
export default StringCalculator
