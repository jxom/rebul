import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Tag from '../src/Tag/Tag';
import Tags from '../src/Tag/Tags';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Tag from 'rebul/Tag';
import Tags from 'rebul/Tags';
\`\`\`

## Usage

### Simple

Render a simple tag using the \`<Tag>\` component.

\`\`\`react
showSource: true
dark: true
---
<Tag>Hello world</Tag>
\`\`\`

### Colors

\`\`\`react
showSource: true
---
<Tags>
  <Tag color="black">Black</Tag>
  <Tag color="dark">Dark</Tag>
  <Tag color="light">Light</Tag>
  <Tag color="white">White</Tag>
  <Tag color="primary">Primary</Tag>
  <Tag color="link">Link</Tag>
  <Tag color="info">Info</Tag>
  <Tag color="success">Success</Tag>
  <Tag color="warning">Warning</Tag>
  <Tag color="danger">Danger</Tag>
</Tags>
\`\`\`

### Sizes

\`\`\`react
showSource: true
---
<Tags>
  <Tag color="primary" size="medium">Medium</Tag>
  <Tag color="link" size="large">Large</Tag>
</Tags>
\`\`\`

### Rounded

\`\`\`react
showSource: true
dark: true
---
<Tag isRounded>Hello world</Tag>
\`\`\`

### Delete

\`\`\`react
showSource: true
dark: true
---
<Tags>
  <Tag onClickDelete={() => console.log('delete')}>Hello world</Tag>
  <Tag onClickDelete={() => console.log('delete')} size="medium">Hello world</Tag>
  <Tag onClickDelete={() => console.log('delete')} size="large">Hello world</Tag>
</Tags>
\`\`\`

### List of tags

To render a list of tags, use the \`<Tags>\` component.

\`\`\`react
showSource: true
dark: true
---
<Tags>
  <Tag>One</Tag>
  <Tag>Two</Tag>
  <Tag>Three</Tag>
</Tags>
\`\`\`

### List of tags with addons

\`\`\`react
showSource: true
dark: true
---
<Tags hasAddons>
  <Tag>Package</Tag>
  <Tag color="primary">Bulma</Tag>
</Tags>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Tags hasAddons>
  <Tag>Package</Tag>
  <Tag color="primary">Bulma</Tag>
</Tags>`}
      scope={{ React, Tag, Tags }}
      theme="dracula"
    />
  )}

## \`<Tag>\` Props

${<TableSpecimen rows={parsePropTypes(Tag)} />}

## \`<Tags>\` Props

${<TableSpecimen rows={parsePropTypes(Tags)} />}


## Reference

[https://bulma.io/documentation/elements/tag/](https://bulma.io/documentation/elements/tag/)

`;
