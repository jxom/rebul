import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Tab from '../src/Tabs/Tab';
import Tabs from '../src/Tabs/Tabs';

import Icon from '../src/Icon/Icon';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Tab from 'rebul/lib/Tab';
import Tabs from 'rebul/lib/Tabs';
// OR
import { Tabs, Tab } from 'rebul';
\`\`\`

## Usage

### Simple

Render basic tabs by wrapping one or many \`<Tab>\` components with \`<Tabs>\`:

\`\`\`react
showSource: true
---
<Tabs>
  <Tab isActive>Pictures</Tab>
  <Tab>Music</Tab>
  <Tab>Videos</Tab>
  <Tab>Documents</Tab>
</Tabs>
\`\`\`


### Alignment

\`\`\`react
showSource: true
---
<Tabs align="centered">
  <Tab isActive>Pictures</Tab>
  <Tab>Music</Tab>
  <Tab>Videos</Tab>
  <Tab>Documents</Tab>
</Tabs>
\`\`\`

\`\`\`react
showSource: true
---
<Tabs align="right">
  <Tab isActive>Pictures</Tab>
  <Tab>Music</Tab>
  <Tab>Videos</Tab>
  <Tab>Documents</Tab>
</Tabs>
\`\`\`

### With Icons

\`\`\`react
showSource: true
---
<Tabs>
  <Tab isActive>
    <Icon iconClass="fas fa-image" size="small"/>
    <span>Pictures</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-music" size="small"/>
    <span>Music</span>
  </Tab>
  <Tab>
  	<Icon iconClass="fas fa-film" size="small"/>
    <span>Videos</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-file-alt" size="small"/>
    <span>Documents</span>
  </Tab>
</Tabs>
\`\`\`

### Sizes

\`\`\`react
showSource: true
---
<Tabs size="small">
  <Tab isActive>Pictures</Tab>
  <Tab>Music</Tab>
  <Tab>Videos</Tab>
  <Tab>Documents</Tab>
</Tabs>
\`\`\`

\`\`\`react
showSource: true
---
<Tabs size="medium">
  <Tab isActive>Pictures</Tab>
  <Tab>Music</Tab>
  <Tab>Videos</Tab>
  <Tab>Documents</Tab>
</Tabs>
\`\`\`

\`\`\`react
showSource: true
---
<Tabs size="large">
  <Tab isActive>Pictures</Tab>
  <Tab>Music</Tab>
  <Tab>Videos</Tab>
  <Tab>Documents</Tab>
</Tabs>
\`\`\`

### Styles

\`\`\`react
showSource: true
---
<Tabs isBoxed>
  <Tab isActive>
  	<Icon iconClass="fas fa-image" size="small"/>
    <span>Pictures</span>
  </Tab>
  <Tab>
  	<Icon iconClass="fas fa-music" size="small"/>
    <span>Music</span>
  </Tab>
  <Tab>
  	<Icon iconClass="fas fa-film" size="small"/>
    <span>Videos</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-file-alt" size="small"/>
    <span>Documents</span>
  </Tab>
</Tabs>
\`\`\`

\`\`\`react
showSource: true
---
<Tabs isToggle>
  <Tab isActive>
    <Icon iconClass="fas fa-image" size="small"/>
    <span>Pictures</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-music" size="small"/>
    <span>Music</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-film" size="small"/>
    <span>Videos</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-file-alt" size="small"/>
    <span>Documents</span>
  </Tab>
</Tabs>
\`\`\`

\`\`\`react
showSource: true
---
<Tabs isToggle isToggleRounded>
  <Tab isActive>
    <Icon iconClass="fas fa-image" size="small"/>
    <span>Pictures</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-music" size="small"/>
    <span>Music</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-film" size="small"/>
    <span>Videos</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-file-alt" size="small"/>
    <span>Documents</span>
  </Tab>
</Tabs>
\`\`\`

\`\`\`react
showSource: true
---
<Tabs isFullWidth>
  <Tab isActive>
    <Icon iconClass="fas fa-angle-left" size="small"/>
    <span>Left</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-angle-up" size="small"/>
    <span>Up</span>
  </Tab>
  <Tab>
    <Icon iconClass="fas fa-angle-right" size="small"/>
    <span>Right</span>
  </Tab>
</Tabs>
\`\`\`




## Playground

${(
    <Playground
      codeText={`<Tabs>
  <Tab isActive>Pictures</Tab>
  <Tab>Music</Tab>
  <Tab>Videos</Tab>
  <Tab>Documents</Tab>
</Tabs>
`}
      scope={{ React, Tabs, Tab, Icon }}
      theme="dracula"
    />
  )}

## \`<Tabs>\` Props

${<TableSpecimen rows={parsePropTypes(Tabs)} />}

## \`<Tab>\` Props

${<TableSpecimen rows={parsePropTypes(Tab)} />}


## Reference

[https://bulma.io/documentation/elements/Tabs/](https://bulma.io/documentation/elements/Tabs/)

`;
