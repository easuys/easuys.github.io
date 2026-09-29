import assert from "node:assert/strict";
import { readFile as readRawFile } from "node:fs/promises";
import { test } from "node:test";

// Normalise Windows (core.autocrlf) checkouts so line-anchored checks behave as on CI.
const readFile = async (...args) => (await readRawFile(...args)).replace(/\r\n/g, "\n");

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

const HOME_METADATA = [
  ["index.html", "https://www.easuys.be/"],
  ["index-en.html", "https://www.easuys.be/index-en.html"],
  ["index-fr.html", "https://www.easuys.be/index-fr.html"],
];

const TOOL_METADATA = [
  ["tools/index.html", "https://www.easuys.be/tools/"],
  ["tools/index-en.html", "https://www.easuys.be/tools/index-en.html"],
  ["tools/index-fr.html", "https://www.easuys.be/tools/index-fr.html"],
];

const HOME_ALTERNATES = [
  ["nl-be", "https://www.easuys.be/"],
  ["en-gb", "https://www.easuys.be/index-en.html"],
  ["fr-be", "https://www.easuys.be/index-fr.html"],
  ["x-default", "https://www.easuys.be/"],
];

const TOOL_ALTERNATES = [
  ["nl-be", "https://www.easuys.be/tools/"],
  ["en-gb", "https://www.easuys.be/tools/index-en.html"],
  ["fr-be", "https://www.easuys.be/tools/index-fr.html"],
  ["x-default", "https://www.easuys.be/tools/"],
];

function canonicalUrls(html) {
  return [...html.matchAll(/<link rel="canonical" href="([^"]+)">/g)].map(
    (match) => match[1],
  );
}

function alternateUrls(html) {
  return [
    ...html.matchAll(
      /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g,
    ),
  ].map((match) => [match[1], match[2]]);
}

function jsonLdDocuments(html) {
  return [
    ...html.matchAll(
      /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g,
    ),
  ].map((match) => JSON.parse(match[1]));
}

test("tools pages link to structural tools and mark retaining tools pending", async () => {
  for (const page of TOOL_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.match(html, /https:\/\/structural\.easuys\.com\//, page);
    assert.doesNotMatch(html, /https:\/\/retaining\.easuys\.com\//, page);
    assert.match(html, /class="tool-action is-disabled" aria-disabled="true"/, page);
  }
});

test("home pages link to structural tools without a retaining-tools link", async () => {
  for (const page of HOME_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.match(html, /https:\/\/structural\.easuys\.com\//, page);
    assert.doesNotMatch(html, /https:\/\/retaining\.easuys\.com\//, page);
  }
});

test("public tools pages remain contact pages without calculator UI", async () => {
  for (const page of TOOL_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.doesNotMatch(html, /tools\.js/, page);
    assert.doesNotMatch(html, /data-tool-form/, page);
  }
});

test("home-page canonical, hreflang and JSON-LD URLs use the CNAME host", async () => {
  for (const [page, canonical] of HOME_METADATA) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");

    assert.deepEqual(canonicalUrls(html), [canonical], page);
    assert.deepEqual(alternateUrls(html), HOME_ALTERNATES, page);
    assert.doesNotMatch(html, /https:\/\/easuys\.be\//, page);

    const nodes = jsonLdDocuments(html).flatMap((document) =>
      Array.isArray(document) ? document : [document],
    );
    assert.equal(nodes.length, 3, page);
    assert.ok(
      nodes.every((node) => node["@context"] === "https://schema.org"),
      page,
    );

    const business = nodes.find((node) => node["@type"] === "LocalBusiness");
    const articles = nodes.filter((node) => node["@type"] === "Article");
    assert.equal(business?.url, "https://www.easuys.be/", page);
    assert.equal(articles.length, 2, page);
    assert.ok(articles.every((article) => article.url === canonical), page);
  }
});

test("tools-page canonical and hreflang URLs use the CNAME host", async () => {
  for (const [page, canonical] of TOOL_METADATA) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.deepEqual(canonicalUrls(html), [canonical], page);
    assert.deepEqual(alternateUrls(html), TOOL_ALTERNATES, page);
    assert.doesNotMatch(html, /https:\/\/easuys\.be\//, page);
  }
});

test("robots and sitemap advertise only indexable canonical pages", async () => {
  const cname = await readFile(new URL("../CNAME", import.meta.url), "utf8");
  const robots = await readFile(new URL("../robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../sitemap.xml", import.meta.url), "utf8");

  assert.equal(cname.trim(), "www.easuys.be");
  assert.match(robots, /^User-agent: \*\nAllow: \/\n\nSitemap: https:\/\/www\.easuys\.be\/sitemap\.xml\n$/);
  assert.deepEqual(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
    HOME_METADATA.map(([, canonical]) => canonical),
  );
  assert.doesNotMatch(sitemap, /\/tools\//);
});

test("pull-request CI is read-only, bounded and cannot deploy", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/pr-ci.yml", import.meta.url),
    "utf8",
  );

  assert.match(workflow, /^on:\n  pull_request:\s*$/m);
  assert.match(workflow, /^permissions:\n  contents: read$/m);
  assert.match(
    workflow,
    /^concurrency:\n  group: public-site-pr-\$\{\{ github\.event\.pull_request\.number \}\}\n  cancel-in-progress: true$/m,
  );
  assert.match(workflow, /runs-on: ubuntu-24\.04/);
  assert.match(workflow, /timeout-minutes: 10/);
  assert.match(workflow, /persist-credentials: false/);
  assert.match(workflow, /node-version: 22/);
  assert.match(workflow, /cache-dependency-path: package-lock\.json/);
  assert.match(workflow, /npm ci --ignore-scripts --no-audit --no-fund/);
  assert.match(workflow, /npm test/);

  const actions = [...workflow.matchAll(/^\s+uses:\s+([^\s#]+)/gm)].map(
    (match) => match[1],
  );
  assert.deepEqual(actions, [
    "actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683",
    "actions/setup-node@49933ea5288caeca8642d1e84afbd3f7d6820020",
  ]);
  assert.ok(actions.every((action) => /@[0-9a-f]{40}$/.test(action)));

  assert.doesNotMatch(
    workflow,
    /^  (push|workflow_dispatch|workflow_call|schedule|pull_request_target):/m,
  );
  assert.doesNotMatch(
    workflow,
    /\b(secrets|deploy|deployment|pages: write|id-token: write)\b/i,
  );
});

test("home pages link to the retaining technical preview and a project enquiry", async () => {
  for (const page of HOME_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.match(html, /href="https:\/\/www\.easuys\.be\/easuys-retaining-tools-web\/"/, page);
    assert.match(html, /class="button-link" href="mailto:info@easuys\.be\?subject=/, page);
    assert.match(html, /href="tools\/(index-(en|fr)\.html)?"/, page);
  }
});

test("home pages do not state that commercial-software validation is pending", async () => {
  for (const page of HOME_PAGES) {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.doesNotMatch(html, /commerci(al|ële|aux)|loopt nog|still pending|est en cours/i, page);
  }
});
