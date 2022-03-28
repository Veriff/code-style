# @veriff/eslint-config

This package includes different ESLint configurations that enforce code style rules and best practices for JavaScript,
TypeScript, and React projects.

## Usage

At first, install `eslint` and the package:

```bash
npm i -D eslint @veriff/eslint-config
```

There are 5 different configuration for different type of projects:

1. `base` – plain TypeScript
2. `base-javascript` – plain JavaScript
3. `react` – React / TypeScript
4. `react-javascript` – React / JavaScript
5. `jest` – Jest
6. `testing-library` – Testing library for React

To apply the configuration you need to add create a `.eslintrc.json` file in the root with the following contents:

```json
{
  "extends": [
    "@veriff/eslint-config/<config-name>"
  ]
}
```

For TypeScript-based projects you also must provide a path to `tsconfig.json` to make ESLint understand the project
better:

```json
{
  "extends": [
    "@veriff/eslint-config/<config-name>"
  ],
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  }
}
```

For example, the React / TypeScript application with tests (Jets + testing-library) with `tsconfig.json` in the root
should have the following ESLint configuration:

```json
{
  "extends": [
    "@veriff/eslint-config/react",
    "@veriff/eslint-config/jest",
    "@veriff/eslint-config/testing-library"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Or the Node.js plain JavaScript application with tests should have the following configuration:

```json
{
  "extends": [
    "@veriff/eslint-config/base-javascript",
    "@veriff/eslint-config/jest"
  ]
}
```

### Minimal

Considering the code style is pretty strict, it might be hard to migrate to it right away. So there are _minimal_
versions of the configs that include only essential best practices and prevent common issues (basically, they just don't
have Airbnb):

1. `base-minimal` – plain TypeScript
2. `base-javascript-minimal` – plain JavaScript
3. `react-minimal` - React / TypeScript
4. `react-javascript-minimal` – React / Javascript

These configs are not permanent and exposed only for simplifying the migration process. They will be deprecated in the
next major release.
