import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { env } from "$env/dynamic/private";
import type { User } from "$lib/utils/types";

export function encryptUserCookie(user: User) {
  const key = Buffer.from(env.COOKIE_ENCRYPTION_KEY, "base64");
  const iv = randomBytes(12);

  const cipher = createCipheriv("aes-256-gcm", key, iv);

  const plaintext = JSON.stringify(user);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf-8"),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();

  return [
    iv.toString("base64url"),
    encrypted.toString("base64url"),
    authTag.toString("base64url"),
  ].join(".");
}

export function decryptUserCookie(value: string): User | null {
  try {
    const [ivBase64, encryptedBase64, authTagBase64] = value.split(".");

    if (!ivBase64 || !encryptedBase64 || !authTagBase64) return null;

    const key = Buffer.from(env.COOKIE_ENCRYPTION_KEY, "base64");

    const iv = Buffer.from(ivBase64, "base64url");
    const encrypted = Buffer.from(encryptedBase64, "base64url");
    const authTag = Buffer.from(authTagBase64, "base64url");

    const decipher = createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);

    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);

    return JSON.parse(decrypted.toString("utf-8")) as User;
  } catch {
    return null;
  }
}
