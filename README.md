# Anitop Events interactive website

A static, responsive website for Anitop's two customer experiences:

- **Event Planning:** visitors select one or more services and send a prefilled WhatsApp brief.
- **Furniture Catalogue:** visitors filter and select illustrative furniture references, then request current pricing and availability on WhatsApp.

## Preview

Open `index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html` — semantic content, 34 interactive furniture cards and enquiry forms
- `styles.css` — responsive teal/ivory/gold design and accessible focus/selection states
- `script.js` — navigation, filtering, multi-select summaries and WhatsApp/email handoff
- `assets/products/` — 34 optimized catalogue reference images
- `assets/anitop-flyer.jpg` — supplied visual brand reference
- `assets/favicon.svg` — local brand-mark favicon
- `preview-desktop.png`, `preview-mobile.png` — current browser previews

## Catalogue status

All furniture cards are presented as reference or submitted-reference designs, not confirmed stock. Prices remain **Request a quote**, and Anitop must confirm current finish, price and availability before an order.

The October 2026 final submission contained 32 images. Twenty-six distinct designs were added after omitting five colour/design duplicates and one design already represented in the catalogue. Story interface areas were removed with deterministic crops; the furniture itself was not regenerated or altered.

## Contact handoff

WhatsApp/phone: `+234 810 299 2250`  
Email: `omoniyikenny19@gmail.com`

No backend or local storage is used. Submitted information is handed off to the visitor's WhatsApp or email application.
