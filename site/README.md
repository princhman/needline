# Needline website

An independent static marketing app. It explains Needline and links to its deployment guide and hosted demo. It has no Linear integration, authentication, secrets, or server runtime. Portal users do not need to install or deploy this app.

## Develop

From this directory, with Node.js 22.12+ and Bun 1.3.14:

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:5174. The portal’s development server uses port 5173, so both can run together.

For a remote machine, forward the website port from your computer:

```sh
ssh -L 5174:localhost:5174 your-user@remote-machine
```

Then visit http://localhost:5174 on your computer.

## Deploy independently

Configure a static host with:

- Project root: `site`
- Install: `bun install --frozen-lockfile`
- Build: `bun run build`
- Publish directory: `dist`
- Environment variables: none

Or upload the contents of `site/dist/` to any static web server after building locally. No SPA fallback is needed. `bun run preview` serves a local build at http://localhost:4174.

The root Dockerfile and Compose configuration deploy only the portal. This directory has its own package manifest and lockfile, with no imports from the portal and no root workspace dependency.

## Maintain the design

`style.css` follows the portal’s Inter typography, dark grey palette, square controls and thin borders. The board preview in `index.html` is semantic HTML with selectable text and responsive rows, matching the portal's toolbar, status groups and upvote controls. Its styles are scoped to `board-*` classes. Preview actions link to the live demo; the website never submits feedback itself. Keep this markup and its styles aligned with the portal when its UI changes. `public/logo.svg` is the project’s existing logo.

The demo and setup destinations are explicit links in `index.html`; change them there if the project’s hosting or repository changes.
