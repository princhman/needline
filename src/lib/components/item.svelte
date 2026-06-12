<script lang="ts">
    import type { Item } from "$lib/utils/types";
    import type { PageData } from "../../routes/$types";
    import Upvote from "./upvote.svelte";

    let {
        item,
        onUpdate,
        data,
    }: { item: Item; onUpdate: (item: Item) => void; data: PageData } =
        $props();
</script>

<div class="flex min-w-full border hover:bg-accent">
    <div class="flex px-4 py-1 justify-between w-full items-center text-sm">
        <span>{item.title}</span>
        <div class="flex items-center gap-2">
            <span>
                {item.needLevel}
            </span>
            <Upvote {item} {onUpdate} {data} />
        </div>
    </div>
</div>
