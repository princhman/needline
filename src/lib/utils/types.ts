import type { getItems } from "$lib/linear/items.remote";

export type Item = NonNullable<ReturnType<typeof getItems>["current"]>[number];
