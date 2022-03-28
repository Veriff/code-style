---
owner: "Developer Experience"
description: "Veriff style guide and shared linters configurations"
status: "internal"
type: "tooling"
---

# Veriff Code Style

This repository contains configurations for different linters that apply Veriff's code style rules and best practices.

## Get Started

To apply this code style in your project you need to configure necessary liters. This repository has 3 packages for
ESLint, Stylelint, and Prettier with extensive guides how to set them up for any kind of project. Check README's of the
packages you need:

- [@veriff/eslint-config](packages/eslint-config/README.md)
- [@veriff/stylelint-config](packages/stylelint-config/README.md)
- [@veriff/prettier-config](packages/prettier-config/README.md)

## Guidelines

In general, the code you write must be clean, clear, flexible, and consistent. To achieve it we created a ruleset for
linters that enforce the best practices and code style conventions.

### JavaScript / TypeScript

We prefer TypeScript to JavaScript because of its strict typing which helps a lot to avoid bugs.

We follow Airbnb style guide for JavaScript / TypeScript / React projects as well as some necessary best practices
included into `eslint/recommended` and `typescript-eslint/recommended` ruleset-s.

In addition to enforcing the standard code style, these rules are meant to catch common problems and insist on following
important best practices such as required explicit types and banning `any`.

#### Jest / Testing-Library

There are specific rules for tests written with Jest and/or Testing Library. They
prevent [common mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library/)
and help writing better tests.

#### Minimal

Considering the strictness of the current version of the code style, the `minimal` configurations for ESLint are also
provided. If it is not possible to migrate the project to the code style right away, then you could start with
integrating the minimal version of it.

It enforces the best practices and helps avoid common issues, but does not include Airbnb style guide. More details are
in [the eslint-config package's README](packages/eslint-config/README.md).

### Styles

The most important rule here is to use [Genoma](https://genoma.veriff.design/) as much as possible. Don't reinvent the
wheel and try to utilize Genoma components for making both layout and UI. The goal is to make writing CSS an exception,
and you could help to achieve it with [contributing to Genoma](https://github.com/Veriff/genoma)!

In case you have to do some custom styles, at first, choose *SCSS Modules* over plain CSS. Make it compliant
with [SCSS Guidelines](https://sass-guidelin.es/). It is useful and reasonable.

We also follow [the standard style guide](https://github.com/stylelint/stylelint-config-standard),
[8-point-grid](https://github.com/darwintantuco/stylelint-8-point-grid) and enforce to use
[variables for colors](https://github.com/Veriff/genoma/blob/master/src/scss/global.scss). It helps with consistency and
clarity.
