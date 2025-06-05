module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  coverageDirectory: "coverage",
  coverageReporters: ["html", "lcov", "text"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
  },
}
