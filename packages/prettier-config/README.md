# prettier-config

This package contains Prettier configuration that enforce code formatting conventions.

## Usage

At first, install `prettier` and the package:

```bash
npm i prettier @veriff/prettier-config --save-dev
```

To apply the configuration you need to add `prettier` to your project's dependencies and create a `.prettierrc.json`
file in the root with the following contents:

```json
"@veriff/prettier-config"
```

If you like to overrride any prettier options, create `.prettierrc.js` ([docs](https://prettier.io/docs/en/configuration.html#sharing-configurations)):

```js
module.exports = {
    ...require("@veriff/prettier-config"),
    //
    // any prettier option overrides -  https://prettier.io/docs/en/options.html
    //
    'printWidth': 150,
};
```

### With ESLint

Setting up just `eslint` with `@veriff/eslint-config` is recommended and usually enough. However, you still might prefer
to let `prettier` take care of formatting. In this case you need to adjust `eslint` configuration to avoid any possible
conflicts with `prettier`.

Ar first, install `eslint-config-prettier` to disable conflicting `eslint` rules:

```bash
npm i eslint-config-prettier --save-dev
```

Then extend your `eslint` configuration with it:

```json
{
  "extends": [
    "@veriff/eslint-config/<config-you-use>",
    "prettier"
  ]
}
```

This will disable all `eslint` rules that might conflict with prettier. It means that code formatting is now
on `prettier` and you should make sure it works on every commit and checks formatting on the CI.

More details on this approach you can find in
the [official prettier documentation](https://prettier.io/docs/en/integrating-with-linters.html).

### With Stylelint

Setting up just `stylelint` with `@veriff/stylelint-config` is recommended and usually enough. However, you still might
prefer to let `prettier` take care of formatting. In this case you need to adjust `stylelint` configuration to avoid any
possible conflicts with `prettier`.

Ar first, install `stylelint-config-prettier` to disable conflicting `stylelint` rules:

```bash
npm i stylelint-config-prettier --save-dev
```

Then extend your `stylelint` configuration with it:

```json
{
  "extends": [
    "@veriff/stylelint-config",
    "stylelint-config-prettier"
  ]
}
```

This will disable all `stylelint` rules that might conflict with `prettier`. It means that code formatting is now
on `prettier` and you should make sure it works on every commit and checks formatting on the CI.

More details on this approach you can find in
the [official prettier documentation](https://prettier.io/docs/en/integrating-with-linters.html).

