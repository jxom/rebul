import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Notification from '../src/Notification/Notification';
import Tile from '../src/Tile/Tile';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Tile from 'rebul/lib/Tile';
// OR
import { Tile } from 'rebul';
\`\`\`

## Usage

\`\`\`react
showSource: true
---
<Tile context="ancestor">
  <Tile isVertical size="8">
    <Tile>
      <Tile context="parent" isVertical>
        <Tile element="article" context="child">
          <Notification color="primary" style={{ height: '100%' }}>
            <Title>Vertical...</Title>
            <Title isSubTitle>Top tile</Title>
          </Notification>
        </Tile>
        <Tile element="article" context="child">
          <Notification color="warning" style={{ height: '100%' }}>
            <Title>...tiles</Title>
            <Title isSubTitle>Bottom tile</Title>
          </Notification>
        </Tile>
      </Tile>
      <Tile context="parent">
        <Tile context="child">
          <Notification color="info" style={{ height: '100%' }}>
            <Title>Middle tile</Title>
            <Title isSubTitle>with an image</Title>
            <Image className="is-4by3" alt="Placeholder" src="https://bulma.io/images/placeholders/640x480.png" />
          </Notification>
        </Tile>
      </Tile>
    </Tile>
    <Tile context="parent">
      <Tile context="child">
        <Notification color="danger" style={{ height: '100%' }}>
          <Title>Wide tile</Title>
          <Title isSubTitle>Aligned with the right tile</Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </Content>
        </Notification>
      </Tile>
    </Tile>
  </Tile>
  <Tile context="parent">
    <Tile context="child">
      <Notification color="success" style={{ height: '100%' }}>
        <Title>Tall tile</Title>
        <Title isSubTitle>With event more content</Title>
        <Content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
          <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        </Content>
      </Notification>
    </Tile>
  </Tile>
</Tile>
\`\`\`

## Props

${<TableSpecimen rows={parsePropTypes(Tile)} />}

## Reference

[https://bulma.io/documentation/layouts/tiles/](https://bulma.io/documentation/layouts/tiles/)

`;
