# Needline
Minimal public customer portal that integrates directly into Linear (no db in between)

> This project uses experimental `Remote Functions` from Svelte and uses encrypted file to store tokens. (not the most optimal solution, but the simplest I could have come up with)

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/needline?referralCode=4x8-sQ&utm_medium=integration&utm_source=template&utm_campaign=generic)
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
