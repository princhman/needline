<script lang="ts">
    import type { Item } from "$lib/utils/types";
    import Upvote from "./upvote.svelte";

    let { item, onUpdate }: { item: Item; onUpdate: (item: Item) => void } =
        $props();
</script>

<div class="flex min-w-full border hover:bg-accent">
    <div class="flex px-4 py-1 justify-between w-full items-center text-sm">
        <span>{item.title}</span>
        <div class="flex items-center gap-2">
            <span>
                {item.needLevel}
            </span>
            <Upvote {item} {onUpdate} />
        </div>
    </div>
</div>
