module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es2020: true,
  },
  rules: {
    // Allows underscore for GraphQL's __typename
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__typename',
        ],
      },
    ],
  },
};
