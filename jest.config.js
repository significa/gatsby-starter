module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '.cache'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(js|jsx)$',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/public/js/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
}
