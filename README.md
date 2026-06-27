# ERMAKSAN Landing Page

Responsive, static landing page implementation inspired by the provided industrial design mockups.

## Files

- `index.html`: page structure and content
- `kurumsal.html`: company profile and quality approach
- `urunler.html`: product groups overview
- `referanslar.html`: references and sectors
- `iletisim.html`: contact page and inquiry form
- `styles.css`: layout, theme, responsive behavior, and animations
- `script.js`: mobile navigation toggle and counter animation
- `assets/`: local SVG logo and illustration assets

## Run

Open `index.html` directly in a browser, or serve the folder with any simple static server.

## Recommended Stack

For this project as it exists today, the simplest path is:

- Keep the site static: HTML, CSS, and small JavaScript
- Use Vite only if you want a nicer local dev server and asset pipeline later
- Skip React unless the site grows into reusable interactive UI, dashboards, or complex state

## Quick Local Preview

For a simple local preview:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Then open `http://localhost:8080`.

## Public Access From Home

For friend-facing access from your home connection, prefer a real web server in front of the files.

Suggested path:

1. Point a domain or subdomain to your home static IP
2. Forward ports `80` and `443` from your router to the machine serving this site
3. Use Caddy to serve the folder with HTTPS

See `Caddyfile.example` for a minimal starting point.
