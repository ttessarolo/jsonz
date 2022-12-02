"use strict";
import { gzipSync, unzipSync } from "node:zlib";

export function compress(data) {
  const res = gzipSync(JSON.stringify(data));
  return encodeURIComponent(res.toString("base64"));
}

export function decompress(data) {
  const res = unzipSync(Buffer.from(decodeURIComponent(data), "base64"));
  return JSON.parse(res);
}
