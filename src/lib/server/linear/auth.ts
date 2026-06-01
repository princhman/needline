import { env } from "$env/dynamic/private";
import { env as publicEnv } from "$env/dynamic/public";

export const exchangeCodeForToken = async (code: string) => {
  const response = await fetch("https://api.linear.app/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: publicEnv.PUBLIC_REDIRECT_URI,
      client_id: publicEnv.PUBLIC_CLIENT_ID,
      client_secret: env.CLIENT_TOKEN,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error_description ?? "Failed to exchange Linear OAuth code",
    );
  }

  return data;
};

export const refreshLinearToken = async (refreshToken: string) => {
  const response = await fetch("https://api.linear.app/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      grant_type: "refresh_token",
      client_secret: env.CLIENT_TOKEN,
      client_id: publicEnv.PUBLIC_CLIENT_ID,
    }),
  });

  return await response.json();
};
