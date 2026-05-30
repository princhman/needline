import { isAuthenticated } from "$lib/server/linear/client";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const [authenticated] = await Promise.all([isAuthenticated()]);

  return {
    authenticated,
  };
};
