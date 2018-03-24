### Simple

Render a simple button using the `<Button>` component.

```react
showSource: true
---
<Button>Hello world</Button>
```

#### With a custom element

Button by default is wrapped in a `<button>` element.
But you can change it to any type of element if you pass through
a `element` prop.

```react
showSource: true
---
<Buttons>
	<Button element="a">Anchor</Button>
	<Button element="input" type="submit" value="Submit button" />
	<Button element="input" type="reset" value="Reset button" />
</Buttons>
```

### Colors

```react
showSource: true
---
<Buttons>
	<Button color="white">White</Button>
	<Button color="light">Light</Button>
	<Button color="dark">Dark</Button>
	<Button color="black">Black</Button>
	<Button color="text">Text</Button>
</Buttons>
```

```react
showSource: true
---
<Buttons>
	<Button color="primary">Primary</Button>
	<Button color="link">Link</Button>
	<Button color="info">Info</Button>
	<Button color="success">Success</Button>
	<Button color="warning">Warning</Button>
	<Button color="danger">Danger</Button>
</Buttons>
```

### Sizes

```react
showSource: true
---
<Buttons>
	<Button size="small">Small</Button>
	<Button size="normal">Normal</Button>
	<Button size="medium">Medium</Button>
	<Button size="large">Large</Button>
</Buttons>
```

### Styles

#### Outlined

```react
showSource: true
dark: true
---
<Buttons>
	<Button isOutlined color="primary">Primary</Button>
	<Button isOutlined color="link">Link</Button>
	<Button isOutlined color="info">Info</Button>
	<Button isOutlined color="success">Success</Button>
	<Button isOutlined color="warning">Warning</Button>
	<Button isOutlined color="danger">Danger</Button>
</Buttons>
```

#### Inverted

```react
showSource: true
---
<Buttons>
	<Button isInverted color="primary">Primary</Button>
	<Button isInverted color="link">Link</Button>
	<Button isInverted color="info">Info</Button>
	<Button isInverted color="success">Success</Button>
	<Button isInverted color="danger">Danger</Button>
</Buttons>
```

#### Inverted outlined

```react
showSource: true
dark: true
---
<Buttons>
	<Button isInverted isOutlined color="primary">Primary</Button>
	<Button isInverted isOutlined color="link">Link</Button>
	<Button isInverted isOutlined color="info">Info</Button>
	<Button isInverted isOutlined color="success">Success</Button>
	<Button isInverted isOutlined color="danger">Danger</Button>
</Buttons>
```

#### Rounded

```react
showSource: true
---
<Buttons>
	<Button isRounded color="primary">Primary</Button>
	<Button isRounded color="link">Link</Button>
	<Button isRounded color="info">Info</Button>
	<Button isRounded color="success">Success</Button>
	<Button isRounded color="danger">Danger</Button>
</Buttons>
```

### States

#### Hover

#### Focus

#### Active

#### Loading

#### Static

#### Disabled

### Button group

### Button addons

### Button group with addons

### List of buttons
