<script lang="ts">
    import { getItems } from "$lib/linear/items.remote";
    import { RefreshCcw } from "@lucide/svelte";
    import Item from "./item.svelte";
    import CreateNeed from "./create-need.svelte";
    import UserAuthStatus from "./user-auth-status.svelte";

    const items = getItems();

    let isSpinning = $state(false);
    let shouldStopAfterIteration = $state(false);

    $effect(() => {
        if (items.loading) {
            isSpinning = true;
            shouldStopAfterIteration = false;
        } else if (isSpinning) {
            shouldStopAfterIteration = true;
        }
    });

    function onSpinIteration() {
        if (shouldStopAfterIteration) {
            isSpinning = false;
            shouldStopAfterIteration = false;
        }
    }
</script>

<div class="flex flex-col w-full gap-3 py-8">
    <div class="flex w-full justify-between">
        <span class="text-2xl">Requests</span>
        <div class="flex gap-2 items-center">
            <button
                class="refresh-button inline-flex size-8 items-center justify-center border p-0 leanding-none"
                onclick={() => items.refresh()}
                disabled={items.loading}
            >
                <span
                    class="refresh-icon inline-flex size-4 items-center justify-center"
                    class:loading={isSpinning}
                    onanimationiteration={onSpinIteration}
                >
                    <RefreshCcw />
                </span>
            </button>
            <CreateNeed />
            <UserAuthStatus />
        </div>
    </div>
    <div class="flex flex-col gap-1">
        {#if items.current}
            {#each items.current as item}
                <Item {item} />
            {/each}
        {:else if items.loading}
            <p>Loading...</p>
        {:else if items.error}
            <p>Failed to load issues</p>
        {/if}
    </div>
</div>

<style>
    .refresh-button:active:not(:disabled) {
        transform: scale(0.95);
    }

    .refresh-icon.loading {
        animation: refresh-spin 400ms linear infinite;
        opacity: 0.6;
    }

    @keyframes refresh-spin {
        to {
            transform: rotate(360deg);
        }
    }

    .refresh-button {
        transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .refresh-icon {
        transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    @media (hover: hover) and (pointer: fine) {
        .refresh-button:hover:not(:disabled) .refresh-icon {
            transform: rotate(-24deg);
        }
    }
</style>
