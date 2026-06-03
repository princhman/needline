import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "../$types";
import { verifyUser } from "$lib/server/company/auth";
import { encryptUserCookie } from "$lib/utils/cookies";
import { dev } from "$app/environment";

export const GET: RequestHandler = async ({ url, cookies }) => {
  const encryptedUser = url.searchParams.get("user");

  if (!encryptedUser) {
    throw error(400, "User param is required");
  }

  const user = verifyUser(encryptedUser);

  if (!user) {
    throw error(400, "Invalid user param");
  }

  const encryptedUserCookie = encryptUserCookie(user);

  cookies.set("user", encryptedUserCookie, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: !dev,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  throw redirect(302, "/");
};
