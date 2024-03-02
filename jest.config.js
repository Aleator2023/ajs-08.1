module.exports = {
    testEnvironment: "node",
    moduleFileExtensions: ["js"],
    transform: {
      "^.+\\.(js)$": "babel-jest"
    },
    moduleNameMapper: {
      "^@src/(.*)$": "<rootDir>/src/$1"
    }
  };
  