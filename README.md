# Needline
Minimal public customer portal that integrates directly into Linear (no db in between)

> This project uses experimental `Remote Functions` from Svelte!
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
- [Auth](docs/auth.md)
- [Upvoting](docs/upvoting.md)
- [Linear auth](docs/linear-auth.md)
