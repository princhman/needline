import type { getIssues } from "$lib/linear/issues.remote";

export type Issue = NonNullable<
  ReturnType<typeof getIssues>["current"]
>[number];
