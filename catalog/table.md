### Simple

```react
showSource: true
---
<Table>
  <Table.Head>
    <Table.Row>
      <Table.CellHead>
        Product
      </Table.CellHead>
      <Table.CellHead>
        Quantity
      </Table.CellHead>
      <Table.CellHead>
        Price (each)
      </Table.CellHead>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Gatorade</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>$3.50</Table.Cell>
    </Table.Row>
    <Table.Row isSelected>
      <Table.Cell>Coke</Table.Cell>
      <Table.Cell>5</Table.Cell>
      <Table.Cell>$2.50</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Foot>
    <Table.Row>
      <Table.CellHead />
      <Table.CellHead>2</Table.CellHead>
      <Table.CellHead>$3.50</Table.CellHead>
    </Table.Row>
  </Table.Foot>
</Table>
```

### Hoverable

```react
showSource: true
---
<Table isHoverable>
  <Table.Head>
    <Table.Row>
      <Table.CellHead>
        Product
      </Table.CellHead>
      <Table.CellHead>
        Quantity
      </Table.CellHead>
      <Table.CellHead>
        Price (each)
      </Table.CellHead>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Gatorade</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>$3.50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Coke</Table.Cell>
      <Table.Cell>5</Table.Cell>
      <Table.Cell>$2.50</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Bordered

```react
showSource: true
---
<Table isBordered>
  <Table.Head>
    <Table.Row>
      <Table.CellHead>
        Product
      </Table.CellHead>
      <Table.CellHead>
        Quantity
      </Table.CellHead>
      <Table.CellHead>
        Price (each)
      </Table.CellHead>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Gatorade</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>$3.50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Coke</Table.Cell>
      <Table.Cell>5</Table.Cell>
      <Table.Cell>$2.50</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Full width

```react
showSource: true
---
<Table isFullWidth>
  <Table.Head>
    <Table.Row>
      <Table.CellHead>
        Product
      </Table.CellHead>
      <Table.CellHead>
        Quantity
      </Table.CellHead>
      <Table.CellHead>
        Price (each)
      </Table.CellHead>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Gatorade</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>$3.50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Coke</Table.Cell>
      <Table.Cell>5</Table.Cell>
      <Table.Cell>$2.50</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Narrow

```react
showSource: true
---
<Table isNarrow>
  <Table.Head>
    <Table.Row>
      <Table.CellHead>
        Product
      </Table.CellHead>
      <Table.CellHead>
        Quantity
      </Table.CellHead>
      <Table.CellHead>
        Price (each)
      </Table.CellHead>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Gatorade</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>$3.50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Coke</Table.Cell>
      <Table.Cell>5</Table.Cell>
      <Table.Cell>$2.50</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Striped

```react
showSource: true
---
<Table isStriped>
  <Table.Head>
    <Table.Row>
      <Table.CellHead>
        Product
      </Table.CellHead>
      <Table.CellHead>
        Quantity
      </Table.CellHead>
      <Table.CellHead>
        Price (each)
      </Table.CellHead>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Gatorade</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>$3.50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Coke</Table.Cell>
      <Table.Cell>5</Table.Cell>
      <Table.Cell>$2.50</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

## `<Table>` Props

```table
rows:
  - Prop: isBordered
    Type: Boolean (optional)
    Default value: '`false`'
    Description: Is the table bordered?
  - Prop: isFullWidth
    Type: Boolean (optional)
    Default value: '`false`'
    Description: Is the table full width?
  - Prop: isHoverable
    Type: Boolean (optional)
    Default value: '`false`'
    Description: Are the table rows hoverable?
  - Prop: isNarrow
    Type: Boolean (optional)
    Default value: '`false`'
    Description: Is the table narrow?
  - Prop: isStriped
    Type: Boolean (optional)
    Default value: '`false`'
    Description: Are the table rows striped?
```

## `<Table.Row>` Props

```table
rows:
  - Prop: isSelected
    Type: Boolean (optional)
    Default value: '`false`'
    Description: Is the row bordered?
```

## Reference

[https://bulma.io/documentation/elements/table/](https://bulma.io/documentation/elements/table/)
