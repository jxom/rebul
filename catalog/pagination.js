import React from 'react';
import { markdown, TableSpecimen } from 'catalog';
import Playground from 'component-playground';
import parsePropTypes from './utils/parse-prop-types';

import Pagination from '../src/Pagination/Pagination';

export default () =>
  markdown`
## Import

\`\`\`code
lang: jsx
---
import Pagination from 'rebul/lib/Pagination';
// OR
import { Pagination } from 'rebul';
\`\`\`

## Usage

### Simple

\`\`\`react
showSource: true
---
<Pagination>
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

### Disabling buttons

You can disable a button by adding an \`isDisabled\` prop to \`<Pagination.Previous>\`, \`<Pagination.Next>\` or \`<Pagination.Link>\`.

\`\`\`react
showSource: true
---
<Pagination>
  <Pagination.Previous isDisabled />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

### Alignment

By default, the page buttons are on the left and navigation buttons are on the right. If you would like to modify this order, supply an \`align\` prop to \`<Pagination>\`.
A value of \`right\` will mean that the page buttons will go to the right, and a value of \`center\` will mean the page buttons will go to the center, and navigation buttons on either side.

#### Left align (default)

\`\`\`react
showSource: true
---
<Pagination align="left">
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

#### Right align

\`\`\`react
showSource: true
---
<Pagination align="right">
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

#### Center align

\`\`\`react
showSource: true
---
<Pagination align="centered">
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

### Rounded buttons

\`\`\`react
showSource: true
---
<Pagination isRounded>
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

### Sizes

#### Small

\`\`\`react
showSource: true
---
<Pagination size="small">
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

#### Medium

\`\`\`react
showSource: true
---
<Pagination size="medium">
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

#### Large

\`\`\`react
showSource: true
---
<Pagination size="large">
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>
\`\`\`

## Playground

${(
    <Playground
      codeText={`<Pagination>
  <Pagination.Previous />
  <Pagination.Next />
  <Pagination.List>
    <Pagination.Link aria-label="Go to page 1">1</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 45">45</Pagination.Link>
    <Pagination.Link isCurrent aria-label="page 46">46</Pagination.Link>
    <Pagination.Link aria-label="Go to page 47">47</Pagination.Link>
    <Pagination.Ellipsis />
    <Pagination.Link aria-label="Go to page 86">86</Pagination.Link>
  </Pagination.List>
</Pagination>`}
      scope={{ React, Pagination }}
      theme="dracula"
    />
  )}

## \`<Pagination>\` Props

${<TableSpecimen rows={parsePropTypes(Pagination)} />}

## \`<Pagination.Previous>\` Props

${<TableSpecimen rows={parsePropTypes(Pagination.Previous)} />}

## \`<Pagination.Next>\` Props

${<TableSpecimen rows={parsePropTypes(Pagination.Next)} />}

## \`<Pagination.Link>\` Props

${<TableSpecimen rows={parsePropTypes(Pagination.Link)} />}

## Reference

[https://bulma.io/documentation/components/pagination/](https://bulma.io/documentation/components/pagination/)

`;
