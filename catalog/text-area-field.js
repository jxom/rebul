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
import TextAreaField from 'rebul/lib/TextAreaField';
// OR
import { TextAreaField } from 'rebul';
\`\`\`

## Usage

### Simple

\`\`\`react
<React.Fragment>
  <TextAreaField labelName="Notes" placeholder="Type your notes" rows={3} />
  <TextAreaField
    color="success"
    helpText="These notes are acceptable!"
    labelName="Notes"
    value="Jake Moxey rocks"
  />
  <TextAreaField
    color="danger"
    helpText="These notes are invalid!"
    labelName="Notes"
    value="Jake Moxey sucks"
  />
</React.Fragment>
\`\`\`

### Sizes

\`\`\`react
<React.Fragment>
  <TextAreaField
    labelName="Notes"
    placeholder="Enter your notes..."
    labelSize="small"
    inputSize="small"
  />
  <TextAreaField
    labelName="Notes"
    placeholder="Enter your notes..."
  />
  <TextAreaField
    labelName="Notes"
    placeholder="Enter your notes..."
    labelSize="medium"
    inputSize="medium"
  />
  <TextAreaField
    labelName="Notes"
    placeholder="Enter your notes..."
    labelSize="large"
    inputSize="large"
  />
</React.Fragment>
\`\`\`

### States

\`\`\`react
<React.Fragment>
  <TextAreaField
    labelName="Notes"
    placeholder="Enter your notes..."
  />
  <TextAreaField
    labelName="Notes"
    placeholder="Enter your notes..."
    state="hovered"
  />
  <TextAreaField
    labelName="Notes"
    placeholder="Enter your notes..."
    state="focused"
  />
  <TextAreaField
    isLoading
    labelName="Notes"
    placeholder="Enter your notes..."
  />
  <TextAreaField
    isDisabled
    labelName="Notes"
    placeholder="Enter your notes..."
  />
</React.Fragment>
\`\`\`

### Rounded

\`\`\`react
<TextAreaField
  isRounded
  labelName="Notes"
  placeholder="Enter your notes..."
/>
\`\`\`

### Read only

\`\`\`react
<TextAreaField
  isReadOnly
  labelName="Notes"
  placeholder="Enter your notes..."
  value="This is read only"
/>
\`\`\`

### Horizontal fields

\`\`\`react
<React.Fragment>
  <TextAreaField isHorizontal labelName="Notes" placeholder="Enter your notes..." />
</React.Fragment>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<TextAreaField labelName="Notes" placeholder="Enter your notes..." />`}
      scope={{ React, TextAreaField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(TextAreaField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)
`;
