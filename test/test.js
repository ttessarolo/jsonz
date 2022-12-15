import test from "ava";
import { compress, compressSorted, decompress } from "../index.js";

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

const sortedObj = {
  blockId: "IN7AAWsmQIXjcp5x2yX3F",
  catalog: "objects",
  contentIds: ["A", "B", "K", "Z"],
  eventId: "view",
  internalId: "VAhK7yqm4c575JDZ-QcC0",
  reference: "movies",
  sub: { a: 3, c: [3, { a: 2, d: ["A", "M", "Z", { a: 2, z: 1 }], z: 1 }], m: 2, z: 1 },
  subId: "YPZ-AtIlD6UuC-0HbhHyF",
  tenant: "japan",
  ts: 1669997354214,
};

test("compress > decompress", (t) => {
  const compressed = compress(obj);
  const decompressed = decompress(compressed);
  t.deepEqual(decompressed, obj);
});

test("compress-sorted > decompress", (t) => {
  const compressed = compressSorted(obj);
  const decompressed = decompress(compressed);
  t.deepEqual(decompressed, sortedObj);
});
