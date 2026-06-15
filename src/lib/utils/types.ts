import type { getItems } from "$lib/linear/items.remote";
import * as v from "valibot";

export type Item = NonNullable<ReturnType<typeof getItems>["current"]>[number];
export const user = v.object({
  email: v.pipe(
    v.string(),
    v.minLength(3, "The email must be more than 3 characters"),
  ),
  name: v.pipe(
    v.string(),
    v.minLength(1, "The name must be more than 1 character"),
  ),
  company: v.pipe(
    v.string(),
    v.minLength(1, "The company must be more than 1 character"),
  ),
});
export type User = v.InferOutput<typeof user>;
// export type IssueStatusType =
//   | "triage"
//   | "backlog"
//   | "unstarted"
//   | "started"
//   | "completed"
//   | "canceled"
//   | "duplicate";

// export type ProjectStatusType =
//   | "backlog"
//   | "planned"
//   | "started"
//   | "completed"
//   | "canceled";
