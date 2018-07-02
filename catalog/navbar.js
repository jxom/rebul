import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Navbar from '../src/Navbar/Navbar';

export default () =>
  markdown`

  ## Import

  \`\`\`code
  lang: jsx
  ---
  import Navbar from 'rebul/lib/Navbar';
  // OR
  import { Navbar } from 'rebul';
  \`\`\`

  ### Navbar brand

  The \`<Navbar.Brand>\` is a direct child of \`<Navbar>\`, sits on the left side of the navbar. It can contains:

  - multiple \`<Navbar.Item>\`
  - a \`<Navbar.Burger>\` which is only seen on touch devices (< 1024px)


  \`\`\`react
  showSource: true
  ---
<Navbar>
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger/>
  </Navbar.Brand>
</Navbar>
  \`\`\`

  You can add the \`isActive\` prop to \`<Navbar.Burger>\` to turn it into a cross.

  ### Navbar menu

  The \`<Navbar.Menu>\` is also a direct child of \`<Navbar>\` and a sibling of \`<Navbar.Brand>\`.

  It is only visible on desktop devices (>= 1024px) and hidden on touch devices (< 1024px).
  To enable it for touch devices, supply an \`isActive\` prop to \`<Navbar.Menu>\`.

  \`\`\`react
  showSource: true
  ---
<Navbar>
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
    <img
      src="https://bulma.io/images/bulma-logo.png"
      alt="Bulma: a modern CSS framework based on Flexbox"
      width="112"
      height="28"
    />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Item element="a" href="#">
      Home
    </Navbar.Item>
    <Navbar.Item element="a" href="#">
      About
    </Navbar.Item>
    <Navbar.Item element="a" href="#">
      Contact
    </Navbar.Item>
  </Navbar.Menu>
</Navbar>
  \`\`\`

  ### Navbar start and end

  The \`<Navbar.Start>\` and \`<Navbar.End>\` components are a direct child of \`<Navbar.Menu>\`.

  On a desktop device (>= 1024px), \`<Navbar.Start>\` will align to the left of the menu, and \`<Navbar.End>\` will align to the right.

  They can contain of multiple \`<Navbar.Item>\`

  \`\`\`react
  showSource: true
  ---
<Navbar>
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`

### Transparent navbar

To seamlessly integrate the navbar in any visual context, you can add the \`isTransparent\` prop on the \`<Navbar>\` component. This will remove any hover or active background from the navbar items.

\`\`\`react
showSource: true
---
<Navbar isTransparent>
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
    <img
      src="https://bulma.io/images/bulma-logo.png"
      alt="Bulma: a modern CSS framework based on Flexbox"
      width="112"
      height="28"
    />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Item element="a" href="#">
      Home
    </Navbar.Item>
    <Navbar.Item element="a" href="#">
      About
    </Navbar.Item>
    <Navbar.Item element="a" href="#">
      Contact
    </Navbar.Item>
  </Navbar.Menu>
</Navbar>
\`\`\`


### Fixed navbar

You can fix the navbar to either the **top** or the **bottom** of the page.

Firstly, add the \`has-navbar-fixed-top\` or \`has-navbar-fixed-bottom\` class to either the \`<html>\` or \`<body>\` element.


\`\`\`code
lang: html
---
<html class="has-navbar-fixed-top">
\`\`\`

Secondly, add the \`isFixedTop\` or \`isFixedBottom\` prop to the \`<Navbar>\` component.

\`\`\`code
lang: jsx
---
<Navbar isFixedTop>
\`\`\`

### Dropdown menu

#### Clickable dropdown (uncontrolled logic)

\`<Navbar.Item>\` also convinently has the ability to control the logic of the dropdown. Just supply a \`hasDropdown\` prop (true/false) with a \`dropdownTrigger\` prop (trigger component), and \`<Navbar.Item>\` will return render props.

\`\`\`react
showSource: true
---
<Navbar>
  <Navbar.Item
    hasDropdown
    dropdownTrigger={({ getDropdownButtonProps }) =>
      <Navbar.Link {...getDropdownButtonProps()}>Docs</Navbar.Link>
    }
  >
    <Navbar.Item element="a" href="#" isActive>
      About
    </Navbar.Item>
    <Navbar.Item element="a" href="#">
      Contact
    </Navbar.Item>
  </Navbar.Item>
</Navbar>
\`\`\`

#### Clickable dropdown (controlled logic)

If you would like to control the navbar dropdown logic yourself. You can just use the native components.

\`\`\`react
showSource: true
---
<Navbar>
  <Navbar.Item hasDropdown>
    <Navbar.Link>
      Docs
    </Navbar.Link>
    <Navbar.Dropdown>
      <Navbar.Item element="a" href="#" isActive>
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Dropdown>
  </Navbar.Item>
</Navbar>
\`\`\`

#### Hoverable dropdown

\`\`\`react
showSource: true
---
<Navbar>
  <Navbar.Item hasDropdown isHoverable>
    <Navbar.Link>
      Docs
    </Navbar.Link>
    <Navbar.Dropdown>
      <Navbar.Item element="a" href="#" isActive>
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Dropdown>
  </Navbar.Item>
</Navbar>
\`\`\`

#### Right dropdown

To align the dropdown to the right, supply an \`isRight\` prop to \`<Navbar.Dropdown>\`

\`\`\`react
showSource: true
---
<Navbar>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item hasDropdown isHoverable>
        <Navbar.Link>
          Docs
        </Navbar.Link>
        <Navbar.Dropdown>
          <Navbar.Item element="a" href="#" isActive>
            About
          </Navbar.Item>
          <Navbar.Item element="a" href="#">
            Contact
          </Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item hasDropdown isHoverable>
        <Navbar.Link>
          Docs
        </Navbar.Link>
        <Navbar.Dropdown isRight>
          <Navbar.Item element="a" href="#" isActive>
            About
          </Navbar.Item>
          <Navbar.Item element="a" href="#">
            Contact
          </Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`

