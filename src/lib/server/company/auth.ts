import { getRequestEvent } from "$app/server";
import { env } from "$env/dynamic/private";
import { decryptUserCookie } from "$lib/utils/cookies";
import { publicDecrypt, constants } from "node:crypto";

export type User = {
  email: string;
  name: string;
  company: string;
};

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
