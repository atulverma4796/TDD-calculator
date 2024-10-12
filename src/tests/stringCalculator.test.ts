import StringCalculator from "../stringCalculator"

describe("StringCalculator", () => {
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
})
