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
import TextField from 'rebul/TextField';
\`\`\`

## Usage

### Simple

\`\`\`react
<React.Fragment>
  <TextField label="Username" placeholder="Bill Gates" />
  <TextField
    color="success"
    helpText="This name is available!"
    label="Full name"
    leftIconName="fa fa-user"
    rightIconName="fa fa-check has-text-success"
    value="Jake Moxey"
  />
  <TextField
    color="danger"
    helpText="This email is invalid!"
    label="Email"
    leftIconName="fa fa-envelope"
    rightIconName="fa fa-exclamation-triangle has-text-danger"
    value="jake@"
  />
  <TextField
    helpText="Your password must contain 8 characters."
    label="Password"
    leftIconName="fa fa-lock"
    type="password"
  />
</React.Fragment>
\`\`\`

### Sizes

\`\`\`react
<React.Fragment>
  <TextField
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    labelSize="small"
    inputSize="small"
  />
  <TextField
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
  <TextField
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    labelSize="medium"
    inputSize="medium"
  />
  <TextField
    label="Username"
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
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
  <TextField
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    state="hovered"
  />
  <TextField
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
    state="focused"
  />
  <TextField
    isLoading
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
  <TextField
    disabled
    label="Username"
    leftIconName="fa fa-user"
    placeholder="Bill Gates"
  />
</React.Fragment>
\`\`\`

### Rounded field

\`\`\`react
<TextField
  isRounded
  label="Username"
  leftIconName="fa fa-user"
  placeholder="Bill Gates"
/>
\`\`\`

### Read only

\`\`\`react
<TextField
  isReadOnly
  label="Username"
  leftIconName="fa fa-user"
  placeholder="Bill Gates"
  value="This is read only"
/>
\`\`\`

### Horizontal fields

\`\`\`react
<React.Fragment>
  <TextField isHorizontal label="Username" placeholder="Bill Gates" />
  <TextField
    color="danger"
    helpText="This email is invalid!"
    isHorizontal
    label="Email"
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
    label="Username"
    placeholder="Bill Gates"
    rightAddonComponent={<Button color="primary">Search</Button>}
  />
  <TextField
    label="Username"
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
    label="Username"
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
      codeText={`<TextField label="Name" placeholder="Bill Gates" />`}
      scope={{ React, TextField }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(TextField)} />}

## Reference

[https://bulma.io/documentation/form/general/](https://bulma.io/documentation/form/general/)

`;
