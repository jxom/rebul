import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Card from '../src/Card/Card';
import Icon from '../src/Icon/Icon';
import Column from '../src/Column/Column';
import Columns from '../src/Columns/Columns';
import Image from '../src/Image/Image';
import Media from '../src/Media/Media';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Level from 'rebul/Card';
\`\`\`

### Card Header and Footer

\`\`\`react
showSource: true
dark: true
---
<Columns>
  <Column size="one-third">
    <Card>
      <Card.Header>
        <Card.HeaderTitle>
          Hello World
        </Card.HeaderTitle>
        <Card.HeaderIcon>
          <Icon iconClass="fas fa-home" />
        </Card.HeaderIcon>
      </Card.Header>
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      </Card.Content>
      <Card.Footer>
        <Card.FooterItem>
          Save
        </Card.FooterItem>
        <Card.FooterItem>
          Edit
        </Card.FooterItem>
        <Card.FooterItem>
          Delete
        </Card.FooterItem>
      </Card.Footer>
    </Card>
  </Column>
</Columns>
\`\`\`

### Card Media 

\`\`\`react
showSource: true
dark: true
---
<Columns>
  <Column size="one-third">
    <Card>
      <Card.Content>
        <Media>
          <Media.Left>
            <Card.Image>
              <Image alt="media-left" size="48" src="https://bulma.io/images/placeholders/48x48.png" />
            </Card.Image>
          </Media.Left>
          <Media.Content>
            <Content>
              <p>
                <strong>John Smith</strong><br />
                <small>@johnsmith</small>
              </p>
            </Content>
          </Media.Content>
        </Media>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      </Card.Content>
    </Card>
  </Column>
</Columns>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Card>
  <Card.Header>
    <Card.HeaderTitle>
      Hello World
    </Card.HeaderTitle>
  </Card.Header>
  <Card.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
  </Card.Content>
  <Card.Footer>
    <Card.FooterItem>
      Save
    </Card.FooterItem>
    <Card.FooterItem>
      Edit
    </Card.FooterItem>
    <Card.FooterItem>
      Delete
    </Card.FooterItem>
  </Card.Footer>
</Card>`}
      scope={{ React, Card }}
      theme="dracula"
    />
  )}

## Props

${<TableSpecimen rows={parsePropTypes(Card)} />}

## Reference

[https://bulma.io/documentation/components/card/](https://bulma.io/documentation/components/card/)

`;
