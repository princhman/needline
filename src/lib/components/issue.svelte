<script lang="ts">
    import type { Issue } from "$lib/utils/types";
    import Upvote from "./upvote.svelte";

    let { issue = $bindable() }: { issue: Issue } = $props();

    // I need to derive if the company upvoted and created customer request
    // Then when they want to upvote they have a popover where they can enter the reason why they want it and make it urgent
    //
    // upvote count would be derived by number of normal customer requests + 2 * urgent requests
</script>

<div class="flex min-w-full border hover:bg-accent">
    <div class="flex px-4 py-1 justify-between w-full items-center text-sm">
        <span>{issue.title}</span>
        <div class="flex items-center gap-2">
            <span>
                {issue.needLevel}
            </span>
            <Upvote bind:issue />
        </div>
    </div>
</div>