#### Dropup

If you would like a dropup menu, supply a \`isDropup\` along with \`hasDropdown\` to \`<Navbar.Item>\`.

\`\`\`react
showSource: true
---
<Navbar>
  <Navbar.Item hasDropdown isDropup isHoverable>
    <Navbar.Link>
      Docs
    </Navbar.Link>
    <Navbar.Dropdown>
      <Navbar.Item element="a" href="#" isActive>
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Dropdown>
  </Navbar.Item>
</Navbar>
\`\`\`

#### Boxed dropdowns

\`\`\`react
showSource: true
---
<Navbar isTransparent>
  <Navbar.Item hasDropdown isHoverable>
    <Navbar.Link>
      Docs
    </Navbar.Link>
    <Navbar.Dropdown isBoxed>
      <Navbar.Item element="a" href="#" isActive>
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Dropdown>
  </Navbar.Item>
</Navbar>
\`\`\`

#### Dropdown divider

You can divide dropdown items using a \`<Navbar.Divider>\` component.

\`\`\`react
showSource: true
---
<Navbar>
  <Navbar.Item hasDropdown isHoverable>
    <Navbar.Link>
      Docs
    </Navbar.Link>
    <Navbar.Dropdown>
      <Navbar.Item element="a" href="#" isActive>
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
      <Navbar.Divider />
      <Navbar.Item element="a" href="#">
        More...
      </Navbar.Item>
    </Navbar.Dropdown>
  </Navbar.Item>
</Navbar>
\`\`\`

### Colors

You can change the color of a \`<Navbar>\` component by supplying a \`color\` prop with one of the values:

- \`primary\`
- \`link\`
- \`info\`
- \`success\`
- \`warning\`
- \`danger\`
- \`black\`
- \`dark\`
- \`light\`
- \`white\`

\`\`\`react
<Navbar color="primary">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`

\`\`\`react
<Navbar color="link">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`

\`\`\`react
<Navbar color="info">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`

\`\`\`react
<Navbar color="success">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`

\`\`\`react
<Navbar color="warning">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`


\`\`\`react
<Navbar color="danger">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`


\`\`\`react
<Navbar color="black">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`


\`\`\`react
<Navbar color="dark">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`


\`\`\`react
<Navbar color="light">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`


\`\`\`react
<Navbar color="white">
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item element="a" href="#">
        Home
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        About
      </Navbar.Item>
      <Navbar.Item element="a" href="#">
        Contact
      </Navbar.Item>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item>
        <Button color="primary">
          <Icon iconClass="fa fa-download" style={{ marginRight: '5px' }} />
          Download
        </Button>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
\`\`\`

  ## Playground

${(
    <Playground
      codeText={`<Navbar>
  <Navbar.Brand>
    <Navbar.Item element="a" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Item element="a" href="#">
      Home
    </Navbar.Item>
    <Navbar.Item element="a" href="#">
      About
    </Navbar.Item>
    <Navbar.Item element="a" href="#">
      Contact
    </Navbar.Item>
  </Navbar.Menu>
</Navbar>`}
      scope={{ React, Navbar }}
      theme="dracula"
    />
  )}

## \`<Navbar>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar)} />}

## \`<Navbar.Brand>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Brand)} />}

## \`<Navbar.Burger>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Burger)} />}

## \`<Navbar.Divider>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Divider)} />}

## \`<Navbar.Dropdown>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Dropdown)} />}

## \`<Navbar.End>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.End)} />}

## \`<Navbar.Item>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Item)} />}

## \`<Navbar.Link>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Link)} />}

## \`<Navbar.Menu>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Menu)} />}

## \`<Navbar.Start>\` Props

${<TableSpecimen rows={parsePropTypes(Navbar.Start)} />}


## Reference

[https://bulma.io/documentation/components/navbar/](https://bulma.io/documentation/components/navbar/)

`;
