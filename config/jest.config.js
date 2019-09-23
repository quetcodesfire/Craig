module.exports = {
  collectCoverage: true,

  collectCoverageFrom: ['src/**/*.js'],

  coveragePathIgnorePatterns: ['src/stories'],

  rootDir: '../',

  globals: {
    __PATH_PREFIX__: ''
  },

  modulePaths: [
    '<rootDir>/src',
    '<rootDir>/src/components/',
    '<rootDir>/config',
    '<rootDir>/node_modules'
  ],

  testPathIgnorePatterns: ['node_modules', '.cache', '.storybook'],

  setupFilesAfterEnv: [
    '<rootDir>/config/jest-setup.config.js',
    '<rootDir>/config/jest-loadershim.config.js'
  ],

  transform: {
    '^.+\\.js$': '<rootDir>/config/jest-preprocess.config.js'
  },

  transformIgnorePatterns: ['node_modules/(?!(gatsby|fogg)/)'],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy'
  }
};
