---
title: Style-Forge.Helpers
titleTemplate: false
description: "Essential CSS helper classes for spacing, alignment, visibility, and more in web development."

head:
  - - meta
    - name: keywords
      content: style-forge, helpers, CSS, HTML, utilities, styles, web development, frontend, styling, design, responsive, lightweight, performance, modular, consistent
  - - meta
    - property: og:title
      content: Style-Forge.Helpers
  - - meta
    - property: og:description
      content: "Essential CSS helper classes for spacing, alignment, visibility, and more in web development."
  - - meta
    - property: og:url
      content: https://style-forge.dev/helpers/
  - - meta
    - name: twitter:title
      content: Style-Forge.Helpers
  - - meta
    - name: twitter:description
      content: "Essential CSS helper classes for spacing, alignment, visibility, and more in web development."
---

# Style-Forge.Helpers

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.helpers)
![license](https://img.shields.io/npm/l/style-forge.helpers)
![npm](https://img.shields.io/npm/dm/style-forge.helpers)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/61ef2880ff5a4ad5ac83f312970397af)](https://app.codacy.com/gh/Style-Forge/helpers/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Style-Forge/helpers/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge.Helpers` is a utility library that provides a set of essential CSS helper classes to enhance and simplify your web development workflow. It includes various utilities for spacing, alignment, visibility, and more, ensuring a more efficient and maintainable codebase.

## Installation

:::tabs
== npm
```shell
npm i style-forge.helpers
```
== yarn
```shell
yarn add style-forge.helpers
```
== pnpm
```shell
pnpm add style-forge.helpers
```
== bun
```shell
bun add style-forge.helpers
```
:::

## Usage

After installation, you can import the CSS file into your project or, if you are using Webpack or another module bundler:

:::tabs key:import
== CSS
```css
@import 'style-forge.helpers';
```
== JS
```js
import 'style-forge.helpers';
```
:::

## Customization
:::tabs key:import
== CSS
```css
@import 'style-forge.helpers/src/var.css';

@import 'style-forge.helpers/src/content-position.css';
@import 'style-forge.helpers/src/display.css';
@import 'style-forge.helpers/src/flex.css';
@import 'style-forge.helpers/src/gap.css';
@import 'style-forge.helpers/src/grid.css';
@import 'style-forge.helpers/src/op.css';
@import 'style-forge.helpers/src/order.css';
@import 'style-forge.helpers/src/ov.css';
@import 'style-forge.helpers/src/position.css';
@import 'style-forge.helpers/src/radius.css';
@import 'style-forge.helpers/src/shift.css';
@import 'style-forge.helpers/src/size.css';
@import 'style-forge.helpers/src/text.css';
@import 'style-forge.helpers/src/z.css';
```
== JS
```js
import 'style-forge.helpers/src/var.css';

import 'style-forge.helpers/src/content-position.css';
import 'style-forge.helpers/src/display.css';
import 'style-forge.helpers/src/flex.css';
import 'style-forge.helpers/src/gap.css';
import 'style-forge.helpers/src/grid.css';
import 'style-forge.helpers/src/op.css';
import 'style-forge.helpers/src/order.css';
import 'style-forge.helpers/src/ov.css';
import 'style-forge.helpers/src/position.css';
import 'style-forge.helpers/src/radius.css';
import 'style-forge.helpers/src/shift.css';
import 'style-forge.helpers/src/size.css';
import 'style-forge.helpers/src/text.css';
import 'style-forge.helpers/src/z.css';
```
:::

## Variables

```css
:root {
  --sf-gap: 0.5em;

  /* line-height */
  --sf-lh: 0.8;
  --sf-lh-txt: 1.5;

  /* border-radius */
  --sf-radius: 0.5em;
  --sf-radius-v1: 1em;
  --sf-radius-v2: 1.25em;
  --sf-radius-v3: 1.5em;
  --sf-radius-v4: 2em;
  --sf-radius-v5: 2.5em;
  --sf-radius-v6: 3em;

  /* font-size header */
  --sf-h1: 3rem;
  --sf-h2: 2.5rem;
  --sf-h3: 2rem;
  --sf-h4: 1.5rem;
  --sf-h5: 1.25rem;
  --sf-h6: 1rem;

  /* font-weight header */
  --sf-fw-h1: 700;
  --sf-fw-h2: 700;
  --sf-fw-h3: 700;
  --sf-fw-h4: 600;
  --sf-fw-h5: 600;
  --sf-fw-h6: 600;

  /* font-size */
  --sf-fz: 1rem;
  --sf-fz-bold: 1rem;
  --sf-fz-small: 0.75rem;

  /* font-weight */
  --sf-fw: 400;
  --sf-fw-bold: 600;
  --sf-fw-small: 300;
}
```
