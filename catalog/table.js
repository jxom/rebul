import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Table from '../src/Table/Table';
import TableBody from '../src/Table/TableBody';
import TableCell from '../src/Table/TableCell';
import TableCellHead from '../src/Table/TableCellHead';
import TableFoot from '../src/Table/TableFoot';
import TableHead from '../src/Table/TableHead';
import TableRow from '../src/Table/TableRow';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Table from 'rebul/Table';
\`\`\`

## Usage

### Simple

\`\`\`react
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
\`\`\`

### Hoverable

\`\`\`react
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
\`\`\`

### Bordered

\`\`\`react
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
\`\`\`

### Full width

\`\`\`react
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
\`\`\`

### Narrow

\`\`\`react
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
\`\`\`

### Striped

\`\`\`react
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
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Table isFullWidth>
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
</Table>`}
      scope={{ React, Table }}
      theme="dracula"
    />
  )}

## \`<Table>\` Props

${<TableSpecimen rows={parsePropTypes(Table)} />}

## \`<Table.Head>\` Props

${<TableSpecimen rows={parsePropTypes(TableHead)} />}

## \`<Table.Body>\` Props

${<TableSpecimen rows={parsePropTypes(TableBody)} />}

## \`<Table.Foot>\` Props

${<TableSpecimen rows={parsePropTypes(TableFoot)} />}

## \`<Table.Row>\` Props

${<TableSpecimen rows={parsePropTypes(TableRow)} />}

## \`<Table.Cell>\` Props

${<TableSpecimen rows={parsePropTypes(TableCell)} />}

## \`<Table.CellHead>\` Props

${<TableSpecimen rows={parsePropTypes(TableCellHead)} />}


## Reference

[https://bulma.io/documentation/elements/table/](https://bulma.io/documentation/elements/table/)

`;
