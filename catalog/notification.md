## Import

```code
lang: jsx
---
import Notification from 'rebul/Notification';
```

## Usage

### Simple

Render a notifcation using the `<Notification>` component.

```react
showSource: true
dark: true
---
<Notification>Hello world</Notification>
```

Specify an `onClickClose` prop to show a close button.

```react
showSource: true
dark: true
---
<Notification onClickClose={() => console.log('close notification')}>Hello world</Notification>
```

### Colors

```react
showSource: true
---
<Notification color="primary">Hello world</Notification>
```

```react
showSource: true
---
<Notification color="info">Hello world</Notification>
```

```react
showSource: true
---
<Notification color="success">Hello world</Notification>
```

```react
showSource: true
---
<Notification color="warning">Hello world</Notification>
```

```react
showSource: true
---
<Notification color="danger">Hello world</Notification>
```

## Props

```table
rows:
  - Prop: onClickClose
    Type: Function (optional)
    Default value:
    Description: 'Function to invoke when close button clicked'
  - Prop: color
    Type: String (optional)
    Default value:
    Description: 'Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`'
```

## Reference

[https://bulma.io/documentation/elements/notification/](https://bulma.io/documentation/elements/notification/)
