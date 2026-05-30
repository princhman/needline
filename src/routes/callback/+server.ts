import { redirect, error } from "@sveltejs/kit";
import { exchangeCodeForToken } from "$lib/server/linear/auth";
import { saveToken } from "$lib/server/db/token";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const code = url.searchParams.get("code");

  if (!code) {
    throw error(400, "Missing Linear OAuth code");
  }

  const tokens = await exchangeCodeForToken(code);

  if (!tokens.access_token || !tokens.refresh_token || !tokens.expires_in) {
    throw error(500, "Missing token data");
  }

  saveToken(tokens.access_token, tokens.refresh_token, tokens.expires_in);

  return redirect(302, "/");
};
