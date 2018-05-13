import React from 'react';
import { markdown, CodeSpecimen, ReactSpecimen, TableSpecimen } from 'catalog';
import parsePropTypes from './utils/parse-prop-types';

import Box from '../src/Box/Box';

export default () =>
  markdown`
## Import

${<CodeSpecimen lang="jsx">import Box from 'rebul/Box';</CodeSpecimen>}

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
