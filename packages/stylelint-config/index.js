module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-8-point-grid',
  ],
  plugins: [
    'stylelint-declaration-strict-value',
  ],
  rules: {
    // Apply scss/at-rule-no-unknown instead of at-rule-no-unknown, for stylelint-config-css-modules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // No preference on empty line before custom property
    'custom-property-empty-line-before': null,

    // Require following 4(four!)-point grid
    'plugin/8-point-grid': {
      base: 4,
      allowlist: ['6px', '2px', '1px', '-1px', '-2px', '-6px'],
      ignorelist: ['width', 'height'],
    },

    // Require using variables for colors
    'scale-unlimited/declaration-strict-value': ['/color/', {
      ignoreValues: ['currentColor', 'transparent', 'inherit'],
      disableFix: true,
    }],

    // Disable naming conventions (e.g. kebab-case/camelCase)
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,

    // Do not require shortening values (e.g. padding: 10px 20px 5px instead of 10px 20px 5px 20px)
    'declaration-block-no-redundant-longhand-properties': null,
    'shorthand-property-no-redundant-values': null,
  },
};
