import {
  normalizeNewLineDelimiters,
  extractCustomDelimiter,
} from "./utils/stringUtils"

class StringCalculator {
  private parseNumbers(numbers: string): number[] {
    if (!numbers) return []
    const { normalizedNumbers } = extractCustomDelimiter(numbers)
    const normalizedNewLineNumbers =
      normalizeNewLineDelimiters(normalizedNumbers)
    const numArray = normalizedNewLineNumbers.split(",").map(Number)
    return numArray
  }

  add(numbers: string): number {
    const numArray = this.parseNumbers(numbers)
    if (numArray.length === 0) return Number(numbers) || 0
    const negatives = numArray.filter((num) => num < 0)
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`)
    }
    return numArray.reduce((sum, num) => sum + num, 0)
  }

  subtract(numbers: string): number {
    const numArray = this.parseNumbers(numbers)
    if (numArray.length === 0) return Number(numbers) || 0
    return numArray.length === 1
      ? numArray[0]
      : numArray.reduce((difference, num) => difference - num)
  }

  multiply(numbers: string): number {
    const numArray = this.parseNumbers(numbers)
    if (numArray.length === 0) return Number(numbers) || 0
    return numArray.reduce((product, num) => product * num, 1)
  }

  divide(numbers: string): number {
    const numArray = this.parseNumbers(numbers)
    if (numArray.length === 0) return Number(numbers) || 0
    if (numArray.includes(0)) {
      throw new Error("Division by zero is not allowed")
    }
    return numArray.reduce((quotient, num) => quotient / num)
  }
}

export default StringCalculator
