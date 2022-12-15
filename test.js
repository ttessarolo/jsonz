import { compressSorted, decompress } from "./index.js";
const obj = {
  tenant: "japan",
  reference: "movies",
  ts: 1669997354214,
  blockId: "IN7AAWsmQIXjcp5x2yX3F",
  internalId: "VAhK7yqm4c575JDZ-QcC0",
  contentIds: ["Z", "K", "B", "A"],
  catalog: "objects",
  eventId: "view",
  subId: "YPZ-AtIlD6UuC-0HbhHyF",
  sub: {
    z: 1,
    m: 2,
    a: 3,
    c: [{ z: 1, a: 2, d: ["Z", "M", { z: 1, a: 2 }, "A"] }, 3],
  },
};

// Compress Sorted
const compressedOrdered = compressSorted(obj);
const decompressedOrdered = decompress(compressedOrdered);

console.log(JSON.stringify(decompressedOrdered, null, 2));
console.log(decompressedOrdered);
