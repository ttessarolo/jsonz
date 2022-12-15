# jsonz

![NPM](https://img.shields.io/npm/v/@ttessarolo/jsonz/latest)
![NPM](https://img.shields.io/npm/dw/@ttessarolo/jsonz)
![NPM](https://img.shields.io/npm/l/@ttessarolo/jsonz)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@ttessarolo/jsonz)

Zero dependencies JSON objects compression library

- it works with JSON.stringify() therefore it inherits all its limitations for types serialization (check [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify))
- the compressed response is processed using the encodeURIComponent() method so it is URL friendly
- the compressSorted method recursively sort object keys and values before compressing
- this library works on Nodejs: to use it in the browser please refer to [browserify-zlib
  ](https://www.npmjs.com/package/browserify-zlib)

## Installation

```
npm install @ttessarolo/jsonz
```

## Example

```javascript
import { compress, compressSorted, decompress } from "jsonz";

// Pure JSON object
const obj = {
  tenant: "japan",
  reference: "movies",
  ts: 1669997354214,
  blockId: "IN7AAWsmQIXjcp5x2yX3F",
  internalId: "VAhK7yqm4c575JDZ-QcC0",
  contentIds: ["Z", "A"],
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
//   contentIds: ["Z", "A"],
//   catalog: "objects",
//   eventId: "view",
//   subId: "YPZ-AtIlD6UuC-0HbhHyF",
// }

// Compress Sorted
const compressedOrdered = compressSorted(obj);
const decompressedOrdered = decompress(compressedOrdered);

console.log(decompressedOrdered);

// --> prints
// {
//   blockId: "IN7AAWsmQIXjcp5x2yX3F",
//   catalog: "objects",
//   contentIds: ["A", "Z"],
//   eventId: "view",
//   internalId: "VAhK7yqm4c575JDZ-QcC0",
//   reference: "movies",
//   subId: "YPZ-AtIlD6UuC-0HbhHyF",
//   tenant: "japan",
//   ts: 1669997354214
// }
```

## License

«Copyright (c) 2022, Tommaso Tessarolo

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.»
