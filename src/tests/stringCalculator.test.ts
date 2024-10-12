import StringCalculator from "../stringCalculator"

describe("StringCalculator", () => {
  let calculator: StringCalculator

  beforeEach(() => {
    calculator = new StringCalculator()
  })

  describe("Add Method", () => {
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

    test("should return the sum with new lines as delimiters", () => {
      expect(calculator.add("1\n2,3")).toBe(6)
      expect(calculator.add("5,2\n3")).toBe(10)
      expect(calculator.add("5,2\n3,7")).toBe(17)
    })

    test("should handle custom delimiter", () => {
      expect(calculator.add("//;\n1;2;3")).toBe(6)
      expect(calculator.add("//;\n4;5")).toBe(9)
      expect(calculator.add("//;\n1;2\n3;4")).toBe(10)
    })

    test("should throw an error for negative numbers", () => {
      expect(() => calculator.add("1,-2,3")).toThrow(
        "Negative numbers not allowed: -2"
      )
      expect(() => calculator.add("//;\n1;2;-3")).toThrow(
        "Negative numbers not allowed: -3"
      )
    })
  })

  describe("Subtract Method", () => {
    test("should return 0 for an empty string", () => {
      expect(calculator.subtract("")).toBe(0)
    })

    test("should handle a single number", () => {
      expect(calculator.subtract("5")).toBe(5)
    })

    test("should correctly subtract two numbers", () => {
      expect(calculator.subtract("10,5")).toBe(5)
    })

    test("should handle multiple numbers", () => {
      expect(calculator.subtract("10,5,2")).toBe(3)
    })

    test("should handle new line as delimiter", () => {
      expect(calculator.subtract("10\n5\n2")).toBe(3)
    })

    test("should handle custom delimiter", () => {
      expect(calculator.subtract("//;\n10;5;2")).toBe(3)
    })

    test("should handle negative numbers without error", () => {
      expect(calculator.subtract("10,-5")).toBe(15)
      expect(calculator.subtract("-10,-5")).toBe(-5)
    })
  })

  describe("Multiply Method", () => {
    test("should return 0 for an empty string", () => {
      expect(calculator.multiply("")).toBe(0)
    })

    test("should handle single number multiplication", () => {
      expect(calculator.multiply("5")).toBe(5)
      expect(calculator.multiply("10")).toBe(10)
    })

    test("should multiply two numbers", () => {
      expect(calculator.multiply("2,3")).toBe(6)
    })

    test("should multiply multiple numbers", () => {
      expect(calculator.multiply("2,3,4")).toBe(24)
      expect(calculator.multiply("1,2,3,4,5")).toBe(120)
    })

    test("should handle custom delimiter with multiplication", () => {
      expect(calculator.multiply("//;\n10;5;2")).toBe(100)
    })
  })

  describe("Divide Method", () => {
    test("should return 0 for an empty string", () => {
      expect(calculator.divide("")).toBe(0)
    })

    test("should divide two numbers", () => {
      expect(calculator.divide("8,2")).toBe(4)
    })

    test("should divide multiple numbers", () => {
      expect(calculator.divide("16,2,2")).toBe(4)
    })

    test("should throw an error when dividing by zero", () => {
      expect(() => calculator.divide("8,0")).toThrow(
        "Division by zero is not allowed"
      )
    })

    test("should handle custom delimiter with division", () => {
      expect(calculator.divide("//;\n10;2;5")).toBe(1)
    })
  })
})
