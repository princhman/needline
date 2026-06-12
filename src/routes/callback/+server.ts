import { redirect, error } from "@sveltejs/kit";
import { exchangeCodeForToken } from "$lib/server/linear/auth";
import { saveToken } from "$lib/server/store/token-actions";

import type { RequestHandler } from "./$types";
import { createOrGetLabel } from "$lib/server/linear/labels";
import { getTeam } from "$lib/server/linear/teams";
import { saveSettings } from "$lib/server/store/settings-actions";

export const GET: RequestHandler = async ({ url }) => {
  const code = url.searchParams.get("code");

  if (!code) {
    throw error(400, "Missing Linear OAuth code");
  }

  const tokens = await exchangeCodeForToken(code);

  if (!tokens.access_token || !tokens.refresh_token || !tokens.expires_in) {
    throw error(500, "Missing token data");
  }

  await saveToken(tokens.access_token, tokens.refresh_token, tokens.expires_in);

  // automatic saving, in future should be update
  try {
    const labelId = await createOrGetLabel();
    const teamId = await getTeam();
    await saveSettings(teamId, labelId);
  } catch (e: any) {
    const msg = e.message;
    throw error(500, msg);
  }

  return redirect(302, "/");
};
