# Anitop Events interactive website

A static, responsive website for Anitop's two customer experiences:

- **Event Planning:** visitors select one or more services/packages and send a prefilled WhatsApp brief.
- **Furniture Catalogue:** visitors filter and select illustrative furniture samples, then request current pricing and availability on WhatsApp.

## Preview

Open `index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html` — semantic content, interactive catalogue cards and enquiry forms
- `styles.css` — responsive teal/ivory/gold design and accessible focus/selection states
- `script.js` — navigation, filtering, multi-select summaries and WhatsApp/email handoff
- `assets/anitop-flyer.jpg` — supplied visual brand reference
- `assets/furniture-living.jpg`, `assets/furniture-dining.jpg` — locally saved illustrative Unsplash sample imagery
- `assets/favicon.svg` — local brand-mark favicon
- `preview-desktop.png`, `preview-mobile.png` — current browser previews

## Important content note

All furniture cards are clearly presented as illustrative inspiration, not confirmed stock. Prices remain **request a quote** and availability must be confirmed with Anitop. Replace sample crops with approved product photography before production if an exact stock catalogue is required.

Illustrative image sources: Unsplash photo IDs `1555041469-a586c61ea9bc` and `1617806118233-18e1de247200`. Review current Unsplash licensing requirements before production publication.

## Contact handoff

WhatsApp/phone: `+234 810 299 2250`  
Email: `omoniyikenny19@gmail.com`

No backend or local storage is used. Submitted information is handed off to the visitor's WhatsApp or email application.