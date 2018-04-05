import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

const imports = {
  Box: require('../src/Box/Box'),
  Button: require('../src/Button/Button'),
  Buttons: require('../src/Button/Buttons'),
  // Columns: require('../src/Columns/Columns'),
  // Column: require('../src/Column/Column'),
  Content: require('../src/Content/Content'),
  Delete: require('../src/Delete/Delete'),
  Icon: require('../src/Icon/Icon'),
  Image: require('../src/Image/Image'),
  Notification: require('../src/Notification/Notification')
};
const pages = [
  {
    title: 'Welcome',
    path: '/',
    content: pageLoader(() => import('./welcome.md'))
  },
  {
    title: 'Elements',
    pages: [
      {
        title: 'Box',
        path: '/elements/box',
        content: pageLoader(() => import('./box.md'))
      },
      {
        title: 'Button',
        path: '/elements/button',
        content: pageLoader(() => import('./button.md'))
      },
      {
        title: 'Content',
        path: '/elements/content',
        content: pageLoader(() => import('./content.md'))
      },
      {
        title: 'Delete',
        path: '/elements/delete',
        content: pageLoader(() => import('./delete.md'))
      },
      {
        title: 'Icon',
        path: '/elements/icon',
        content: pageLoader(() => import('./icon.md'))
      },
      {
        title: 'Image',
        path: '/elements/image',
        content: pageLoader(() => import('./image.md'))
      },
      {
        title: 'Notification',
        path: '/elements/notification',
        content: pageLoader(() => import('./notification.md'))
      }
    ]
  }
];

ReactDOM.render(
  <Catalog
    title="Rebul"
    logoSrc="./rebul.png"
    imports={imports}
    pages={pages}
    theme={{
      linkColor: '#3273dc',
      sidebarColorTextActive: '#3273dc',
      pageHeadingBackground: '#3273dc'
    }}
  />,
  document.getElementById('catalog')
);
