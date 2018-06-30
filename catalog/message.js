import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Message from '../src/Message/Message';
import MessageHeader from '../src/Message/MessageHeader';
import MessageBody from '../src/Message/MessageBody';

export default () =>
  markdown`

  ## Import

  \`\`\`code
  lang: jsx
  ---
  import Message from 'rebul/lib/Message';
  // OR
  import { Message } from 'rebul';
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

  ### Colors

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message color="dark">
    <Message.Header>
      Dark
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message color="primary">
    <Message.Header>
      Primary
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message color="success">
    <Message.Header>
      Success
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message color="link">
    <Message.Header>
      Link
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message color="danger">
    <Message.Header>
      Danger
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message color="warning">
    <Message.Header>
      Warning
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  ### Sizes

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message textSize="small">
    <Message.Header>
      Small
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message textSize="medium">
    <Message.Header>
      Medium
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
  \`\`\`

  \`\`\`react
  showSource: true
  dark: true
  ---
  <Message textSize="large">
    <Message.Header>
      Large
    </Message.Header>
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </Message.Body>
</Message>`}
      scope={{ React, Message }}
      theme="dracula"
    />
  )}

## \`<Message>\` Props

${<TableSpecimen rows={parsePropTypes(Message)} />}

## \`<Message.Header>\` Props

${<TableSpecimen rows={parsePropTypes(MessageHeader)} />}


## \`<Message.Body>\` Props

${<TableSpecimen rows={parsePropTypes(MessageBody)} />}


## Reference

[https://bulma.io/documentation/components/message/](https://bulma.io/documentation/components/message/)

`;
