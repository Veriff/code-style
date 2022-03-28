# stylelint-config

This package includes a Stylelint configurations that enforce code style rules and best practices for stylesheets. It
also requires following 4-point grid and enforces using variables for colors.

## Usage

At first, install `stylelint` and the package:

```bash
npm i stylelint @veriff/stylelint-config
```

To apply the configuration you need to add create a `.stylelintrc.json` file in the root with the following contents:

```json
{
  "extends": [
    "@veriff/stylelint-config"
  ]
}
```
