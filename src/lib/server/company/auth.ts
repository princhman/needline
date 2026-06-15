import { getRequestEvent } from "$app/server";
import { env } from "$env/dynamic/private";
import { decryptUserCookie } from "$lib/utils/cookies";
import * as v from "valibot";
import { user } from "$lib/utils/types";
import { publicDecrypt, constants } from "node:crypto";

export const verifyUser = (value: string) => {
  const decrypted = publicDecrypt(
    {
      key: env.JWT_ENCRYPTION_PUBLIC_KEY,
      padding: constants.RSA_PKCS1_PADDING,
    },
    Buffer.from(value, "base64url"),
  );

  return v.parse(user, JSON.parse(decrypted.toString()));
};

export const getUserFromSession = () => {
  const { cookies } = getRequestEvent();
  const encryptedUser = cookies.get("user") ?? "";
  return decryptUserCookie(encryptedUser);
};

export const isUserAuthenticated = () => {
  return getUserFromSession() !== null;
};
