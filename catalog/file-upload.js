import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import FileUpload from '../src/FileUpload/FileUpload';
import Icon from '../src/Icon/Icon';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import FileUpload from 'rebul/lib/FileUpload';
// OR
import { FileUpload } from 'rebul';
\`\`\`

## Usage

\`\`\`react
showSource: true
---
<FileUpload>
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
  </FileUpload.Label>
</FileUpload>
\`\`\`

### Modifiers

By passing the \`hasName\` prop to \`<FileUpload>\` and using a \`<FileUpload.Name>\` component, you can add a **placeholder** for the selected file name:

\`\`\`react
showSource: true
---
<FileUpload hasName>
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
    <FileUpload.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </FileUpload.Name>
  </FileUpload.Label>
</FileUpload>
\`\`\`

You can also align the **call to action** to the right with the \`isRight\` prop:

\`\`\`react
showSource: true
---
<FileUpload hasName isRight>
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
    <FileUpload.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </FileUpload.Name>
  </FileUpload.Label>
</FileUpload>
\`\`\`

You can have a boxed block with the \`isBoxed\` prop.

\`\`\`react
showSource: true
---
<FileUpload isBoxed>
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
  </FileUpload.Label>
</FileUpload>
\`\`\`

\`\`\`react
showSource: true
---
<FileUpload hasName isBoxed>
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
    <FileUpload.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </FileUpload.Name>
  </FileUpload.Label>
</FileUpload>
\`\`\`

### Colors

You can specify a color using the \`color\` prop on \`<FileUpload>\`. See [**Props**](#props) below for available values.

\`\`\`react
showSource: true
---
<FileUpload color="primary">
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
  </FileUpload.Label>
</FileUpload>
\`\`\`

### Sizes

You can specify a size using the \`size\` prop on \`<FileUpload>\`. See [**Props**](#props) below for available values.

\`\`\`react
showSource: true
---
<FileUpload size="large">
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
  </FileUpload.Label>
</FileUpload>
\`\`\`


## Playground

${(
    <Playground
      codeText={`<FileUpload hasName>
  <FileUpload.Label>
    <FileUpload.Input name="resume" />
    <FileUpload.CallToAction>
      <Icon className="file-icon" iconClass="fas fa-upload" />
      <FileUpload.Label element="span">
        Choose a file...
      </FileUpload.Label>
    </FileUpload.CallToAction>
    <FileUpload.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </FileUpload.Name>
  </FileUpload.Label>
</FileUpload>`}
      scope={{ React, FileUpload, Icon }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(FileUpload)} />}

## Reference

[https://bulma.io/documentation/elements/delete/](https://bulma.io/documentation/elements/delete/)

`;
