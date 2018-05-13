import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import parsePropTypes from './utils/parse-prop-types';

import Image from '../src/Image/Image';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Image from 'rebul/Image';
\`\`\`

## Usage

### Simple

\`\`\`react
showSource: true
---
<Image alt="Placeholder" size="128" src="https://bulma.io/images/placeholders/128x128.png" />
\`\`\`

### Fixed square images

\`\`\`react
showSource: true
---
<div>
  <Image alt="Placeholder" size="16" src="https://bulma.io/images/placeholders/16x16.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="24" src="https://bulma.io/images/placeholders/24x24.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="32" src="https://bulma.io/images/placeholders/32x32.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="48" src="https://bulma.io/images/placeholders/48x48.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="64" src="https://bulma.io/images/placeholders/64x64.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="96" src="https://bulma.io/images/placeholders/96x96.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="128" src="https://bulma.io/images/placeholders/128x128.png" />
</div>
\`\`\`

## Props

${<TableSpecimen rows={parsePropTypes(Image)} />}

## Reference

[https://bulma.io/documentation/elements/image/](https://bulma.io/documentation/elements/image/)
`;
