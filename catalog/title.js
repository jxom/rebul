import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import parsePropTypes from './utils/parse-prop-types';

import Title from '../src/Title/Title';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Title from 'rebul/Title';
\`\`\`

## Usage

Render a simple title and sub-title using the \`<Title>\` component.

\`\`\`react
showSource: true
---
<React.Fragment>
  <Title>Hello world</Title>
  <Title isSubTitle>This is me</Title>
</React.Fragment>
\`\`\`

### Sizes

\`\`\`react
showSource: true
---
<React.Fragment>
  <Title size="1">Title 1</Title>
  <Title size="2">Title 2</Title>
  <Title size="3">Title 3</Title>
  <Title size="4">Title 4</Title>
  <Title size="5">Title 5</Title>
  <Title size="6">Title 6</Title>
</React.Fragment>
\`\`\`

\`\`\`react
showSource: true
---
<React.Fragment>
  <Title isSubTitle size="1">Title 1</Title>
  <Title isSubTitle size="2">Title 2</Title>
  <Title isSubTitle size="3">Title 3</Title>
  <Title isSubTitle size="4">Title 4</Title>
  <Title isSubTitle size="5">Title 5</Title>
  <Title isSubTitle size="6">Title 6</Title>
</React.Fragment>
\`\`\`

## Props

${<TableSpecimen rows={parsePropTypes(Title)} />}

## Reference

[https://bulma.io/documentation/elements/title/](https://bulma.io/documentation/elements/title/)

`;
