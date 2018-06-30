import React from 'react';
import { markdown, CodeSpecimen, ReactSpecimen, TableSpecimen } from 'catalog';
import parsePropTypes from './utils/parse-prop-types';

import Box from '../src/Box/Box';

export default () =>
  markdown`
## Import

\`\`\`code
  lang: jsx
  ---
  import Box from 'rebul/lib/Box';
  // OR
  import { Box } from 'rebul';
  \`\`\`

## Usage

${(
    <ReactSpecimen showSource>
      <Box>Hello world</Box>
    </ReactSpecimen>
  )}

## Props

${<TableSpecimen rows={parsePropTypes(Box)} />}

## Reference

[https://bulma.io/documentation/elements/box/](https://bulma.io/documentation/elements/box/)

`;
