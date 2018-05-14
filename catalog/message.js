import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Message from '../src/Message/Message';

export default () =>
  markdown`

  ## Import

  \`\`\`code
  lang: jsx
  ---
  import Message from 'rebul/Message';
  \`\`\`

  ### Basic

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message>
    <Message.Header>
      Hello World
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  ### Body Only
  #### You can omit the message header.

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  ## Playground

${(
    <Playground
      codeText={`<Message>
  <Message.Header>
    Hello World
  </Message.Header>
  <Message.Body>
    Edit me :)
  </Message.Body>
</Message>`}
      scope={{ React, Message }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(Message)} />}

## Reference

[https://bulma.io/documentation/components/message/](https://bulma.io/documentation/components/message/)

`;
