import { getRequestEvent } from "$app/server";
import { env } from "$env/dynamic/private";
import { decryptUserCookie } from "$lib/utils/cookies";
import type { User } from "$lib/utils/types";
import { publicDecrypt, constants } from "node:crypto";

export const verifyUser = (value: string) => {
  try {
    const decrypted = publicDecrypt(
      {
        key: env.ENCRYPTION_PUBLIC_KEY,
        padding: constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(value, "base64url"),
    );

    return JSON.parse(decrypted.toString()) as User;
  } catch {
    return null;
  }
};

export const getUserFromSession = () => {
  const { cookies } = getRequestEvent();
  const encryptedUser = cookies.get("user") ?? "";
  return decryptUserCookie(encryptedUser);
};

export const isUserAuthenticated = () => {
  return getUserFromSession() !== null;
};
