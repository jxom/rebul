import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
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

## Props

${<TableSpecimen rows={parsePropTypes(TextField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
