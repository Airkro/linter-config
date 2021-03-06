# @nice-move/eslint-config-base [<img src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg" alt="eslint" height="80" align="right">][eslint]

A [eslint] config for best practice.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[eslint]: https://eslint.org/
[npm-url]: https://www.npmjs.com/package/@nice-move/eslint-config-base
[npm-badge]: https://img.shields.io/npm/v/@nice-move/eslint-config-base.svg?style=flat-square&logo=npm
[github-url]: https://github.com/nice-move/nice-move/tree/master/packages/eslint-config-base
[github-badge]: https://img.shields.io/npm/l/@nice-move/eslint-config-base.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/@nice-move/eslint-config-base.svg?style=flat-square&colorB=green&logo=node.js

## Installation

```bash
npm install eslint @nice-move/eslint-config-base --save-dev
```

## Usage

Add to package.json

```json
{
  "eslintConfig": {
    "extends": "@nice-move/eslint-config-base"
  }
}
```

Then run

```bash
eslint --fix
```

## Specification

[ava]: https://github.com/avajs/ava
[webpack]: https://webpack.js.org/
[best-shot]: https://github.com/best-shot/best-shot

| Environment | pattern                                                                                      |
| :---------- | :------------------------------------------------------------------------------------------- |
| browser     | `.js`, `.html`                                                                               |
| node.js     | `.mjs`, `.cjs`                                                                               |
| es modules  | `.mjs`, `.js`, `.html`                                                                       |
| commonjs    | `.cjs`, source code in webpack project                                                       |
| [webpack]   | `src/**`                                                                                     |
| [best-shot] | `src/**`, `packages/*/**`                                                                    |
| [ava]       | `{test,tests,spec,specs}/**`, `**/*.{test,spec}.*` <br /> when `eslint-plugin-ava` installed |

## Tips

### Noiseless reporting

Rules can handle by [prettier](https://prettier.io/) and [garou](https://github.com/nice-move/garou) is disabled by default.
