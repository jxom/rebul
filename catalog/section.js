import { markdown } from 'catalog';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Section from 'rebul/lib/Section';
// OR
import { Section } from 'rebul';
\`\`\`

## Usage

### Simple

\`\`\`react
showSource: true
---
<Section>
  <Container>
    <Title>Section</Title>
    <Title isSubTitle size="4">
      A simple container to divide your page into <strong>sections</strong>.
    </Title>
  </Container>
</Section>
\`\`\`

## Reference

[https://bulma.io/documentation/layout/section/](https://bulma.io/documentation/layout/section/)

`;
