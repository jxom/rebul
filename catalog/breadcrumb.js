import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Breadcrumb from '../src/Breadcrumb/Breadcrumb';
import BreadcrumbItem from '../src/Breadcrumb/BreadcrumbItem';

export default () =>
  markdown`

  ## Import

  \`\`\`code
  lang: jsx
  ---
  import Breadcrumb from 'rebul/lib/Breadcrumb';
  // OR
  import { Breadcrumb } from 'rebul';
  \`\`\`

  ### Basic

  \`\`\`react
  showSource: true
  ---
  <Breadcrumb>
    <Breadcrumb.Item href="#">
      Hello
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      World
    </Breadcrumb.Item>
    <Breadcrumb.Item isActive href="#">
      Breadcrumb
    </Breadcrumb.Item>
  </Breadcrumb>
  \`\`\`

### Alignment

For alternative alignments, use the \`align\` prop on \`<Breadcrumb>\`.

#### Center align

\`\`\`react
  showSource: true
  ---
  <Breadcrumb align="centered">
    <Breadcrumb.Item href="#">
      Hello
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      World
    </Breadcrumb.Item>
    <Breadcrumb.Item isActive href="#">
      Breadcrumb
    </Breadcrumb.Item>
  </Breadcrumb>
  \`\`\`

#### Right align

\`\`\`react
  showSource: true
  ---
  <Breadcrumb align="right">
    <Breadcrumb.Item href="#">
      Hello
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      World
    </Breadcrumb.Item>
    <Breadcrumb.Item isActive href="#">
      Breadcrumb
    </Breadcrumb.Item>
  </Breadcrumb>
  \`\`\`

### Icons

\`\`\`react
showSource: true
---
<Breadcrumb>
  <Breadcrumb.Item href="#" icon="fa fa-home">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#" icon="fa fa-book">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#" icon="fa fa-thumbs-up">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

### Alternative separators

You can choose between 4 additional separators: \`arrow\`, \`bullet\`, \`dot\` and \`succeeds\`

#### Arrow

\`\`\`react
showSource: true
---
<Breadcrumb separator="arrow">
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

#### Bullet

\`\`\`react
showSource: true
---
<Breadcrumb separator="bullet">
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

#### Dot

\`\`\`react
showSource: true
---
<Breadcrumb separator="dot">
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

#### Succeeds

\`\`\`react
showSource: true
---
<Breadcrumb separator="succeeds">
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

### Sizes

You can choose between 4 additional sizes: \`small\`, \`medium\`, and \`large\`

#### Small

\`\`\`react
showSource: true
---
<Breadcrumb size="small">
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

#### Normal

\`\`\`react
showSource: true
---
<Breadcrumb>
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

#### Medium

\`\`\`react
showSource: true
---
<Breadcrumb size="medium">
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

#### Large

\`\`\`react
showSource: true
---
<Breadcrumb size="large">
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Breadcrumb>
  <Breadcrumb.Item href="#">
    Hello
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    World
  </Breadcrumb.Item>
  <Breadcrumb.Item isActive href="#">
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>`}
      scope={{ React, Breadcrumb }}
      theme="dracula"
    />
  )}

## \`<Breadcrumb>\` Props

${<TableSpecimen rows={parsePropTypes(Breadcrumb)} />}

## \`<Breadcrumb.Item>\` Props

${<TableSpecimen rows={parsePropTypes(BreadcrumbItem)} />}

## Reference

[https://bulma.io/documentation/components/breadcrumb/](https://bulma.io/documentation/components/breadcrumb/)

`;
