import { LinearClient } from "@linear/sdk";
import { getToken } from "$lib/server/db/token";

export const getLinearClient = () => {
  const token = getToken();

  if (!token?.accessToken) {
    return null;
  }

  return new LinearClient({
    accessToken: token.accessToken,
  });
};

export const isAuthenticated = async () => {
  const client = getLinearClient();

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
