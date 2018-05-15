import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import RadioField from '../src/RadioField/RadioField';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import RadioField from 'rebul/RadioField';
\`\`\`

## Usage

### Simple

\`\`\`react
<React.Fragment>
  <RadioField
    labelName="Select an option"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
  <RadioField
    color="danger"
    helpText="This is invalid!"
    labelName="Select an option"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
    value="with-options"
  />
</React.Fragment>
\`\`\`
## Playground

${(
    <Playground
      codeText={`<RadioField
  labelName="Name"
  options={
    [
      { label: 'Select option', value: 'select-option' },
      { label: 'With options', value: 'with-options' }
    ]
  }
/>`}
      scope={{ React, RadioField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(RadioField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
