<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog";
    import type { Item } from "$lib/utils/types";
    import { ChevronsUp, ChevronUp, Pencil, Trash2 } from "@lucide/svelte";
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import { Label } from "./ui/label";
    import { Checkbox } from "./ui/checkbox";
    import { deleteUpvote, upvoteNeed } from "$lib/linear/need.remote";
    import Textarea from "./ui/textarea/textarea.svelte";
    import type { RemoteFormIssue } from "@sveltejs/kit";

    let { item, onUpdate }: { item: Item; onUpdate: (item: Item) => void } =
        $props();
    let upvoteState = $derived((item.currentCustomerNeed?.priority ?? -1) + 1); // 0 - nothing, 1 - needed, 2 - important

    let updateForm = $derived(upvoteNeed.for(item.id));
    let isUrgentField = $derived(
        updateForm.fields.isUrgent.as(
            "checkbox",
            item.currentCustomerNeed?.priority == 1,
        ),
    );

    let open = $state(false);
    let issues = $state([] as RemoteFormIssue[]);

    function getWhyFromBody(body: string | null) {
        if (!body) return "";

        const markers = [
            "**Company:**",
            "**Email:**",
            "_Submitted via Needline._",
        ];

        const firstMarkerIndex = markers
            .map((marker) => body.indexOf(marker))
            .filter((index) => index !== -1)
            .sort((a, b) => a - b)[0];

        return body.slice(0, firstMarkerIndex ?? body.length).trim();
    }

    async function deleteVote() {
        if (!item.currentCustomerNeed) return;
        await deleteUpvote(item.currentCustomerNeed?.id);
        open = false;

        const updatedItem = {
            ...item,
            currentCustomerNeed: null,
            needLevel:
                item.needLevel - (item.currentCustomerNeed?.priority + 1),
        };

        onUpdate(updatedItem);
    }
</script>

<Dialog.Root bind:open>
    <Dialog.Trigger>
        <Button
            size="icon"
            variant="outline"
            class="group relative hover:accent-accent"
            aria-label={item.currentCustomerNeed ? "Edit need" : "Upvote"}
        >
            <span
                class={[
                    "inline-flex size-4 items-center justify-center",
                    upvoteState === 1 && "text-yellow-500",
                    upvoteState === 2 && "text-red-600",
                    item.currentCustomerNeed &&
                        "transition-opacity group-hover:opacity-0",
                ]}
            >
                {#if upvoteState === 2}
                    <ChevronsUp />
                {:else}
                    <ChevronUp />
                {/if}
            </span>
            {#if item.currentCustomerNeed}
                <span
                    class="absolute inset-0 inline-flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                >
                    <Pencil class="size-4" />
                </span>
            {/if}
        </Button>
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            {#if item.currentCustomerNeed}
                Updating vote for {item.title}
            {:else}
                Upvoting {item.title}
            {/if}
        </Dialog.Header>
        <form
            {...updateForm.enhance(async (form) => {
                const ok = await form.submit().updates();
                const result = updateForm.result;

                if (ok && result) {
                    open = false;
                    const updatedItem = {
                        ...item,
                        needLevel: item.needLevel + result.needLevelDelta,
                        currentCustomerNeed: {
                            id: result.id,
                            priority: result.priority,
                            body: result.body,
                        },
                    };
                    onUpdate(updatedItem);
                } else {
                    issues = form.fields.allIssues() ?? [];
                }
            })}
        >
            <div class="grid gap-4">
                <input type="hidden" name="itemId" value={item.id} />
                <input type="hidden" name="itemType" value={item.itemType} />
                {#if item.currentCustomerNeed}
                    <input
                        type="hidden"
                        name="initialPriority"
                        value={item.currentCustomerNeed.priority}
                    />
                    <input
                        type="hidden"
                        name="customerNeedId"
                        value={item.currentCustomerNeed.id}
                    />
                {/if}

                <div class="grid gap-3">
                    <Label for="why">Why?</Label>
                    <Textarea
                        id="why"
                        {...updateForm.fields.why.as(
                            "text",
                            getWhyFromBody(
                                item.currentCustomerNeed?.body ?? "",
                            ),
                        )}
                        placeholder="Why is it important?"
                        selectEndOnFocus={true}
                    />
                </div>
                <div class="flex items-center gap-3">
                    <Checkbox
                        name={isUrgentField.name}
                        value={isUrgentField.value}
                        checked={isUrgentField.checked}
                        aria-invalid={isUrgentField["aria-invalid"]}
                        id="urgency"
                    />
                    <Label for="urgency">Urgent</Label>
                </div>
            </div>

            {#if issues.length > 0}
                <div class="text-sm text-red-600">
                    <Label>Issues</Label>
                    <ul>
                        {#each issues as issue}
                            <li>{issue.message}</li>
                        {/each}
                    </ul>
                </div>
            {/if}

            <Dialog.Footer class="pt-4">
                <!-- open in if to prevent delete button flicker -->
                {#if open && item.currentCustomerNeed}
                    <Button
                        variant="destructive"
                        size="icon"
                        class="sm:mr-auto"
                        onclick={deleteVote}
                    >
                        <Trash2 />
                    </Button>
                {/if}
                <Dialog.Close
                    type="button"
                    class={buttonVariants({ variant: "outline" })}
                >
                    Cancel
                </Dialog.Close>
                <Button type="submit" disabled={updateForm.pending > 0}>
                    {@const msg = item.currentCustomerNeed ? "Updat" : "Upvot"}
                    {#if updateForm.pending}{msg}ing...{:else}{msg}e{/if}</Button
                >
            </Dialog.Footer>
        </form>
    </Dialog.Content>
</Dialog.Root>
