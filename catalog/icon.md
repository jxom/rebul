### Simple

Render an icon using the `<Icon>` component

```react
showSource: true
---
<Icon iconClass="fas fa-home" />
```

### Colors

Use the `color` prop to render icons with a color.

```react
showSource: true
---
<div>
  <Icon iconClass="fas fa-home" color="primary" />
  <Icon iconClass="fas fa-home" color="info" />
  <Icon iconClass="fas fa-home" color="success" />
  <Icon iconClass="fas fa-home" color="warning" />
  <Icon iconClass="fas fa-home" color="danger" />
</div>
```

### Sizes

You can specify a custom size with the `size` prop. Available sizes are: `small`, `medium` and `large`.

Note: This will alter the container size of the icon. To alter the actual icon size, use the icons size class name.

```react
showSource: true
---
<div>
  <Icon iconClass="fas fa-home" size="small" />
  <Icon iconClass="fas fa-lg fa-home" />
  <Icon iconClass="fas fa-2x fa-home" size="medium" />
  <Icon iconClass="fas fa-3x fa-home" size="large" />
</div>
```

## Props

```table
rows:
  - Prop: iconClass
    Type: 'string'
    Default value:
    Description: 'Icon class name. Example (Font Awesome 5): `fa fa-home`'
  - Prop: color
    Type: 'string (optional)'
    Default value:
    Description: 'Color of the icon. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`'
  - Prop: size
    Type: 'string'
    Default value:
    Description: 'Size of the icon. Available values: `small`, `medium`, `large`'
```
