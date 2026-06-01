import { LinearClient } from "@linear/sdk";
import { getToken, saveToken } from "$lib/server/db/token";
import { refreshLinearToken } from "./auth";

export const getLinearClient = async () => {
  var token = getToken();

  if (!token) {
    return null;
  }

  if (token.expiresAt.getTime() <= Date.now()) {
    const new_token = await refreshLinearToken(token.refreshToken);
    console.log(new_token);
    if (
      !new_token.access_token ||
      !new_token.refresh_token ||
      !new_token.expires_in
    ) {
      throw new Error("Failed to refresh token");
    }
    saveToken(
      new_token.access_token,
      new_token.refresh_token,
      new_token.expires_in,
    );
    token = new_token;
  }

  return new LinearClient({
    accessToken: token!.accessToken,
  });
};

export const isAuthenticated = async () => {
  const client = await getLinearClient();

  if (!client) {
    return false;
  }

  try {
    await client.viewer;
    return true;
  } catch {
    return false;
  }
};
