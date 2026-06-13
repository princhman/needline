import { env } from "$env/dynamic/private";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { schema } from "./schema";
import * as v from "valibot";
import { readFile, writeFile } from "node:fs/promises";

const FILE_NAME = "./data/store.txt";

const getData = async () => {
  try {
    const content = await readFile(FILE_NAME, "utf-8");

    const [ivBase64, encryptedBase64, authTagBase64] = content.split(".");
    if (!ivBase64 || !encryptedBase64 || !authTagBase64) return null;

    const key = Buffer.from(env.STORE_FILE_ENCRYPTION_KEY, "base64");
    const iv = Buffer.from(ivBase64, "base64url");
    const encrypted = Buffer.from(encryptedBase64, "base64url");
    const authTag = Buffer.from(authTagBase64, "base64url");

    const decipher = createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);

    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);

    return v.parse(schema, JSON.parse(decrypted.toString("utf-8")));
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
};

export const getToken = async () => {
  const data = await getData();
  return data?.token;
};

export const saveToken = async (
  accessToken: string,
  refreshToken: string,
  expiresInSeconds: number,
) => {
  const expiresAt = new Date(
    Date.now() + expiresInSeconds * 1000,
  ).toISOString();
  const data = v.parse(schema, {
    token: { accessToken, refreshToken, expiresAt },
  });
  const key = Buffer.from(env.STORE_FILE_ENCRYPTION_KEY, "base64");
  const iv = randomBytes(12);

  const cipher = createCipheriv("aes-256-gcm", key, iv);

  const plaintext = JSON.stringify(data);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf-8"),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();

  await writeFile(
    FILE_NAME,
    [
      iv.toString("base64url"),
      encrypted.toString("base64url"),
      authTag.toString("base64url"),
    ].join("."),
  );
};
