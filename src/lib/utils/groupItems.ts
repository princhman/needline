import type { Item } from "./types";

const STATUS_ORDER = [
  "Started",
  "Unstarted",
  "Planned",
  "Backlog",
  "Triage",
  "Completed",
  "Canceled",
  "Duplicate",
];

export const groupItems = (items: Item[]) => {
  const grouped = items.reduce(
    (acc, item) => {
      const status =
        item.status.type.charAt(0).toUpperCase() + item.status.type.slice(1);
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(item);
      return acc;
    },
    {} as Record<string, Item[]>,
  );

  return Object.entries(grouped)
    .map(
      ([status, items]) =>
        [status, items.toSorted((a, b) => b.needLevel - a.needLevel)] as const,
    )
    .sort(([a], [b]) => {
      const aIndex = STATUS_ORDER.indexOf(a);
      const bIndex = STATUS_ORDER.indexOf(b);
      return aIndex - bIndex;
    });
};
