# Set up Needline

Needline is a SvelteKit server serving the customer portal at `/`. Linear stores feedback; two encrypted files store the installation’s tokens and settings. Run one application instance with persistent storage.

## 1. Run locally

Install Node.js 22.12+ (24 recommended) and Bun 1.3.14, then:

```sh
git clone https://github.com/princhman/needline.git
cd needline
bun install --frozen-lockfile
bun run setup
bun run dev
```

Open http://localhost:5173. `setup` creates `.env`, generates two independent encryption keys, and creates `data/`. Re-running it preserves an existing `.env` and its keys.

## 2. Connect Linear

Create an OAuth application in Linear’s API settings. Set its redirect URI to `http://localhost:5173/callback` for development, or `https://your-domain/callback` for production. Needline uses the authorization-code flow with `actor=app` and requests `read,write,customer:read,customer:write` scopes; configure customer access for the application as needed. See [Linear OAuth documentation](https://linear.app/developers/oauth-2-0-authentication) and [app actor authorization](https://linear.app/developers/oauth-actor-authorization).

Set these in `.env` (or your host’s environment settings):

| Variable | Value |
| --- | --- |
| `PUBLIC_BASE_URL` | The portal origin, without a trailing slash |
| `ORIGIN` | The same origin; required for production form/remote-function requests |
| `PUBLIC_CLIENT_ID` | Linear OAuth client ID |
| `CLIENT_TOKEN` | Linear OAuth client secret |
| `LABEL_NAME` | Must be `needline`; custom public labels are not currently supported |
| `COOKIE_ENCRYPTION_KEY` | Generated base64-encoded 32-byte key |
| `STORE_FILE_ENCRYPTION_KEY` | A different generated base64-encoded 32-byte key |
| `DATA_DIR` | Writable persistent directory; defaults to `./data` |

Restart after changing configuration. Open `/`, choose **Connect Linear**, and approve the intended workspace and teams. Needline currently selects the first available team for new requests. Label an issue or project with `needline` and confirm it appears publicly. Keep `LABEL_NAME=needline`: the board query currently filters for this name independently of the setting.

## 3. Enable customer requests

Public browsing needs no customer login. Submitting requests and upvotes requires your own customer sign-in bridge:

- Set `AUTH_URL` to your application’s sign-in bridge URL.
- Set `JWT_ENCRYPTION_PUBLIC_KEY` to its RSA public key in PEM format. In `.env`, enclose the complete multiline PEM in double quotes.
- Implement the redirect contract in [customer authentication](user-auth.md). The matching private key belongs only on your application’s server.

Despite its environment variable name, the current identity payload is **not a JWT**. It uses RSA `privateEncrypt` / `publicDecrypt`, with no built-in expiry. See [deployment review](deployment-review.md) for the authentication changes to prioritise before a broad public rollout.

## 4. Deploy

### Docker Compose

After running `bun run setup` (or `node scripts/setup.mjs`) and filling `.env`, set `PUBLIC_BASE_URL` and `ORIGIN` to your HTTPS domain. Update the Linear redirect URI to match, then run:

```sh
docker compose up -d --build
docker compose logs -f needline
```

The server listens on port 3000. Put an HTTPS reverse proxy in front of it. For a local production-build smoke test, use `http://localhost:3000` for both origins. Customer session cookies require HTTPS outside development.

The named `needline-data` volume preserves tokens/settings across container replacements. Back up the volume and encryption keys together. `docker compose down -v` deletes that storage. Keep one replica: the file store is not designed for concurrent writers.

### Railway or another persistent Node host

The [existing Railway template](https://railway.com/deploy/needline?referralCode=4x8-sQ&utm_medium=integration&utm_source=template&utm_campaign=generic) is a starting point; review its configuration against this guide.

1. Use the included Dockerfile, or install with `bun install --frozen-lockfile` and build with `bun run build`.
2. Start with `bun run start` (runs the built Node server without rebuilding).
3. Set all environment variables above, plus the customer authentication values when enabling requests.
4. Mount a persistent volume at `/app/data` and set `DATA_DIR=/app/data`. Ensure the process user can write to it.
5. Set `PUBLIC_BASE_URL` and `ORIGIN` to your public HTTPS origin. Let the platform set `PORT` and route traffic to it.
6. Connect Linear at `/`, then restart the service and verify the connection survives.

For a plain server, `bun run build` followed by `bun run start` loads a local `.env` if it exists. See [SvelteKit’s Node adapter documentation](https://svelte.dev/docs/kit/adapter-node) for origin and proxy configuration. Ephemeral/serverless filesystems are unsuitable for the current token store.

## Verify and troubleshoot

```sh
bun run check
bun run build
```

- **No requests:** confirm `LABEL_NAME=needline`, that the issue or project has the `needline` label, and that the connected application can access the relevant team.
- **Connection disappears after redeploy:** check the persistent mount, `DATA_DIR`, and that the store key has not changed.
- **Cross-site request errors:** `ORIGIN` must match the browser’s origin, including the scheme and port.
- **OAuth redirect error:** the registered URI must exactly match `PUBLIC_BASE_URL` + `/callback`.
- **Customer sign-in fails:** check the bridge’s base64url payload and matching PEM key; see the authentication guide.

## Project website

The marketing website is a separate static app in [`site/`](../site/README.md). It is not installed, built, or deployed by any command in this guide. Self-hosters only need the portal.
