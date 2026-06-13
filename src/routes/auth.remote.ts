import { getRequestEvent, query } from "$app/server";
import { env } from "$env/dynamic/private";
import { env as envPublic } from "$env/dynamic/public";
import { decryptUserCookie } from "$lib/utils/cookies";

export const getUser = query(() => {
  const { cookies } = getRequestEvent();

  const encryptedUser = cookies.get("user") ?? "";
  const user = decryptUserCookie(encryptedUser);
  if (!user) {
    const params = new URLSearchParams({
      callback_url: envPublic.PUBLIC_BASE_URL + "/callback/company",
    });
    const url = env.AUTH_URL + params.toString();
    return { user: null, login_url: url };
  }
  return { user };
});
