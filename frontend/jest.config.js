/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
module.exports = {
  "testEnvironment": "jsdom",
  "roots": [
    "<rootDir>/src/"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.test.json"
    }
  },
  "transformIgnorePatterns": [],
  "transform": {
    "^.+\\.(j|t)sx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  "moduleFileExtensions": [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": ["./src/setupTests.js"],
  "moduleNameMapper": {
    "\\.s?css$": "<rootDir>/src/__mocks__/styleMock.js",
    "\\.(png|svg)$": "<rootDir>/src/__mocks__/imgMock.js"
  },
  "reporters": ["default", "jest-junit"]
}
