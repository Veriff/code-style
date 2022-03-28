module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // PropTypes are not needed when TypeScript is in place
    'react/prop-types': 'off',

    // With TypeScript it is completely safe and useful
    'react/jsx-props-no-spreading': 'off',

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
