import { db } from "./client";
import { token } from "./schema";

export const getToken = () => db.select().from(token).limit(1).get();

export const saveToken = (
  accessToken: string,
  refreshToken: string,
  expiresInSeconds: number,
) => {
  const expiresAt = new Date(Date.now() + expiresInSeconds * 1000);

  return db.transaction((tx) => {
    tx.delete(token).run();

    return tx
      .insert(token)
      .values({
        accessToken,
        refreshToken,
        expiresAt,
      })
      .run();
  });
};

export const clearToken = () => db.delete(token).run();
