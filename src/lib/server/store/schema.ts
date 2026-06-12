import * as v from "valibot";

export const token = v.object({
  accessToken: v.string(),
  refreshToken: v.string(),
  expiresAt: v.string(),
});

export const settings = v.object({
  labelId: v.string(),
  teamId: v.string(),
});
