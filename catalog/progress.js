import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Progress from '../src/Progress/Progress';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Progress from 'rebul/Progress';
\`\`\`

## Usage

### Simple

\`\`\`react
showSource: true
---
<Progress maxValue="100" value="15">15%</Progress>
\`\`\`

### Colors

\`\`\`react
showSource: true
---
<React.Fragment>
  <Progress color="primary" maxValue="100" value="15">15%</Progress>
  <Progress color="link" maxValue="100" value="30">30%</Progress>
  <Progress color="info" maxValue="100" value="45">45%</Progress>
  <Progress color="success" maxValue="100" value="60">60%</Progress>
  <Progress color="warning" maxValue="100" value="75">75%</Progress>
  <Progress color="danger" maxValue="100" value="90">90%</Progress>
</React.Fragment>
\`\`\`

### Sizes

\`\`\`react
showSource: true
---
<React.Fragment>
  <Progress maxValue="100" size="small" value="15">15%</Progress>
  <Progress maxValue="100" value="30">30%</Progress>
  <Progress maxValue="100" size="medium" value="45">45%</Progress>
  <Progress maxValue="100" size="large" value="60">60%</Progress>
</React.Fragment>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Progress color="success" maxValue="100" value="60">60%</Progress>`}
      scope={{ React, Progress }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(Progress)} />}

## Reference

[https://bulma.io/documentation/elements/progress/](https://bulma.io/documentation/elements/progress/)

`;
