# Dan Cheeseman - Portfolio Site

Live site: [https://danichese.github.io](https://danichese.github.io)

Daniel Cheeseman's personal site — a single-page, static HTML resume covering his background as an Application Support & Service Delivery Analyst.

## Structure

The site is a single self-contained `index.html` at the repository root (inline CSS, Google Fonts and Font Awesome loaded from CDN). There is no build step.

## Local Preview

Open `index.html` directly in a browser, or serve the repository root with any static file server, e.g.:

```bash
python3 -m http.server
```

## Deployment

The repository deploys through GitHub Actions to GitHub Pages (`.github/workflows/deploy.yml`):

1. Push to `main`.
2. The workflow uploads the repository root as a Pages artifact.
3. GitHub Pages publishes it directly — no build step required.
