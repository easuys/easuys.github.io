"""Add the Cloudflare Web Analytics beacon and a footer note to every page of www.easuys.be (A2 step 0).

Cloudflare Web Analytics sets no cookies and does not track individual visitors, so the pages need no cookie banner;
the footer says how visits are counted. The token identifies the site and is public in the page by design.
Idempotent: a page that already has the beacon is left alone. Usage: python tools/add_analytics.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOKEN = "4cb3c72ee81046a3adba3c316057eeae"
BEACON = ("<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' "
          "data-cf-beacon='{\"token\": \"" + TOKEN + "\"}'></script><!-- End Cloudflare Web Analytics -->")
NOTES = {
    "nl": "Bezoeken worden geteld met Cloudflare Web Analytics, zonder cookies en zonder individuele bezoekers te volgen.",
    "en": "Visits are counted with Cloudflare Web Analytics, without cookies and without tracking individual visitors.",
    "fr": "Les visites sont comptées avec Cloudflare Web Analytics, sans cookies et sans suivre les visiteurs individuellement.",
}
PAGES = {
    "index.html": "nl", "index-en.html": "en", "index-fr.html": "fr",
    "nieuws/beweegt-uw-gebouw.html": "nl", "nieuws/is-your-building-moving.html": "en",
    "nieuws/votre-batiment-bouge-t-il.html": "fr",
    "tools/index.html": "nl", "tools/index-en.html": "en", "tools/index-fr.html": "fr",
}


def main() -> None:
    for rel, lang in PAGES.items():
        p = ROOT / rel
        raw = p.read_bytes().decode("utf-8")
        nl = "\r\n" if "\r\n" in raw else "\n"
        s = raw.replace("\r\n", "\n")
        if "cloudflareinsights.com/beacon.min.js" in s:
            print(f"{rel}: already done")
            continue
        assert s.count("</body>") == 1 and s.count("</footer>") == 1, rel
        footer_end = "        </footer>"
        assert footer_end in s, rel
        s = s.replace(footer_end, f'            <div class="footer-note">{NOTES[lang]}</div>\n{footer_end}', 1)
        s = s.replace("</body>", f"    {BEACON}\n</body>", 1)
        p.write_bytes(s.replace("\n", nl).encode("utf-8"))
        print(f"{rel}: beacon + footer note ({lang})")


if __name__ == "__main__":
    main()
