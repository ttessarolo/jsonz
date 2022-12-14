"use strict";
import { gzipSync, unzipSync } from "node:zlib";

const sortKeys = (o) =>
  Object.keys(o)
    .sort()
    .reduce((r, k) => ((r[k] = o[k]), r), {});

export function compress(data) {
  const res = gzipSync(JSON.stringify(data));
  return encodeURIComponent(res.toString("base64"));
}

export function compressSorted(data) {
  return compress(sortKeys(data));
}

export function decompress(data) {
  const res = unzipSync(Buffer.from(decodeURIComponent(data), "base64"));
  return JSON.parse(res);
}
