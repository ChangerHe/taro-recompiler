module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/src/components/**/__test__/*.test.js'],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    react: 'react',
    'react-addons-test-utils': 'nerv-test-utils',
    'react-dom': 'react',
    '.scss$': '<rootDir>/__mock__/styleMock.js'
  },
  testURL: 'http://localhost'
}
