import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import TextField from '../src/TextField/TextField';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import TextField from 'rebul/TextField';
\`\`\`

## Usage

### Simple

\`\`\`react
<TextField label="Name" placeholder="Bill Gates" />
\`\`\`

## Playground

${(
    <Playground
      codeText={`<TextField label="Name" placeholder="Bill Gates" />`}
      scope={{ React, TextField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(TextField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
