import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import TextAreaField from '../src/TextAreaField/TextAreaField';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import TextAreaField from 'rebul/TextAreaField';
\`\`\`

## Usage

### Simple

\`\`\`react
<React.Fragment>
  <TextAreaField label="Username" placeholder="Bill Gates" />
</React.Fragment>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<TextAreaField label="Name" placeholder="Bill Gates" />`}
      scope={{ React, TextAreaField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(TextAreaField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
