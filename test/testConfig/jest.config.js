module.exports = {
  "rootDir": "../../",
  "setupTestFrameworkScriptFile": "<rootDir>/test/testConfig/enzymeConfig.js",
  "moduleFileExtensions": [
    "jsx",
    "js",
    "json"
  ],
  "moduleNameMapper": {
    "^.+\\.(css|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
    "^.+\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js"
  },
  "collectCoverageFrom": [
    "**/src/components/**/*.{js,jsx}",
    "!**/src/components/**/components/*.{js,jsx}"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/(build|node_modules|demo|coverage)/",
    "<rootDir>/src/styles/"
  ],
  "coverageThreshold": {
    "global": {
      "lines": 80
    }
  }
}
