module.exports = {
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
    ],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.vue$': 'vue-jest'
    },
    testPathIgnorePatterns: [
      './tests/e2e/'
    ]
  }
  