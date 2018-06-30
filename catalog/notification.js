import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Notification from '../src/Notification/Notification';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Notification from 'rebul/lib/Notification';
// OR
import { Notification } from 'rebul';
\`\`\`

## Usage

### Simple

Render a notifcation using the \`<Notification>\` component.

\`\`\`react
showSource: true
dark: true
---
<Notification>Hello world</Notification>
\`\`\`

Specify an \`onClickClose\` prop to show a close button.

\`\`\`react
showSource: true
dark: true
---
<Notification onClickClose={() => console.log('close notification')}>Hello world</Notification>
\`\`\`

### Colors

\`\`\`react
showSource: true
---
<Notification color="primary">Hello world</Notification>
\`\`\`

\`\`\`react
showSource: true
---
<Notification color="info">Hello world</Notification>
\`\`\`

\`\`\`react
showSource: true
---
<Notification color="success">Hello world</Notification>
\`\`\`

\`\`\`react
showSource: true
---
<Notification color="warning">Hello world</Notification>
\`\`\`

\`\`\`react
showSource: true
---
<Notification color="danger">Hello world</Notification>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Notification color="primary">Hello world</Notification>`}
      scope={{ React, Notification }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(Notification)} />}

## Reference

[https://bulma.io/documentation/elements/notification/](https://bulma.io/documentation/elements/notification/)

`;
