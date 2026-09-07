import { env } from "$env/dynamic/private";
import { settings } from "./schema";
import * as v from "valibot";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";

import { join } from "node:path";

const dataDirectory = () => env.DATA_DIR || "./data";
const fileName = () => join(dataDirectory(), "settings.txt");

type Settings = v.InferOutput<typeof settings>;

export const getSettings = async () => {
  try {
    const content = await readFile(fileName(), "utf-8");

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

    return v.parse(settings, JSON.parse(decrypted.toString("utf-8")));
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code !== "ENOENT") {
      console.error("Unable to read encrypted settings store; check DATA_DIR and STORE_FILE_ENCRYPTION_KEY.");
    }
    return null;
  }
};

export const saveSettings = async (teamId: string, labelId: string) => {
  const data = {
    teamId,
    labelId,
  } satisfies Settings;
  const key = Buffer.from(env.STORE_FILE_ENCRYPTION_KEY, "base64");
  const iv = randomBytes(12);

  const cipher = createCipheriv("aes-256-gcm", key, iv);

  const plaintext = JSON.stringify(data);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf-8"),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();

  await mkdir(dataDirectory(), { recursive: true, mode: 0o700 });
  await writeFile(
    fileName(),
    [
      iv.toString("base64url"),
      encrypted.toString("base64url"),
      authTag.toString("base64url"),
    ].join("."),
    { mode: 0o600 },
  );
};
