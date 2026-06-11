# Linear auth
> No linear SDK is used, since it does not return serialisable objects, using GraphQL client is more convenient.
## Process
Using OAuth to have `app=actor`
```mermaid
sequenceDiagram
  autonumber
    participant User
    participant Needline
    participant Linear
    
    User->>Needline: Click "Connect Linear"
    Needline->>Linear: Redirect to Linear OAuth URL*
    Linear-->>User: Ask permission
    User->>Linear: Approves access
    Linear-->>Needline: Redirect back with code in url params
    
    Needline->>Linear: Exchange code for tokens
    Linear-->>Needline: access_token + refresh_token
```
`*` - url is constructed in `src/lib/utils/linearAuthUrl.ts`

## Token Refreshing
This is done in `src/lib/server/linear/auth.ts`. Following Linear Docs.
