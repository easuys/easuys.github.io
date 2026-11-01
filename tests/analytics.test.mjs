import assert from "node:assert/strict";
import { readFile as readRawFile } from "node:fs/promises";
import { test } from "node:test";

// Cloudflare Web Analytics (A2 step 0): one beacon per page with the site token, no cookies, and a footer note
// in the page's language that says how visits are counted.
const readFile = async (...args) => (await readRawFile(...args)).replace(/\r\n/g, "\n");

const TOKEN = "4cb3c72ee81046a3adba3c316057eeae";
const PAGES = [
  ["index.html", "Bezoeken worden geteld"],
  ["index-en.html", "Visits are counted"],
  ["index-fr.html", "Les visites sont comptées"],
  ["nieuws/beweegt-uw-gebouw.html", "Bezoeken worden geteld"],
  ["nieuws/is-your-building-moving.html", "Visits are counted"],
  ["nieuws/votre-batiment-bouge-t-il.html", "Les visites sont comptées"],
  ["nieuws/metselwerk-steen-voor-steen.html", "Bezoeken worden geteld"],
  ["nieuws/masonry-brick-by-brick.html", "Visits are counted"],
  ["nieuws/maconnerie-brique-par-brique.html", "Les visites sont comptées"],
  ["tools/index.html", "Bezoeken worden geteld"],
  ["tools/index-en.html", "Visits are counted"],
  ["tools/index-fr.html", "Les visites sont comptées"],
];

for (const [page, note] of PAGES) {
  test(`${page} carries one analytics beacon and the footer note`, async () => {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    const beacons = [...html.matchAll(/static\.cloudflareinsights\.com\/beacon\.min\.js/g)];
    assert.equal(beacons.length, 1);
    assert.ok(html.includes(`"token": "${TOKEN}"`), "site token");
    assert.ok(html.indexOf("cloudflareinsights") > html.indexOf("</footer>"), "beacon after the content");
    assert.ok(html.indexOf("cloudflareinsights") < html.indexOf("</body>"), "beacon inside the body");
    assert.match(html, new RegExp(`<div class="footer-note">${note}`));
    assert.doesNotMatch(html, /document\.cookie|localStorage/);
  });
}
