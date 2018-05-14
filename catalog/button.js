import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Button from '../src/Button/Button';
import Buttons from '../src/Button/Buttons';

console.log(Button.__docgenInfo);

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Button from 'rebul/Button';
import Buttons from 'rebul/Buttons';
\`\`\`

## Usage

### Simple

Render a simple button using the \`<Button>\` component.

\`\`\`react
showSource: true
---
<Button>Hello world</Button>
\`\`\`

#### With a custom element

Button by default is wrapped in a \`<button>\` element.
But you can change it to any type of element if you pass through
a \`element\` prop.

\`\`\`react
showSource: true
---
<Buttons>
  <Button element="a">Anchor</Button>
  <Button element="input" type="submit" value="Submit button" />
  <Button element="input" type="reset" value="Reset button" />
</Buttons>
\`\`\`

### Colors

\`\`\`react
showSource: true
---
<Buttons>
  <Button color="white">White</Button>
  <Button color="light">Light</Button>
  <Button color="dark">Dark</Button>
  <Button color="black">Black</Button>
  <Button color="text">Text</Button>
</Buttons>
\`\`\`

\`\`\`react
showSource: true
---
<Buttons>
  <Button color="primary">Primary</Button>
  <Button color="link">Link</Button>
  <Button color="info">Info</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>
</Buttons>
\`\`\`

### Sizes

\`\`\`react
showSource: true
---
<Buttons>
  <Button size="small">Small</Button>
  <Button>Normal</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</Buttons>
\`\`\`

### Styles

#### Outlined

\`\`\`react
showSource: true
dark: true
---
<Buttons>
  <Button isOutlined color="primary">Primary</Button>
  <Button isOutlined color="link">Link</Button>
  <Button isOutlined color="info">Info</Button>
  <Button isOutlined color="success">Success</Button>
  <Button isOutlined color="warning">Warning</Button>
  <Button isOutlined color="danger">Danger</Button>
</Buttons>
\`\`\`

#### Inverted

\`\`\`react
showSource: true
---
<Buttons>
  <Button isInverted color="primary">Primary</Button>
  <Button isInverted color="link">Link</Button>
  <Button isInverted color="info">Info</Button>
  <Button isInverted color="success">Success</Button>
  <Button isInverted color="danger">Danger</Button>
</Buttons>
\`\`\`

#### Inverted outlined

\`\`\`react
showSource: true
dark: true
---
<Buttons>
  <Button isInverted isOutlined color="primary">Primary</Button>
  <Button isInverted isOutlined color="link">Link</Button>
  <Button isInverted isOutlined color="info">Info</Button>
  <Button isInverted isOutlined color="success">Success</Button>
  <Button isInverted isOutlined color="danger">Danger</Button>
</Buttons>
\`\`\`

#### Rounded

\`\`\`react
showSource: true
---
<Buttons>
  <Button isRounded color="primary">Primary</Button>
  <Button isRounded color="link">Link</Button>
  <Button isRounded color="info">Info</Button>
  <Button isRounded color="success">Success</Button>
  <Button isRounded color="warning">Warning</Button>
  <Button isRounded color="danger">Danger</Button>
</Buttons>
\`\`\`

### States

#### Hover

\`\`\`react
showSource: true
---
<Buttons>
  <Button color="primary" state="hovered">Primary</Button>
  <Button color="link" state="hovered">Link</Button>
  <Button color="info" state="hovered">Info</Button>
  <Button color="success" state="hovered">Success</Button>
  <Button color="warning" state="hovered">Warning</Button>
  <Button color="danger" state="hovered">Danger</Button>
</Buttons>
\`\`\`

#### Focus
\`\`\`react
showSource: true
---
<Buttons>
  <Button color="primary" state="focused">Primary</Button>
  <Button color="link" state="focused">Link</Button>
  <Button color="info" state="focused">Info</Button>
  <Button color="success" state="focused">Success</Button>
  <Button color="warning" state="focused">Warning</Button>
  <Button color="danger" state="focused">Danger</Button>
</Buttons>
\`\`\`

#### Active
\`\`\`react
showSource: true
---
<Buttons>
  <Button color="primary" state="active">Primary</Button>
  <Button color="link" state="active">Link</Button>
  <Button color="info" state="active">Info</Button>
  <Button color="success" state="active">Success</Button>
  <Button color="warning" state="active">Warning</Button>
  <Button color="danger" state="active">Danger</Button>
</Buttons>
\`\`\`

#### Loading
\`\`\`react
showSource: true
---
<Buttons>
  <Button color="primary" isLoading>Primary</Button>
  <Button color="link" isLoading>Link</Button>
  <Button color="info" isLoading>Info</Button>
  <Button color="success" isLoading>Success</Button>
  <Button color="warning" isLoading>Warning</Button>
  <Button color="danger" isLoading>Danger</Button>
</Buttons>
\`\`\`

#### Static
\`\`\`react
showSource: true
---
<Button isStatic>Hello world</Button>
\`\`\`

#### Disabled
\`\`\`react
showSource: true
---
<Buttons>
  <Button color="primary" disabled>Primary</Button>
  <Button color="link" disabled>Link</Button>
  <Button color="info" disabled>Info</Button>
  <Button color="success" disabled>Success</Button>
  <Button color="warning" disabled>Warning</Button>
  <Button color="danger" disabled>Danger</Button>
</Buttons>
\`\`\`

### List of buttons

You can show a list of buttons using the \`<Buttons>\` component.

\`\`\`react
showSource: true
---
<Buttons>
  <Button color="info">Save changes</Button>
  <Button>Cancel</Button>
</Buttons>
\`\`\`

#### Addons

\`\`\`react
showSource: true
---
<Buttons hasAddons>
  <Button color="success" isSelected>Yes</Button>
  <Button>Maybe</Button>
  <Button>No</Button>
</Buttons>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Button color="primary">Primary</Button>`}
      scope={{ React, Button, Buttons }}
      theme="dracula"
    />
  )}

## \`<Button>\` Props

${<TableSpecimen rows={parsePropTypes(Button)} />}

## \`<Buttons>\` Props

${<TableSpecimen rows={parsePropTypes(Buttons)} />}

## Reference

[https://bulma.io/documentation/elements/button/](https://bulma.io/documentation/elements/button/)

`;
