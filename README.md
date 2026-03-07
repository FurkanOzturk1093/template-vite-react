# DeployWise — Vite + React Template

A production-ready React starter powered by Vite, pre-configured for one-click deployment to your VPS with [DeployWise](https://deploywise.dev).

## What's Included

- React 19 with TypeScript
- Vite for fast dev and builds
- ESLint pre-configured
- Optimized for Nginx static hosting

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy with DeployWise

1. Push this repo to GitHub
2. Open [deploywise.dev/dashboard](https://deploywise.dev/dashboard)
3. Add your VPS → Create a project → Select this repo
4. Click **Deploy**

DeployWise automatically runs `vite build`, serves the `dist/` output via Nginx with SPA routing, gzip compression, and a free SSL certificate.

## Project Structure

```
├── src/
│   ├── App.tsx       # Root component
│   ├── main.tsx      # Entry point
│   └── App.css       # Styles
├── index.html        # HTML template
├── vite.config.ts    # Vite config
└── package.json
```

## Learn More

- [Deploy Vite App to VPS Guide](https://deploywise.dev/guides/deploy-vite-to-vps)
- [DeployWise Docs](https://deploywise.dev/docs)
- [Vite Documentation](https://vite.dev)

---

Deployed with [DeployWise](https://deploywise.dev) — free, open source.
