import { env } from "$env/dynamic/public";

const params = new URLSearchParams({
  client_id: env.PUBLIC_CLIENT_ID!,
  redirect_uri: env.PUBLIC_REDIRECT_URI,
  response_type: "code",
  scope: "read,write,customer:read,customer:write",
  state: crypto.randomUUID(),
  actor: "app",
});

export const url = `https://linear.app/oauth/authorize?${params.toString()}`;
