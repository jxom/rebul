import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import parsePropTypes from './utils/parse-prop-types';

import Notification from '../src/Notification/Notification';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Notification from 'rebul/Notification';
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

## Props

${<TableSpecimen rows={parsePropTypes(Notification)} />}

## Reference

[https://bulma.io/documentation/elements/notification/](https://bulma.io/documentation/elements/notification/)

`;
