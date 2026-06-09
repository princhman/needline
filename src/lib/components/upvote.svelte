<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog";
    import type { Issue } from "$lib/utils/types";
    import { ChevronsUp, ChevronUp, Pencil } from "@lucide/svelte";
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import { Label } from "./ui/label";
    import { Input } from "./ui/input";
    import { Checkbox } from "./ui/checkbox";
    import { upvoteNeed } from "$lib/linear/need.remote";
    import Textarea from "./ui/textarea/textarea.svelte";

    let { issue = $bindable() }: { issue: Issue } = $props();
    let upvoteState = $derived((issue.currentCustomerNeed.priority ?? -1) + 1); // 0 - nothing, 1 - needed, 2 - important
    const isUrgentField = upvoteNeed.fields.isUrgent.as("checkbox");

    let open = $state(false);

    // if already upvoted allow to edit the upvote?
    // when hover over it show pencil which would open the menu to edit the reason and urgency i guess
</script>

<Dialog.Root bind:open>
    <Dialog.Trigger>
        <Button
            size="icon"
            variant="outline"
            class="group relative hover:accent-accent"
            aria-label={issue.currentCustomerNeed ? "Edit need" : "Upvote"}
        >
            <span
                class={[
                    "inline-flex size-4 items-center justify-center",
                    upvoteState === 1 && "text-yellow-500",
                    upvoteState === 2 && "text-red-600",
                    issue.currentCustomerNeed &&
                        "transition-opacity group-hover:opacity-0",
                ]}
            >
                {#if upvoteState === 2}
                    <ChevronsUp />
                {:else}
                    <ChevronUp />
                {/if}
            </span>
            {#if issue.currentCustomerNeed}
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
            Upvoting {issue.title}
        </Dialog.Header>
        <form
            {...upvoteNeed.enhance(async (form) => {
                const ok = await form.submit().updates();
                const result = upvoteNeed.result;

                if (ok && result) {
                    issue = {
                        ...issue,
                        needLevel: issue.needLevel + result.priorityDelta + 1,
                        currentCustomerNeed: {
                            id: result.id,
                            priority: result.priorityDelta,
                            body: result.body,
                        },
                    };
                }

                open = false;
            })}
        >
            <div class="grid gap-4">
                <input type="hidden" name="issueId" value={issue.id} />
                <div class="grid gap-3">
                    <Label for="why">Why?</Label>
                    <Textarea
                        id="why"
                        name="why"
                        placeholder="Why is it important?"
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
            <Dialog.Footer>
                <Dialog.Close
                    type="button"
                    class={buttonVariants({ variant: "outline" })}
                >
                    Cancel
                </Dialog.Close>
                <Button type="submit" disabled={upvoteNeed.pending > 0}
                    >{#if upvoteNeed.pending}Upvoting...{:else}Upvote{/if}</Button
                >
            </Dialog.Footer>
        </form>
    </Dialog.Content>
</Dialog.Root>
