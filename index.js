"use strict";
import { gzipSync, unzipSync } from "node:zlib";

function sortKeys(object) {
  if (Array.isArray(object))
    return object.sort().map((obj) => (typeof obj === "object" ? sortKeys(obj) : obj));

  const sortedObj = {};
  const keys = Object.keys(object).sort();

  for (let index in keys) {
    const key = keys[index];
    if (typeof object[key] === "object") {
      sortedObj[key] = sortKeys(object[key]);
    } else {
      sortedObj[key] = object[key];
    }
  }

  return sortedObj;
}

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
