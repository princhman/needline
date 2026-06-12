import { getToken, saveToken } from "$lib/server/store/actions";
import { refreshLinearToken } from "./auth";
import { GraphQLClient } from "graphql-request";

export const getLinearClient = async () => {
  var token = await getToken();

  if (!token) {
    return null;
  }

  if (new Date(token.expiresAt).getTime() <= Date.now()) {
    const new_token = await refreshLinearToken(token.refreshToken);
    console.log(new_token);
    if (
      !new_token.access_token ||
      !new_token.refresh_token ||
      !new_token.expires_in
    ) {
      throw new Error("Failed to refresh token");
    }
    await saveToken(
      new_token.access_token,
      new_token.refresh_token,
      new_token.expires_in,
    );
    token = await getToken();
  }

  return new GraphQLClient("https://api.linear.app/graphql", {
    headers: {
      Authorization: `Bearer ${token!.accessToken}`,
    },
  });
};

export const isAuthenticated = async () => {
  const client = await getLinearClient();

  if (!client) {
    return false;
  }

  return true;
};
