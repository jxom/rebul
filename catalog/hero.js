import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import parsePropTypes from './utils/parse-prop-types';

import Hero from '../src/Hero/Hero';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Hero from 'rebul/Hero';
\`\`\`

## Usage
### Basic

\`\`\`react
showSource: true
---
<Hero>
  <Hero.Body>
    <Container>
      <Title>Hero title</Title>
      <Title isSubTitle>Hero subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

### Colors

\`\`\`react
showSource: true
---
<Hero color="primary">
  <Hero.Body>
    <Container>
      <Title>Primary title</Title>
      <Title isSubTitle>Primary subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="info">
  <Hero.Body>
    <Container>
      <Title>Info title</Title>
      <Title isSubTitle>Info subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="success">
  <Hero.Body>
    <Container>
      <Title>Success title</Title>
      <Title isSubTitle>Success subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="warning">
  <Hero.Body>
    <Container>
      <Title>Warning title</Title>
      <Title isSubTitle>Warning subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="danger">
  <Hero.Body>
    <Container>
      <Title>Danger title</Title>
      <Title isSubTitle>Danger subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="dark">
  <Hero.Body>
    <Container>
      <Title>Dark title</Title>
      <Title isSubTitle>Dark subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
dark: true
---
<Hero color="light">
  <Hero.Body>
    <Container>
      <Title>Light title</Title>
      <Title isSubTitle>Light subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

### Gradients

\`\`\`react
showSource: true
dark: true
---
<Hero color="primary" isBold>
  <Hero.Body>
    <Container>
      <Title>Primary bold title</Title>
      <Title isSubTitle>Primary bold subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="info" isBold>
  <Hero.Body>
    <Container>
      <Title>Info title</Title>
      <Title isSubTitle>Info subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="success" isBold>
  <Hero.Body>
    <Container>
      <Title>Success title</Title>
      <Title isSubTitle>Success subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="warning" isBold>
  <Hero.Body>
    <Container>
      <Title>Warning title</Title>
      <Title isSubTitle>Warning subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="danger" isBold>
  <Hero.Body>
    <Container>
      <Title>Danger title</Title>
      <Title isSubTitle>Danger subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
---
<Hero color="dark" isBold>
  <Hero.Body>
    <Container>
      <Title>Dark title</Title>
      <Title isSubTitle>Dark subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
dark: true
---
<Hero color="light" isBold>
  <Hero.Body>
    <Container>
      <Title>Light title</Title>
      <Title isSubTitle>Light subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

### Sizes

\`\`\`react
showSource: true
---
<Hero color="primary" size="medium">
  <Hero.Body>
    <Container>
      <Title>Primary bold title</Title>
      <Title isSubTitle>Primary bold subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
showSource: true
---
<Hero color="primary" size="large">
  <Hero.Body>
    <Container>
      <Title>Primary bold title</Title>
      <Title isSubTitle>Primary bold subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

\`\`\`react
showSource: true
---
<Hero color="primary" size="fullheight">
  <Hero.Body>
    <Container>
      <Title>Primary bold title</Title>
      <Title isSubTitle>Primary bold subtitle</Title>
    </Container>
  </Hero.Body>
</Hero>
\`\`\`

## \`<Hero>\` Props

${<TableSpecimen rows={parsePropTypes(Hero)} />}

## \`<Hero.Head>\` Props

${<TableSpecimen rows={parsePropTypes(Hero.Head)} />}

## \`<Hero.Body>\` Props

${<TableSpecimen rows={parsePropTypes(Hero.Body)} />}

## \`<Hero.Foot>\` Props

${<TableSpecimen rows={parsePropTypes(Hero.Foot)} />}

## Reference

[https://bulma.io/documentation/layout/hero/](https://bulma.io/documentation/layout/hero/)

`;
