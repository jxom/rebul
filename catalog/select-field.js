import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import SelectField from '../src/SelectField/SelectField';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import SelectField from 'rebul/lib/SelectField';
// OR
import { SelectField } from 'rebul';
\`\`\`

## Usage

### Simple

\`\`\`react
<React.Fragment>
  <SelectField
    labelName="Select"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
  <SelectField
    color="danger"
    helpText="This is invalid!"
    labelName="Select"
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

### Multiple

\`\`\`react
<SelectField
  isMultiSelect
  labelName="Country"
  options={
    [
      { value: 'argentina', label: 'Argentina' },
      { value: 'Bolivia', label: 'Bolivia' },
      { value: 'Brazil', label: 'Brazil' },
      { value: 'Chile', label: 'Chile' },
      { value: 'Colombia', label: 'Colombia' },
      { value: 'Ecuador', label: 'Ecuador' },
      { value: 'Guyana', label: 'Guyana' },
      { value: 'Paraguay', label: 'Paraguay' },
      { value: 'Peru', label: 'Peru' },
      { value: 'Suriname', label: 'Suriname' },
      { value: 'Uruguay', label: 'Uruguay' },
      { value: 'Venezuela', label: 'Venezuela' }
    ]
  }
/>
\`\`\`

### Rounded

\`\`\`react
<SelectField
  isRounded
  labelName="Select"
  options={
    [
      { label: 'Select option', value: 'select-option' },
      { label: 'With options', value: 'with-options' }
    ]
  }
/>
\`\`\`

### Sizes

\`\`\`react
<React.Fragment>
  <SelectField
    inputSize="small"
    labelName="Select"
    labelSize="small"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
  <SelectField
    labelName="Select"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
  <SelectField
    inputSize="medium"
    labelName="Select"
    labelSize="medium"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
  <SelectField
    inputSize="large"
    labelName="Select"
    labelSize="large"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
</React.Fragment>
\`\`\`

### States

\`\`\`react
<React.Fragment>
  <SelectField
    labelName="Select"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
  <SelectField
    labelName="Select"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
    state="hovered"
  />
  <SelectField
    labelName="Select"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
    state="focused"
  />
  <SelectField
    isLoading
    labelName="Select"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
</React.Fragment>
\`\`\`

### Icons

\`\`\`react
<SelectField
  leftIconName="fa fa-user"
  labelName="Select"
  options={
    [
      { label: 'Select option', value: 'select-option' },
      { label: 'With options', value: 'with-options' }
    ]
  }
/>
\`\`\`

### Horizontal

\`\`\`react
  <SelectField
    isHorizontal
    labelName="Select"
    options={
      [
        { label: 'Select option', value: 'select-option' },
        { label: 'With options', value: 'with-options' }
      ]
    }
  />
\`\`\`

## Playground

${(
    <Playground
      codeText={`<SelectField
  labelName="Name"
  options={
    [
      { label: 'Select option', value: 'select-option' },
      { label: 'With options', value: 'with-options' }
    ]
  }
/>`}
      scope={{ React, SelectField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(SelectField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
