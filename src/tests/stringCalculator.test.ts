import StringCalculator from "../stringCalculator"

describe("StringCalculator-Add", () => {
  let calculator: StringCalculator

  beforeEach(() => {
    calculator = new StringCalculator()
  })

  test("should return 0 when given an empty string", () => {
    expect(calculator.add("")).toBe(0)
  })
  test("should return a number for a single input", () => {
    expect(calculator.add("1")).toBe(1)
  })
  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3)
  })
  test("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6)
  })
  test("should return the sum for a string with new lines and commas-I", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("1\n2,3")).toBe(6)
  })
  test("should return the sum for a string with new lines and commas-II", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("5,2\n3")).toBe(10)
  })
  test("should return the sum for a string with new lines and commas-III", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("5,2\n3,7")).toBe(17)
  })
  test("should return the sum for a string with custom delimiter", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("//;\n1;2;3")).toBe(6)
    expect(calculator.add("//;\n4;5")).toBe(9)
    expect(calculator.add("//;\n1;2;3")).toBe(6)
    expect(calculator.add("//;\n1;2\n3;4")).toBe(10)
    expect(calculator.add("//:\n1;2\n3;4")).toBe(10)
  })
  test("should throw an error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow(
      "Negative numbers not allowed: -2"
    )
    expect(() => calculator.add("//;\n1;2;-3")).toThrow(
      "Negative numbers not allowed: -3"
    )
    expect(() => calculator.add("//:\n-1:2:-3")).toThrow(
      "Negative numbers not allowed: -1, -3"
    )
  })
})
describe("StringCalculator - Subtract Method", () => {
  let calculator: StringCalculator

  beforeEach(() => {
    calculator = new StringCalculator()
  })

  test("should return 0 for an empty string", () => {
    expect(calculator.subtract("")).toBe(0)
  })

  test("should return the number for a single number", () => {
    expect(calculator.subtract("5")).toBe(5)
  })

  test("should correctly subtract two numbers", () => {
    expect(calculator.subtract("10,5")).toBe(5)
  })

  test("should correctly subtract multiple numbers", () => {
    expect(calculator.subtract("10,5,2")).toBe(3)
  })

  test("should handle new line as delimiter", () => {
    expect(calculator.subtract("10\n5\n2")).toBe(3)
  })

  test("should handle custom delimiter", () => {
    expect(calculator.subtract("//;\n10;5;2")).toBe(3)
  })

  test("should not throw error for negative numbers and return the result", () => {
    expect(calculator.subtract("10,-5")).toBe(15)
    expect(calculator.subtract("-10,-5")).toBe(-5)
  })

  test("should handle multiple negative numbers in the string", () => {
    expect(calculator.subtract("10,-5,-2")).toBe(17)
  })
})

describe("Multiply Method", () => {
  let calculator: StringCalculator

  beforeEach(() => {
    calculator = new StringCalculator()
  })

  test("should return 0 for an empty string", () => {
    expect(calculator.multiply("")).toBe(0)
  })

  test("should return the number when a single number is provided", () => {
    expect(calculator.multiply("5")).toBe(5)
    expect(calculator.multiply("10")).toBe(10)
  })

  test("should correctly multiply two numbers", () => {
    expect(calculator.multiply("2,3")).toBe(6)
    expect(calculator.multiply("5,4")).toBe(20)
  })

  test("should correctly multiply multiple numbers", () => {
    expect(calculator.multiply("2,3,4")).toBe(24)
    expect(calculator.multiply("1,2,3,4,5")).toBe(120)
  })
  test("should handle custom delimiter with multiply", () => {
    expect(calculator.multiply("//;\n10;5;2")).toBe(100)
  })
})
