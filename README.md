# Needline
Minimal public customer portal that integrates directly into Linear (no db in between)

> This project uses experimental `Remote Functions` from Svelte and uses encrypted file to store tokens. (not the most optimal solution, but the simplest I could have come up with)

[Demo]( https://needline.princhman.com)

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/needline?referralCode=4x8-sQ&utm_medium=integration&utm_source=template&utm_campaign=generic)
## Quick start

With Node.js 22.12+ and Bun 1.3.14 installed:

```sh
bun install --frozen-lockfile
bun run setup
bun run dev
```

Visit `http://localhost:5173` for your customer portal. Follow the [setup and deployment guide](docs/setup.md) to configure Linear, customer sign-in, and persistent hosting. Docker Compose is included.

## Why?
Linear is amazing with what it does, but I do not want to pay more money to get a simple upvoting system. 

_Needline_ makes it super easy to get customer needs and allow other customers to upvote. It brings that feedback directly into linear. 
## How it works?
Any Linear issue or project tagged with `needline` is shown in the portal.

Customers can submit a request with:
- what they need
- why they need it
- urgency

Needline calculates a `needLevel` from the number and urgency of requests, then displays it next to each item.

Authenticated users can submit requests on behalf of their customer company.

## Mental model

Linear remains the source of truth:
- tagged issues/projects are shown publicly
- customer requests are attached back to Linear
- request volume and urgency determine the visible need level

## More detail
- [Setup](docs/setup.md)
- [User auth](docs/user-auth.md)
- [Linear auth](docs/linear-auth.md)

- [Deployment review and next priorities](docs/deployment-review.md)

## Repository structure

- The root app (`src/`) is the self-hosted customer portal. Its Dockerfile and Compose deployment ship only the portal.
- [`site/`](site/README.md) is the independently installed and deployed static marketing website. Self-hosters do not need it.
- [Architecture](docs/architecture.md) explains the separation and dependency rules.
