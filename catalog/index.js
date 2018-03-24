import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

const imports = {
  Button: require('../src/Button/Button'),
  Buttons: require('../src/Button/Buttons')
};
const pages = [
  {
    title: 'Elements',
    pages: [
      {
        title: 'Button',
        path: '/elements/button',
        content: pageLoader(() => import('./button.md'))
      }
    ]
  }
];

ReactDOM.render(<Catalog title="Catalog" imports={imports} pages={pages} />, document.getElementById('catalog'));
