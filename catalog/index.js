import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

const imports = {
  Box: require('../src/Box/Box'),
  Button: require('../src/Button/Button'),
  Buttons: require('../src/Button/Buttons'),
  Columns: require('../src/Columns/Columns'),
  Column: require('../src/Column/Column'),
  Container: require('../src/Container/Container'),
  Content: require('../src/Content/Content'),
  Delete: require('../src/Delete/Delete'),
  Hero: require('../src/Hero/Hero'),
  Icon: require('../src/Icon/Icon'),
  Image: require('../src/Image/Image'),
  Level: require('../src/Level/Level'),
  Media: require('../src/Media/Media'),
  Notification: require('../src/Notification/Notification'),
  Progress: require('../src/Progress/Progress'),
  Section: require('../src/Section/Section'),
  Table: require('../src/Table/Table'),
  Tag: require('../src/Tag/Tag'),
  Tags: require('../src/Tag/Tags'),
  Title: require('../src/Title/Title')
};
const pages = [
  {
    title: 'Introduction',
    path: '/',
    content: pageLoader(() => import('./introduction.md'))
  },
  {
    title: 'Layout',
    pages: [
      {
        title: 'Columns',
        path: '/elements/columns',
        styles: ['/columns.css'],
        content: pageLoader(() => import('./columns.md'))
      },
      {
        title: 'Container',
        path: '/elements/container',
        styles: ['/columns.css'],
        content: pageLoader(() => import('./container.md'))
      },
      {
        title: 'Hero',
        path: '/elements/hero',
        styles: ['/columns.css'],
        content: pageLoader(() => import('./hero.md'))
      },
      {
        title: 'Level',
        path: '/elements/level',
        content: pageLoader(() => import('./level.md'))
      },
      {
        title: 'Media',
        path: '/elements/media',
        content: pageLoader(() => import('./media.md'))
      },
      {
        title: 'Section',
        path: '/elements/section',
        content: pageLoader(() => import('./section.md'))
      }
    ]
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
      },
      {
        title: 'Progress',
        path: '/elements/progress',
        content: pageLoader(() => import('./progress.md'))
      },
      {
        title: 'Table',
        path: '/elements/table',
        content: pageLoader(() => import('./table.md'))
      },
      {
        title: 'Tag',
        path: '/elements/tag',
        content: pageLoader(() => import('./tag.md'))
      },
      {
        title: 'Title',
        path: '/elements/title',
        content: pageLoader(() => import('./title.md'))
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
