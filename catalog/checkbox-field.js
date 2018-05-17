import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import CheckboxField from '../src/CheckboxField/CheckboxField';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import CheckboxField from 'rebul/CheckboxField';
\`\`\`

## Usage

### Simple

\`\`\`react
<React.Fragment>
  <CheckboxField
    labelName="This is a label"
    text="Remember me"
  />
  <CheckboxField
    isChecked
    color="danger"
    helpText="This is invalid!"
    labelName="This is a label"
    text="Remember me"
  />
</React.Fragment>
\`\`\`

### With disabled option

\`\`\`react
<CheckboxField
  isDisabled
  labelName="This is a label"
  text="Remember me"
/>
\`\`\`

### Horizontal

\`\`\`react
<CheckboxField
  isHorizontal
  labelName="This is a label"
  text="Remember me"
/>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<CheckboxField
  isChecked
  labelName="This is a label"
  text="Remember me"
/>`}
      scope={{ React, CheckboxField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(CheckboxField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
