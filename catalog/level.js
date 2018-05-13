import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import parsePropTypes from './utils/parse-prop-types';

import Level from '../src/Level/Level';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Level from 'rebul/Level';
\`\`\`

### Basic

\`\`\`react
showSource: true
dark: true
---
<Level>
  <Level.Left>
    <Level.Item>
      <Notification>Left item 1</Notification>
    </Level.Item>
    <Level.Item>
      <Notification>Left item 2</Notification>
    </Level.Item>
  </Level.Left>
  <Level.Right>
    <Level.Item>
      <Notification>Right item 1</Notification>
    </Level.Item>
    <Level.Item>
      <Notification>Right item 2</Notification>
    </Level.Item>
  </Level.Right>
</Level>
\`\`\`

### Mobile level

\`\`\`react
showSource: true
dark: true
---
<Level isMobile>
  <Level.Item>
    <Notification>Level item 1</Notification>
  </Level.Item>
  <Level.Item>
    <Notification>Level item 2</Notification>
  </Level.Item>
  <Level.Item>
    <Notification>Level item 3</Notification>
  </Level.Item>
</Level>
\`\`\`

## Props

${<TableSpecimen rows={parsePropTypes(Level)} />}

## Reference

[https://bulma.io/documentation/layout/hero/](https://bulma.io/documentation/layout/hero/)

`;
