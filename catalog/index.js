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
  Icon: require('../src/Icon/Icon')
};
const pages = [
  // {
  //   title: 'Layout',
  //   pages: [
  //     {
  //       title: 'Columns',
  //       path: '/elements/columns',
  //       content: pageLoader(() => import('./columns.md'))
  //     }
  //   ]
  // },
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
      }
    ]
  }
];

ReactDOM.render(<Catalog title="Rebul" imports={imports} pages={pages} />, document.getElementById('catalog'));
