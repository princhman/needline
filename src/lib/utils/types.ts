import type { getItems } from "$lib/linear/items.remote";

export type Item = NonNullable<ReturnType<typeof getItems>["current"]>[number];

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
