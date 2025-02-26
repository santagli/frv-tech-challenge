import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // ...
    "^@/(.*)$": "<rootDir>/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@components$": "<rootDir>/components/index",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@hooks$": "<rootDir>/hooks/index",
    "^@context/(.*)$": "<rootDir>/context/$1",
    "^@context$": "<rootDir>/context/index",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@theme$": "<rootDir>/theme.ts",
    "^@types/(.*)$": "<rootDir>/types/$1",
    "^@types$": "<rootDir>/types/index",
    "^@config$": "<rootDir>/config/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
