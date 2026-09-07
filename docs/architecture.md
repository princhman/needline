# Application architecture

Needline has two independently deployed apps in one repository. The customer portal remains at the root to preserve existing self-hosting commands, callback URLs and deployment integrations.

| App | Source | Interface for operators | Output |
| --- | --- | --- | --- |
| Customer portal | Root `src/`, `package.json`, `bun.lock` | Root setup, build and start commands; Linear/customer auth environment; persistent data directory | SvelteKit Node server in `build/`, board at `/` |
| Project website | `site/`, its own package manifest and lockfile | Static build; no environment or credentials | Static files in `site/dist/` |

## Dependency rules

Neither app imports from the other. Installing or building the portal does not install or build the website. The portal Docker context explicitly excludes `site/`. Each app owns its routes and assets; authentication callbacks return to the portal root and contain no marketing navigation.

The deployment seam is the app directory and its own build commands. There is no runtime mode flag, shared root layout, workspace-wide install, or marketing route on a customer's portal.

The website renders a small HTML/CSS board preview with sample rows, matching the portal's layout. Preview controls link to the hosted demo; it does not import remote functions or submit feedback. This keeps Linear access and customer sessions inside the portal module. The small amount of website typography and colour CSS is independent; a shared UI package would add installation coupling without behaviour to justify it today.

## Working locally

Run `bun run dev` at the root for the portal on port 5173. Independently install dependencies and run `bun run dev` inside `site/` for the website on port 5174. Root production commands continue to deploy only the portal.

## Verification

- Portal: root `bun run check` and `bun run build`; start it and verify `/` renders setup or the connected board.
- Website: `cd site`, `bun install --frozen-lockfile`, `bun run build`; serve `dist` and verify the board preview, links and responsive layout without portal credentials.
- Ensure the website build contains no remote-function endpoints or server bundle, and the portal build contains no marketing copy.

See [setup](setup.md) for portal deployment and [website instructions](../site/README.md) for independent static deployment. Authentication and storage follow-ups remain in the [deployment review](deployment-review.md).
