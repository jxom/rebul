## Import

```code
lang: jsx
---
import Container from 'rebul/Container';
```

## Usage
### Basic

```react
showSource: true
dark: true
---
<Container>
  <Notification>This container is <strong>centered</strong> on desktop.</Notification>
</Container>
```

### Fluid

```react
showSource: true
dark: true
---
<Container size="fluid">
  <Notification>This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
    viewport size.</Notification>
</Container>
```

### Breakpoints

```react
showSource: true
dark: true
---
<Container size="desktop">
  <Notification>This container is <strong>fullwidth</strong> <em>until</em> the <code>desktop</code> breakpoint.</Notification>
</Container>
```

```react
showSource: true
dark: true
---
<Container size="widescreen">
  <Notification>This container is <strong>fullwidth</strong> <em>until</em> the <code>widescreen</code> breakpoint.</Notification>
</Container>
```

```react
showSource: true
dark: true
---
<Container size="fullhd">
  <Notification>This container is <strong>fullwidth</strong> <em>until</em> the <code>fullhd</code> breakpoint.</Notification>
</Container>
```

## Props

```table
rows:
  - Prop: size
    Type: 'String (optional)'
    Default value:
    Description: 'Available values: `fluid`, `desktop`, `widescreen`, `fullhd`'
```

## Reference

[https://bulma.io/documentation/layout/container/](https://bulma.io/documentation/layout/container/)
