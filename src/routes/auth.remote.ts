import { getRequestEvent, query } from "$app/server";
import { env } from "$env/dynamic/private";
import { decryptUserCookie } from "$lib/utils/cookies";

export const getUser = query(() => {
  const { cookies } = getRequestEvent();

  const encryptedUser = cookies.get("user") ?? "";
  const user = decryptUserCookie(encryptedUser);
  if (!user) {
    const params = new URLSearchParams({
      redirect: env.BASE_URL + "/callback/company",
    });
    const url = "http://localhost:5174/" + params.toString();
    return { user: null, login_url: url };
  }
  return { user };
});
