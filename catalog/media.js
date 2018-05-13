import { markdown } from 'catalog';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Media from 'rebul/Media';
\`\`\`

### Basic

\`\`\`react
showSource: true
---
<Media>
  <Media.Left>
    <Media.Image alt="media-left" size="64" src="https://bulma.io/images/placeholders/128x128.png" />
  </Media.Left>
  <Media.Content>
    <Content>
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </Content>
    <Level isMobile>
      <Level.Left>
        <Level.Item element="a">
          <span className="icon is-small"><i className="fas fa-reply" /></span>
        </Level.Item>
        <Level.Item element="a">
          <span className="icon is-small"><i className="fas fa-retweet" /></span>
        </Level.Item>
        <Level.Item element="a">
          <span className="icon is-small"><i className="fas fa-heart" /></span>
        </Level.Item>
      </Level.Left>
    </Level>
  </Media.Content>
  <Media.Right>
    <Delete />
  </Media.Right>
</Media>
\`\`\`

## Reference

[https://bulma.io/documentation/layout/media-object/](https://bulma.io/documentation/layout/media-object/)
`;
