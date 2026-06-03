import { env } from "$env/dynamic/private";
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
