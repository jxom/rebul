import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Button from '../src/Button/Button';
import Dropdown from '../src/Dropdown/Dropdown';
import DropdownItem from '../src/Dropdown/DropdownItem';

export default () =>
  markdown`

  ## Import

  \`\`\`code
  lang: jsx
  ---
  import Dropdown from 'rebul/Dropdown';
  \`\`\`

  ### Basic

  \`\`\`react
  showSource: true
  ---
  <Dropdown
    trigger={({ getDropdownButtonProps }) =>
      <Button {...getDropdownButtonProps()}>Dropdown button</Button>
    }
  >
    <Dropdown.Item element="a">Dropdown item</Dropdown.Item>
    <Dropdown.Item element="a" isActive>Active dropdown item</Dropdown.Item>
    <Dropdown.Item element="a">Another dropdown item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item element="a">With a divider</Dropdown.Item>
  </Dropdown>
  \`\`\`

### Hoverable

  \`\`\`react
  showSource: true
  ---
  <Dropdown
    isHoverable
    trigger={({ getDropdownButtonProps }) =>
      <Button {...getDropdownButtonProps()}>Dropdown button</Button>
    }
  >
    <Dropdown.Item element="a">Dropdown item</Dropdown.Item>
    <Dropdown.Item element="a" isActive>Active dropdown item</Dropdown.Item>
    <Dropdown.Item element="a">Another dropdown item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item element="a">With a divider</Dropdown.Item>
  </Dropdown>
  \`\`\`

### Alignment

  \`\`\`react
  showSource: true
  ---
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Dropdown
      align="left"
      trigger={({ getDropdownButtonProps }) =>
        <Button {...getDropdownButtonProps()}>Left aligned menu</Button>
      }
    >
      <Dropdown.Item element="a">Dropdown item</Dropdown.Item>
      <Dropdown.Item element="a" isActive>Active dropdown item</Dropdown.Item>
      <Dropdown.Item element="a">Another dropdown item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item element="a">With a divider</Dropdown.Item>
    </Dropdown>
    <Dropdown
      align="right"
      trigger={({ getDropdownButtonProps }) =>
        <Button {...getDropdownButtonProps()}>Right aligned menu</Button>
      }
    >
      <Dropdown.Item element="a">Dropdown item</Dropdown.Item>
      <Dropdown.Item element="a" isActive>Active dropdown item</Dropdown.Item>
      <Dropdown.Item element="a">Another dropdown item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item element="a">With a divider</Dropdown.Item>
    </Dropdown>
  </div>
  \`\`\`

### Dropup

  \`\`\`react
  showSource: true
  ---
  <Dropdown
    isDropup
    trigger={({ getDropdownButtonProps }) =>
      <Button {...getDropdownButtonProps()}>Dropdown button</Button>
    }
  >
    <Dropdown.Item element="a">Dropdown item</Dropdown.Item>
    <Dropdown.Item element="a" isActive>Active dropdown item</Dropdown.Item>
    <Dropdown.Item element="a">Another dropdown item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item element="a">With a divider</Dropdown.Item>
  </Dropdown>
  \`\`\`

## Playground

${(
    <Playground
      codeText={`<Dropdown
  trigger={({ getDropdownButtonProps }) =>
    <Button {...getDropdownButtonProps()}>Dropdown button</Button>
  }
>
  <Dropdown.Item element="a">Dropdown item</Dropdown.Item>
  <Dropdown.Item element="a" isActive>Active dropdown item</Dropdown.Item>
  <Dropdown.Item element="a">Another dropdown item</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item element="a">With a divider</Dropdown.Item>
</Dropdown>`}
      scope={{ React, Button, Dropdown }}
      theme="dracula"
    />
  )}

## \`<Dropdown>\` Props

${<TableSpecimen rows={parsePropTypes(Dropdown)} />}

## \`trigger\` render props

${<TableSpecimen rows={[
  { Property: 'getDropdownButtonProps', Type: 'func', Description: 'Provides the props you should apply to the button element you render. Includes `aria-` attributes' },
  { Property: 'getDropdownElementProps', Type: 'func', Description: 'Provides the props you should apply to the element (excluding button) you render. Includes `aria-` attributes' },
  { Property: 'show', Type: 'func', Description: 'Shows the dropdown' },
  { Property: 'hide', Type: 'func', Description: 'Hides the dropdown' },
  { Property: 'toggle', Type: 'func', Description: 'Toggles the dropdown to show or hide' }
]} />}

## \`<Dropdown.Item>\` Props

${<TableSpecimen rows={parsePropTypes(DropdownItem)} />}

## Reference

[https://bulma.io/documentation/components/dropdown/](https://bulma.io/documentation/components/dropdown/)

`;
