module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['jsx-a11y', 'import', 'react', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
  },
};
