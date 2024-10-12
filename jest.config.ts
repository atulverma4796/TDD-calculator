import type { Config } from "@jest/types"
const config: Config.InitialOptions = {
  verbose: true,
  testMatch: ["**/src/tests/**/*.test.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
}

export default config
