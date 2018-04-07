## Import

```code
lang: jsx
---
import Progress from 'rebul/Progress';
```

## Usage

### Simple

```react
showSource: true
---
<Progress maxValue="100" value="15">15%</Progress>
```

### Colors

```react
showSource: true
---
<React.Fragment>
  <Progress color="primary" maxValue="100" value="15">15%</Progress>
  <Progress color="link" maxValue="100" value="30">30%</Progress>
  <Progress color="info" maxValue="100" value="45">45%</Progress>
  <Progress color="success" maxValue="100" value="60">60%</Progress>
  <Progress color="warning" maxValue="100" value="75">75%</Progress>
  <Progress color="danger" maxValue="100" value="90">90%</Progress>
</React.Fragment>
```

### Sizes

```react
showSource: true
---
<React.Fragment>
  <Progress maxValue="100" size="small" value="15">15%</Progress>
  <Progress maxValue="100" value="30">30%</Progress>
  <Progress maxValue="100" size="medium" value="45">45%</Progress>
  <Progress maxValue="100" size="large" value="60">60%</Progress>
</React.Fragment>
```

## Props

```table
rows:
  - Prop: color
    Type: String (optional)
    Default value:
    Description: 'Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`'
  - Prop: maxValue
    Type: String (optional)
    Default value: '`"100"`'
    Description: Max value
  - Prop: size
    Type: String (optional)
    Default value:
    Description: 'Size of progress bar. Available values: `small`, `medium`, `large`'
  - Prop: value
    Type: String
    Default value:
    Description: Value of progress bar
```

## Reference

[https://bulma.io/documentation/elements/progress/](https://bulma.io/documentation/elements/progress/)
