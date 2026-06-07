import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "../callback/company/$types";

export const GET: RequestHandler = async ({ cookies }) => {
  cookies.delete("user", { path: "/" });
  return redirect(302, "/");
};
