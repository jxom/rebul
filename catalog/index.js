import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

const imports = {
  Box: require('../src/Box/Box'),
  Button: require('../src/Button/Button'),
  Buttons: require('../src/Button/Buttons'),
  Content: require('../src/Content/Content')
  // Columns: require('../src/Columns/Columns'),
  // Column: require('../src/Column/Column')
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
      }
    ]
  }
];

ReactDOM.render(<Catalog title="Catalog" imports={imports} pages={pages} />, document.getElementById('catalog'));
