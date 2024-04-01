module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-const-assign': 'off',
    camelcase: 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
