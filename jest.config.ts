/* import type {Config} from 'jest';

const config: Config = {
  verbose: true,
};

export default config; */

 module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^.+\\.(css|png|jpg|jpeg)$': '<rootDir>/src/test/fileMocks.js',
  },
}; 