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
    Type: 'Function'
    Default value:
    Description: 'Function to invoke when close button clicked'
  - Prop: color
    Type: String
    Default value:
    Description: 'Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`'
```
