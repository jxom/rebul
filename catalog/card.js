import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Card from '../src/Card/Card';
import CardHeader from '../src/Card/CardHeader';
import CardHeaderTitle from '../src/Card/CardHeaderTitle';
import CardHeaderIcon from '../src/Card/CardHeaderIcon';
import CardContent from '../src/Card/CardContent';
import CardImage from '../src/Card/CardImage';
import CardFooter from '../src/Card/CardFooter';
import CardFooterItem from '../src/Card/CardFooterItem';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Card from 'rebul/lib/Card';
// OR
import { Card } from 'rebul';
\`\`\`

### Card Header and Footer

\`\`\`react
showSource: true
dark: true
---
<div style={{ maxWidth: '400px' }}>
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
      <Card.FooterItem element="a" href="#">
        Save
      </Card.FooterItem>
      <Card.FooterItem element="a" href="#">
        Edit
      </Card.FooterItem>
      <Card.FooterItem element="a" href="#">
        Delete
      </Card.FooterItem>
    </Card.Footer>
  </Card>
</div>
\`\`\`

### Card Media

\`\`\`react
showSource: true
dark: true
---
<div style={{ maxWidth: '400px' }}>
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
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      </Content>
    </Card.Content>
  </Card>
</div>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<div style={{ maxWidth: '400px' }}>
  <Card>
    <Card.Header>
      <Card.HeaderTitle>
        Hello World
      </Card.HeaderTitle>
    </Card.Header>
    <Card.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    </Card.Content>
    <Card.Footer>
      <Card.FooterItem element="a" href="#">
        Save
      </Card.FooterItem>
      <Card.FooterItem element="a" href="#">
        Edit
      </Card.FooterItem>
      <Card.FooterItem element="a" href="#">
        Delete
      </Card.FooterItem>
    </Card.Footer>
  </Card>
</div>`}
      scope={{ React, Card }}
      theme="dracula"
    />
  )}

## \`<Card>\` Props

${<TableSpecimen rows={parsePropTypes(Card)} />}

## \`<CardHeader>\` Props

${<TableSpecimen rows={parsePropTypes(CardHeader)} />}

## \`<CardHeaderIcon>\` Props

${<TableSpecimen rows={parsePropTypes(CardHeaderIcon)} />}

## \`<CardHeaderTitle>\` Props

${<TableSpecimen rows={parsePropTypes(CardHeaderTitle)} />}

## \`<CardContent>\` Props

${<TableSpecimen rows={parsePropTypes(CardContent)} />}

## \`<CardImage>\` Props

${<TableSpecimen rows={parsePropTypes(CardImage)} />}

## \`<CardFooter>\` Props

${<TableSpecimen rows={parsePropTypes(CardFooter)} />}

## \`<CardFooterItem>\` Props

${<TableSpecimen rows={parsePropTypes(CardFooterItem)} />}

## Reference

[https://bulma.io/documentation/components/card/](https://bulma.io/documentation/components/card/)

`;
