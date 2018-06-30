import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Icon from '../src/Icon/Icon';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Icon from 'rebul/lib/Icon';
// OR
import { Icon } from 'rebul';
\`\`\`

## Usage

### Simple

Render an icon using the \`<Icon>\` component

\`\`\`react
showSource: true
---
<Icon iconClass="fas fa-home" />
\`\`\`

### Colors

Use the \`color\` prop to render icons with a color.

\`\`\`react
showSource: true
---
<div>
  <Icon iconClass="fas fa-home" color="primary" />
  <Icon iconClass="fas fa-home" color="info" />
  <Icon iconClass="fas fa-home" color="success" />
  <Icon iconClass="fas fa-home" color="warning" />
  <Icon iconClass="fas fa-home" color="danger" />
</div>
\`\`\`

### Sizes

You can specify a custom size with the \`size\` prop. Available sizes are: \`small\`, \`medium\` and \`large\`.

Note: This will alter the container size of the icon. To alter the actual icon size, use the icons size class name.

\`\`\`react
showSource: true
---
<div>
  <Icon iconClass="fas fa-home" size="small" />
  <Icon iconClass="fas fa-lg fa-home" />
  <Icon iconClass="fas fa-2x fa-home" size="medium" />
  <Icon iconClass="fas fa-3x fa-home" size="large" />
</div>
\`\`\`

## Playground

${<Playground codeText={`<Icon iconClass="fas fa-home" size="small" />`} scope={{ React, Icon }} theme="dracula" />}

## Props

${<TableSpecimen rows={parsePropTypes(Icon)} />}

## Reference

[https://bulma.io/documentation/elements/icon/](https://bulma.io/documentation/elements/icon/)

`;
