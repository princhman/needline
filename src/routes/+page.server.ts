import { isUserAuthenticated } from "$lib/server/company/auth";
import { isLinearReady } from "$lib/server/linear/client";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const [linearReady, userAuthenticated] = await Promise.all([
    isLinearReady(),
    isUserAuthenticated(),
  ]);

  return {
    linearReady,
    userAuthenticated,
  };
};
