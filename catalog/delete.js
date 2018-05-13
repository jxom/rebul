import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Delete from '../src/Delete/Delete';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Delete from 'rebul/Delete';
\`\`\`

## Usage

### Simple

Render a remove-type button using the \`<Delete>\` component.

\`\`\`react
showSource: true
---
<Delete />
\`\`\`

### Custom element

You can specify a custom element with the \`element\` prop. \`<Delete>\` uses \`<button>\` as its default element.

\`\`\`react
showSource: true
---
<Delete element="a" /> // <a class="delete"></a>
\`\`\`

### Sizes

You can specify a custom size with the \`size\` prop. Available sizes are: \`small\`, \`medium\` and \`large\`.

\`\`\`react
showSource: true
---
<div>
  <Delete size="small" />
  <Delete />
  <Delete size="medium" />
  <Delete size="large" />
</div>
\`\`\`

## Playground

${<Playground codeText={`<Delete size="medium" />`} scope={{ React, Delete }} theme="dracula" />}

## Props

${<TableSpecimen rows={parsePropTypes(Delete)} />}

## Reference

[https://bulma.io/documentation/elements/delete/](https://bulma.io/documentation/elements/delete/)

`;
