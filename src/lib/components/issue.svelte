<script lang="ts">
    import { getIssues } from "$lib/linear/issues.remote";
    import { ChevronsUp, ChevronUp } from "@lucide/svelte";

    type Issue = NonNullable<ReturnType<typeof getIssues>["current"]>[number];

    const { issue }: { issue: Issue } = $props();

    let upvoteState = $derived((issue.currentCustomerNeedPriority ?? -1) + 1); // 0 - nothing, 1 - needed, 2 - important

    // I need to derive if the company upvoted and created customer request
    // Then when they want to upvote they have a popover where they can enter the reason why they want it and make it urgent
    //
    // upvote count would be derived by number of normal customer requests + 2 * urgent requests
</script>

<div class="flex border min-w-full">
    <div class="flex px-4 py-3 justify-between w-full items-center">
        <span>{issue.title}</span>
        <div class="flex items-center gap-2">
            <span>
                {issue.needLevel}
            </span>
            <button
                class="inline-flex active:scale-95 transition-transform size-8 items-center justify-center border p-0 leading-none"
            >
                <span
                    class={[
                        "inline-flex size-4 items-center justify-center",
                        upvoteState === 1 && "text-yellow-500",
                        upvoteState === 2 && "text-red-600",
                    ]}
                >
                    {#if upvoteState === 2}
                        <ChevronsUp />
                    {:else}
                        <ChevronUp />
                    {/if}
                </span>
            </button>
        </div>
    </div>
</div>
