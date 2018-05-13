import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Column from '../src/Column/Column';
import Columns from '../src/Columns/Columns';
import Notification from '../src/Notification/Notification';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Columns from 'rebul/Columns';
import Column from 'rebul/Column';
\`\`\`

## Usage

### Basic

\`\`\`react
dark: true
---
<Columns>
  <Column>
    <Notification>Column 1</Notification>
  </Column>
  <Column>
    <Notification>Column 2</Notification>
  </Column>
  <Column>
    <Notification>Column 3</Notification>
  </Column>
  <Column>
    <Notification>Column 4</Notification>
  </Column>
</Columns>
\`\`\`

### Sizes

#### Humanized naming

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="four-fifths"><Notification color="primary"><code>four-fifths</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="three-quarters"><Notification color="primary"><code>three-quarters</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="two-thirds"><Notification color="primary"><code>two-thirds</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="three-fifths"><Notification color="primary"><code>three-fifths</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="half"><Notification color="primary"><code>half</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="two-fifths"><Notification color="primary"><code>two-fifths</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="one-third"><Notification color="primary"><code>one-third</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="one-quarter"><Notification color="primary"><code>one-quarter</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="one-fifth"><Notification color="primary"><code>one-fifth</code></Notification></Column>
  <Column><Notification>Auto</Notification></Column>
  <Column><Notification>Auto</Notification></Column>
</Columns>
\`\`\`

#### 12 column system

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="1"><Notification color="primary"><code>1</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="2"><Notification color="primary"><code>2</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="3"><Notification color="primary"><code>3</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="4"><Notification color="primary"><code>4</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="5"><Notification color="primary"><code>5</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="6"><Notification color="primary"><code>6</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="7"><Notification color="primary"><code>7</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="8"><Notification color="primary"><code>8</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="9"><Notification color="primary"><code>9</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="10"><Notification color="primary"><code>10</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="11"><Notification color="primary"><code>11</code></Notification></Column>
  <Column><Notification>1</Notification></Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column size="12"><Notification color="primary"><code>12</code></Notification></Column>
</Columns>
\`\`\`

### Offsets

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column offset="one-quarter" size="half">
    <Notification color="primary">
      <code>size: 'half'</code><br/><code>offset: 'one-quarter'</code>
    </Notification>
  </Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column offset="one-fifth" size="three-fifths">
    <Notification color="primary">
      <code>size: 'three-fifths'</code><br/><code>offset: 'one-fifth'</code>
    </Notification>
  </Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column offset="8" size="4">
    <Notification color="primary">
      <code>size: '4'</code><br/><code>size: '8'</code>
    </Notification>
  </Column>
</Columns>
\`\`\`

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column offset="11" size="1">
    <Notification color="primary">
      <code>size: '1'</code><br/><code>size: '11'</code>
    </Notification>
  </Column>
</Columns>
\`\`\`

### Narrow column

\`\`\`react
span: 6
dark: true
---
<Columns>
  <Column isNarrow>
    <Box style={{ width: '200px' }}>
      <Title size="5">Narrow column</Title>
      <Title isSubTitle>This column is only 200px wide.</Title>
    </Box>
  </Column>
  <Column>
    <Box>
      <Title size="5">Flexible column</Title>
      <Title isSubTitle>This column will take up the remaining space available.</Title>
    </Box>
  </Column>
</Columns>
\`\`\`

### Responsiveness

#### Mobile columns

\`\`\`react
dark: true
---
<Columns breakpoint="mobile">
  <Column>
    <Notification>Column 1</Notification>
  </Column>
  <Column>
    <Notification>Column 2</Notification>
  </Column>
  <Column>
    <Notification>Column 3</Notification>
  </Column>
  <Column>
    <Notification>Column 4</Notification>
  </Column>
</Columns>
\`\`\`

\`\`\`react
dark: true
---
<Columns breakpoint="desktop">
  <Column>
    <Notification>Column 1</Notification>
  </Column>
  <Column>
    <Notification>Column 2</Notification>
  </Column>
  <Column>
    <Notification>Column 3</Notification>
  </Column>
  <Column>
    <Notification>Column 4</Notification>
  </Column>
</Columns>
\`\`\`

#### Different column sizes per breakpoint

\`\`\`react
dark: true
---
<Columns breakpoint="mobile">
  <Column sizeFullHD="one-quarter" sizeWidescreen="one-third" sizeDesktop="half" sizeTablet="two-thirds" sizeMobile="three-quarters">
    <Notification>Column</Notification>
  </Column>
  <Column>
    <Notification>1</Notification>
  </Column>
  <Column>
    <Notification>1</Notification>
  </Column>
  <Column>
    <Notification>1</Notification>
  </Column>
</Columns>
\`\`\`

#### Gapless

\`\`\`react
dark: true
---
<Columns isGapless>
  <Column>
    <Notification>Column 1</Notification>
  </Column>
  <Column>
    <Notification>Column 2</Notification>
  </Column>
  <Column>
    <Notification>Column 3</Notification>
  </Column>
  <Column>
    <Notification>Column 4</Notification>
  </Column>
</Columns>
\`\`\`

#### Multiline

\`\`\`react
dark: true
---
<Columns isMultiline>
  <Column size="3">
    <Notification>Column 1</Notification>
  </Column>
  <Column size="3">
    <Notification>Column 2</Notification>
  </Column>
  <Column size="3">
    <Notification>Column 3</Notification>
  </Column>
  <Column size="3">
    <Notification>Column 4</Notification>
  </Column>
  <Column size="3">
    <Notification>Column 5</Notification>
  </Column>
  <Column size="3">
    <Notification>Column 6</Notification>
  </Column>
  <Column size="3">
    <Notification>Column 7</Notification>
  </Column>
  <Column size="3">
    <Notification>Column 8</Notification>
  </Column>
</Columns>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Columns>
  <Column>
    <Notification color="primary">Column 1</Notification>
  </Column>
  <Column>
    <Notification color="primary">Column 2</Notification>
  </Column>
  <Column>
    <Notification color="primary">Column 3</Notification>
  </Column>
  <Column>
    <Notification color="primary">Column 4</Notification>
  </Column>
</Columns>
      `}
      scope={{ React, Notification, Column, Columns }}
      theme="dracula"
    />
  )}

## \`<Columns>\` Props

${<TableSpecimen rows={parsePropTypes(Columns)} />}

## \`<Column>\` Props

${<TableSpecimen rows={parsePropTypes(Column)} />}


### Column Sizes

- \`1\`
- \`2\`
- \`3\`
- \`4\`
- \`5\`
- \`6\`
- \`7\`
- \`8\`
- \`9\`
- \`10\`
- \`11\`
- \`12\`
- \`three-quarters\`
- \`two-thirds\`
- \`half\`
- \`one-third\`
- \`one-quarter\`
- \`four-fifths\`
- \`is-three-fifths\`
- \`is-two-fifths\`
- \`is-one-fifth\`

## Reference

[https://bulma.io/documentation/columns/basics/](https://bulma.io/documentation/columns/basics/)

`;
