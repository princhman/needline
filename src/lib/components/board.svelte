<script lang="ts">
    import { getItems } from "$lib/linear/items.remote";
    import { RefreshCcw } from "@lucide/svelte";
    import { type Item as ItemType } from "$lib/utils/types";
    import CreateNeed from "./create-need.svelte";
    import UserAuthStatus from "./user-auth-status.svelte";
    import { groupItems } from "$lib/utils/groupItems";
    import { getStatusColor } from "$lib/utils/statusColor";
    import Item from "./item.svelte";

    let items = getItems();
    let boardItems = $state<ItemType[]>([]);

    $effect(() => {
        if (items.current) {
            boardItems = items.current;
        }
    });

    function updateItem(updatedItem: ItemType) {
        boardItems = boardItems.map((item) =>
            item.id === updatedItem.id ? updatedItem : item,
        );
    }

    let groupedItems = $derived(groupItems(boardItems));

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
        {#each groupedItems as [status, items]}
            <div class="flex flex-col pb-3 gap-1">
                <div class="relative overflow-hidden">
                    <div
                        class={[
                            "absolute inset-0 opacity-50",
                            getStatusColor(status),
                        ]}
                    ></div>
                    <span class="relative text-xl pl-2">{status}</span>
                </div>

                <div class="pl-4 flex flex-col gap-1">
                    {#each items as item}
                        <Item {item} onUpdate={updateItem} />
                    {/each}
                </div>
            </div>
        {/each}
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
