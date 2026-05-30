import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const token = sqliteTable("token", {
  accessToken: text().notNull(),
  refreshToken: text().notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});
