import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const TOOL_PAGES = [
  "tools/index.html",
  "tools/index-en.html",
  "tools/index-fr.html",
];

const HOME_PAGES = [
  "index.html",
  "index-en.html",
  "index-fr.html",
];

test("tools pages link to structural tools subdomain", async () => {
  for (const page of TOOL_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.match(html, /https:\/\/structural\.easuys\.com\//, page);
    assert.match(html, /https:\/\/retaining\.easuys\.com\//, page);
  }
});

test("home pages link to structural and retaining public tools", async () => {
  for (const page of HOME_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.match(html, /https:\/\/structural\.easuys\.com\//, page);
    assert.match(html, /https:\/\/retaining\.easuys\.com\//, page);
  }
});

test("public tools pages remain contact pages without calculator UI", async () => {
  for (const page of TOOL_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.doesNotMatch(html, /tools\.js/, page);
    assert.doesNotMatch(html, /data-tool-form/, page);
  }
});
