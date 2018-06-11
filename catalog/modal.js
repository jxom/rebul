import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Button from '../src/Button/Button';
import Modal from '../src/Modal/Modal';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Modal from 'rebul/Modal';
\`\`\`

### Basic

\`\`\`react
showSource: true
dark: true
---
<Modal
  trigger={({ getTriggerButtonProps, show }) =>
    <Button {...getTriggerButtonProps()} onClick={show}>Open modal</Button>
  }
>
  {({ getTriggerButtonProps, hide }) => (
    <Box>
      <p>Hello world</p>
      <Button {...getTriggerButtonProps()} onClick={hide}>Close</Button>
    </Box>
  )}
</Modal>
\`\`\`

### Modal card

\`\`\`react
showSource: true
dark: true
---
<Modal
  trigger={({ getTriggerButtonProps, show }) =>
    <Button {...getTriggerButtonProps()} onClick={show}>Open modal</Button>
  }
>
  {({ getTriggerButtonProps, hide }) => (
    <Modal.Card>
      <Modal.CardHead>
        <Modal.CardTitle>Modal title</Modal.CardTitle>
        <Delete {...getTriggerButtonProps()} aria-label="close" onClick={hide} />
      </Modal.CardHead>
      <Modal.CardBody>
        <p>Hello world</p>
      </Modal.CardBody>
      <Modal.CardFoot><Button {...getTriggerButtonProps()} onClick={hide}>Close</Button></Modal.CardFoot>
    </Modal.Card>
  )}
</Modal>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Modal
  trigger={({ getTriggerButtonProps, show }) =>
    <Button {...getTriggerButtonProps()} onClick={show}>Open modal</Button>
  }
>
  {({ getTriggerButtonProps, hide }) => (
    <Box>
      <p>Hello world</p>
      <Button {...getTriggerButtonProps()} onClick={hide}>Close</Button>
    </Box>
  )}
</Modal>`}
      scope={{ React, Modal, Button }}
      theme="dracula"
    />
  )}

## \`<Modal>\` Props

${<TableSpecimen rows={parsePropTypes(Modal)} />}

## \`children\` render props

${(
    <TableSpecimen
      rows={[
        {
          Property: 'getTriggerButtonProps',
          Type: 'func',
          Description:
            'Provides the props you should apply to the button element you render. Includes `aria-` attributes'
        },
        {
          Property: 'getTriggerElementProps',
          Type: 'func',
          Description:
            'Provides the props you should apply to the element (excluding button) you render. Includes `aria-` attributes'
        },
        { Property: 'hide', Type: 'func', Description: 'Hides the modal' }
      ]}
    />
  )}

## \`trigger\` render props

${(
    <TableSpecimen
      rows={[
        {
          Property: 'getTriggerButtonProps',
          Type: 'func',
          Description:
            'Provides the props you should apply to the button element you render. Includes `aria-` attributes'
        },
        {
          Property: 'getTriggerElementProps',
          Type: 'func',
          Description:
            'Provides the props you should apply to the element (excluding button) you render. Includes `aria-` attributes'
        },
        { Property: 'show', Type: 'func', Description: 'Shows the modal' },
        { Property: 'hide', Type: 'func', Description: 'Hides the modal' },
        { Property: 'toggle', Type: 'func', Description: 'Toggles the modal to show or hide' }
      ]}
    />
  )}

## Reference

[https://bulma.io/documentation/components/modal/](https://bulma.io/documentation/components/modal/)

`;
