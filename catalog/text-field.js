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
import TextField from 'rebul/lib/TextField';
// OR
import { TextField } from 'rebul';
\`\`\`

## Usage

### Simple

\`\`\`react
<React.Fragment>
  <TextField labelName="Username" placeholder="Bill Gates" />
  <TextField
    color="success"
    helpText="This name is available!"
    labelName="Full name"
    leftIconName="fa fa-user"
    rightIconName="fa fa-check has-text-success"
    value="Jake Moxey"
  />
  <TextField
    color="danger"
    helpText="This email is invalid!"
    labelName="Email"
    leftIconName="fa fa-envelope"
    rightIconName="fa fa-exclamation-triangle has-text-danger"
    value="jake@"
  />
  <TextField
    helpText={
      <div className="content">
        Your password must contain:
        <ul style={{ marginTop: '0.2em' }}>
          <li>8 characters</li>
          <li>1 upper-case character</li>
          <li>1 number</li>
        </ul>
      </div>
    }
    labelName="Password"
    leftIconName="fa fa-lock"
    type="password"
  />
</React.Fragment>
\`\`\`

### Sizes

\`\`\`react
<React.Fragment>
  <TextField
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    labelSize="small"
    inputSize="small"
  />
  <TextField
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
  <TextField
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    labelSize="medium"
    inputSize="medium"
  />
  <TextField
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    labelSize="large"
    inputSize="large"
  />
</React.Fragment>
\`\`\`

### States

\`\`\`react
<React.Fragment>
  <TextField
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
  <TextField
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    state="hovered"
  />
  <TextField
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    state="focused"
  />
  <TextField
    isLoading
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
  <TextField
    disabled
    labelName="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
</React.Fragment>
\`\`\`

### Rounded field

\`\`\`react
<TextField
  isRounded
  labelName="Username"
  leftIconName="fa fa-user"
  placeholder="Bill Gates"
/>
\`\`\`

### Read only

\`\`\`react
<TextField
  isReadOnly
  labelName="Username"
  leftIconName="fa fa-user"
  placeholder="Bill Gates"
  value="This is read only"
/>
\`\`\`

### Horizontal fields

\`\`\`react
<React.Fragment>
  <TextField isHorizontal labelName="Username" placeholder="Bill Gates" />
  <TextField
    color="danger"
    helpText="This email is invalid!"
    isHorizontal
    labelName="Email"
    leftIconName="fa fa-envelope"
    rightIconName="fa fa-exclamation-triangle has-text-danger"
    value="jake@"
  />
</React.Fragment>
\`\`\`

### With addons

\`\`\`react
span: 3
---
<React.Fragment>
  <TextField
    labelName="Username"
    placeholder="Bill Gates"
    rightAddonComponent={<Button color="primary">Search</Button>}
  />
  <TextField
    labelName="Username"
    placeholder="Amount of money"
    leftAddonComponent={<span className="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>}
  />
  <TextField
    isExpanded
    labelName="Username"
    placeholder="Amount of money"
    leftAddonComponent={<span className="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>}
    rightAddonComponent={<Button>Transfer</Button>}
  />
</React.Fragment>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<TextField labelName="Name" placeholder="Bill Gates" />`}
      scope={{ React, TextField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(TextField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
