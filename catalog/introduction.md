```image
plain: true
span: 2
src: "./rebul.png"
```

### Rebul - React components built with [Bulma](https://bulma.io)

Rebul is a flexible, lightweight, plug-and-play React component library built on top of the [Bulma CSS Framework](https://bulma.io/).

### Getting Started

#### Installation

```
npm install rebul bulma
```

or Yarn if you prefer:

```
yarn add rebul bulma
```

#### Basic usage

Rebul does not depend on Bulma's stylesheets as we don't want to restrict you to any one version, hence you will have to import it yourself.

```code
lang: jsx
---
import 'bulma/css/bulma.css';

import Button from 'rebul/lib/Button'; // or: import { Button } from 'rebul';

export default () => <Button color="primary">Hello world</Button>
```
