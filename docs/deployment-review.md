# Setup and deployment review

## Improvements included

- The customer portal lives at `/`, including authentication return destinations. The marketing website is an independent static app in `site/`, excluded from the portal Docker build. See [architecture](architecture.md).
- `bun run setup` creates a private `.env` with independent encryption keys and preserves existing configuration on subsequent runs.
- Environment examples now specify real defaults, storage and production origin settings. The guide corrects `BASE_URL` / `COKIE_ENCRYPTION_KEY` to the names actually used by the code.
- The application creates its storage directory on first write and supports `DATA_DIR` for mounted volumes. New store files use owner-only permissions.
- Production startup no longer rebuilds. Docker Compose supplies persistent storage; the container runs as a non-root user.
- Removed database commands pointing at nonexistent Drizzle configuration. Linear is the feedback store.
- Removed logging of refreshed OAuth tokens and added a default public label.

## Next priorities

1. **Protect installation and validate OAuth state.** The current connect URL generates state but the callback does not verify it against a browser session. Add an operator-only setup route, a short-lived state cookie, and callback validation. Refuse replacement of an existing installation except through an authenticated administrative action. Verify rejected/missing/expired state and reconnection behaviour with integration tests.
2. **Replace the customer identity bridge with signed, expiring tokens.** The existing RSA payload is not a JWT, is size-limited, and has no expiry or replay protection. Use a standard signature format with issuer, audience and expiration checks, and a state-bound login redirect. Update both the bridge and Needline together.
3. **Add configuration diagnostics.** Validate URLs, 32-byte decoded encryption keys, and the PEM key on the server; show operators actionable setup progress without exposing credentials. Show setup guidance when the portal integration is unconfigured.
4. **Make team selection explicit.** Offer the teams authorised by Linear and save the selected ID instead of choosing the first result. Validate access before completing setup.
5. **Make installation and token refresh resilient.** Use atomic store replacement, complete token/settings installation together, serialize refreshes, and distinguish missing storage from corruption. A shared transactional store is necessary before supporting multiple replicas.
6. **Automate release checks.** Add CI for frozen dependency installation, type checking and production build, then integration coverage for OAuth callbacks and restart persistence. Pin runtime image digests for more reproducible containers; dependency installation already uses the committed Bun lockfile.

The deployment recipe simplifies running the current application. Live OAuth, customer sign-in, and volume persistence still need verification with the operator’s credentials and hosting environment.
