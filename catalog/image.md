### Simple

```react
showSource: true
---
<Image alt="Placeholder" size="128" src="https://bulma.io/images/placeholders/128x128.png" />
```

### Fixed square images

```react
showSource: true
---
<div>
  <Image alt="Placeholder" size="16" src="https://bulma.io/images/placeholders/16x16.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="24" src="https://bulma.io/images/placeholders/24x24.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="32" src="https://bulma.io/images/placeholders/32x32.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="48" src="https://bulma.io/images/placeholders/48x48.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="64" src="https://bulma.io/images/placeholders/64x64.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="96" src="https://bulma.io/images/placeholders/96x96.png" style={{ marginBottom: '10px' }} />
  <Image alt="Placeholder" size="128" src="https://bulma.io/images/placeholders/128x128.png" />
</div>
```

## Props

```table
rows:
  - Prop: alt
    Type: 'String'
    Default value:
    Description: 'Image alt text'
  - Prop: size
    Type: 'String (optional)'
    Default value:
    Description: 'Size of image. Available values: `16`, `24`, `32`, `48`, `64`, `96`, `128`'
  - Prop: src
    Type: 'String'
    Default value:
    Description: 'Image source'
```

## Reference

[https://bulma.io/documentation/elements/image/](https://bulma.io/documentation/elements/image/)
