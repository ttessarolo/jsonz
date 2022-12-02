# jsonz

Zero dependencies JSON objects compression library

- it works with JSON.stringify() therefore it inherits all its limitations for types serialization (check [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify))
- the compressed response is processed using the encodeURIComponent() method so it is URL friendly

## Installation

```
npm install jsonz
```

## Example

```javascript
import { compress, decompress } from "jsonz";

// Pure JSON object
const obj = {
  tenant: "japan",
  reference: "movies",
  ts: 1669997354214,
  blockId: "IN7AAWsmQIXjcp5x2yX3F",
  internalId: "VAhK7yqm4c575JDZ-QcC0",
  contentIds: ["J100000000462", "J100000001272"],
  catalog: "objects",
  eventId: "view",
  subId: "YPZ-AtIlD6UuC-0HbhHyF",
};

// Compress and Decompress JSON Object
const compressed = compress(obj);
const decompressed = decompress(compressed);

console.log(decompressed);

// --> prints
// {
//   tenant: "japan",
//   reference: "movies",
//   ts: 1669997354214,
//   blockId: "IN7AAWsmQIXjcp5x2yX3F",
//   internalId: "VAhK7yqm4c575JDZ-QcC0",
//   contentIds: ["J100000000462", "J100000001272"],
//   catalog: "objects",
//   eventId: "view",
//   subId: "YPZ-AtIlD6UuC-0HbhHyF",
// }
```
