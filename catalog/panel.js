import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Panel from '../src/Panel/Panel';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Panel from 'rebul/lib/Panel';
// OR
import { Panel } from 'rebul';
\`\`\`

## Usage

### Simple

\`\`\`react
showSource: true
---
<Panel>
  <Panel.Heading>
    Repositories
  </Panel.Heading>
  <Panel.Block>
    <TextField
      leftIconName="fa fa-search"
      inputSize="small"
      style={{ width: '100%' }}
    />
  </Panel.Block>
  <Panel.Tabs>
    <a className="is-active">all</a>
    <a>public</a>
    <a>private</a>
    <a>sources</a>
    <a>forks</a>
  </Panel.Tabs>
  <Panel.Block element="a" isActive>
    <Icon className="panel-icon" iconClass="fas fa-book" />
    bulma
  </Panel.Block>
  <Panel.Block element="a">
    <Icon className="panel-icon" iconClass="fas fa-book" />
    marksheet
  </Panel.Block>
  <Panel.Block element="a">
    <Icon className="panel-icon" iconClass="fas fa-book" />
    minireset.css
  </Panel.Block>
  <Panel.Block element="a">
    <Icon className="panel-icon" iconClass="fas fa-book" />
    jgthms.github.io
  </Panel.Block>
  <Panel.Block element="a">
    <Icon className="panel-icon" iconClass="fas fa-code-branch" />
    daniellowtw/infboard
  </Panel.Block>
  <Panel.Block element="a">
    <Icon className="panel-icon" iconClass="fas fa-code-branch" />
    mojs
  </Panel.Block>
  <Panel.Block element="label">
    <CheckboxField text="Remember me" />
  </Panel.Block>
  <Panel.Block>
    <Button className="is-fullwidth" color="link" isOutlined>
      reset all filters
    </Button>
  </Panel.Block>
</Panel>
\`\`\`

## \`<Panel>\` Props

${<TableSpecimen rows={parsePropTypes(Panel)} />}

## \`<Panel.Heading>\` Props

${<TableSpecimen rows={parsePropTypes(Panel.Heading)} />}

## \`<Panel.Block>\` Props

${<TableSpecimen rows={parsePropTypes(Panel.Block)} />}

## \`<Panel.Tabs>\` Props

${<TableSpecimen rows={parsePropTypes(Panel.Tabs)} />}

## Reference

[https://bulma.io/documentation/components/panel/](https://bulma.io/documentation/components/panel/)

`;
