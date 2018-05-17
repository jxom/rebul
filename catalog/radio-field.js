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
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
      ]
    }
  />
  <RadioField
    color="danger"
    helpText="This is invalid!"
    labelName="Select an option"
    options={
      [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
      ]
    }
    value="no"
  />
</React.Fragment>
\`\`\`

### With disabled option

\`\`\`react
<RadioField
  labelName="Select an option"
  options={
    [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Maybe', value: 'maybe', disabled: true }
    ]
  }
/>
\`\`\`

### Horizontal

\`\`\`react
<RadioField
  isHorizontal
  labelName="Select an option:"
  options={
    [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
    ]
  }
/>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<RadioField
  labelName="Name"
  onChange={value => console.log('value changed: ' + value)}
  options={
    [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
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
