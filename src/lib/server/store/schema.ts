import * as v from "valibot";

export const schema = v.object({
  token: v.object({
    accessToken: v.string(),
    refreshToken: v.string(),
    expiresAt: v.string(),
  }),
});
