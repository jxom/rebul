### Simple

Render a remove-type button using the `<Delete>` component.

```react
showSource: true
---
<Delete />
```

### Custom element

You can specify a custom element with the `element` prop. `<Delete>` uses `<button>` as its default element.

```react
showSource: true
---
<Delete element="a" /> // <a class="delete"></a>
```

### Sizes

You can specify a custom size with the `size` prop. Available sizes are: `small`, `medium` and `large`.

```react
showSource: true
---
<div>
  <Delete size="small" />
  <Delete />
  <Delete size="medium" />
  <Delete size="large" />
</div>
```

## Props

```table
rows:
  - Prop: element
    Type: 'String (optional)'
    Default value: '`button`'
    Description: 'Custom wrapper element for `<Button>`'
  - Prop: size
    Type: 'String (optional)'
    Default value:
    Description: 'Size of delete button. Available values: `small`, `medium`, `large`'
```

## Reference

[https://bulma.io/documentation/elements/delete/](https://bulma.io/documentation/elements/delete/)
