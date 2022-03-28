module.exports = {
  plugins: ['testing-library'],
  extends: ['plugin:testing-library/react'],
  rules: {
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/prefer-wait-for': 'error',
    'testing-library/no-await-sync-events': 'error',
  },
};
