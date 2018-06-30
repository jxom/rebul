import { markdown } from 'catalog';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Footer from 'rebul/lib/Footer';
// OR
import { Footer } from 'rebul';
\`\`\`

## Usage

### Simple

\`\`\`react
showSource: true
---
<Footer>
  <Container>
    <Content>
      <p>This is a footer</p>
    </Content>
  </Container>
</Footer>
\`\`\`

## Reference

[https://bulma.io/documentation/layout/section/](https://bulma.io/documentation/layout/section/)
`;
