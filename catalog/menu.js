import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Menu from '../src/Menu/Menu';

export default () =>
  markdown`

  ## Import

  \`\`\`code
  lang: jsx
  ---
  import Menu from 'rebul/lib/Menu';
  // OR
  import { Menu } from 'rebul';
  \`\`\`

  ### Basic

  \`\`\`react
  showSource: true
  span: 3
  ---
  <Menu>
    <Menu.Label>
      General
    </Menu.Label>
    <Menu.List>
      <Menu.Item href="#">Dashboard</Menu.Item>
      <Menu.Item href="#">Customers</Menu.Item>
    </Menu.List>
    <Menu.Label>
      Administration
    </Menu.Label>
    <Menu.List>
      <Menu.Item href="#">Team Settings</Menu.Item>
      <Menu.Item
        isActive
        subMenu={
          <Menu.List>
            <Menu.Item href="#">Members</Menu.Item>
            <Menu.Item href="#">Plugins</Menu.Item>
            <Menu.Item href="#">Settings</Menu.Item>
          </Menu.List>
        }
      >
          Manage your team
      </Menu.Item>
      <Menu.Item href="#">Invitations</Menu.Item>
      <Menu.Item href="#">Authentication</Menu.Item>
    </Menu.List>
  </Menu>
  \`\`\`

## Playground

${(
    <Playground
      codeText={`<Menu>
  <Menu.Label>
    General
  </Menu.Label>
  <Menu.List>
    <Menu.Item href="#">Dashboard</Menu.Item>
    <Menu.Item href="#">Customers</Menu.Item>
  </Menu.List>
  <Menu.Label>
    Administration
  </Menu.Label>
  <Menu.List>
    <Menu.Item href="#">Team Settings</Menu.Item>
    <Menu.Item
      isActive
      subMenu={
        <Menu.List>
          <Menu.Item href="#">Members</Menu.Item>
          <Menu.Item href="#">Plugins</Menu.Item>
          <Menu.Item href="#">Settings</Menu.Item>
        </Menu.List>
      }
    >
        Manage your team
    </Menu.Item>
    <Menu.Item href="#">Invitations</Menu.Item>
    <Menu.Item href="#">Authentication</Menu.Item>
  </Menu.List>
</Menu>`}
      scope={{ React, Menu }}
      theme="dracula"
    />
  )}

## Reference

[https://bulma.io/documentation/components/menu/](https://bulma.io/documentation/components/menu/)

`;
