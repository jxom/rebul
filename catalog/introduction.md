```image
plain: true
span: 2
src: "./rebul.png"
```

### Rebul - React components built with [Bulma](https://bulma.io)

Rebul is a flexible, lightweight, plug-and-play React component library. It is currently a work in progress and [we are on our way to releasing 1.0.0](https://github.com/jxom/rebul/issues/1).
We are looking for contributors to help us build out the components, [click here for more information](https://github.com/jxom/rebul/issues/1).

### Getting Started

#### Installation

```
npm install rebul bulma
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
