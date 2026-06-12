<script lang="ts">
    import { createNeed } from "$lib/linear/need.remote";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Input from "./ui/input/input.svelte";
    import Checkbox from "./ui/checkbox/checkbox.svelte";
    import Label from "./ui/label/label.svelte";
    import { getItems } from "$lib/linear/items.remote";
    import Textarea from "./ui/textarea/textarea.svelte";
    import type { PageData } from "../../routes/$types";
    import NotAuthenticated from "./not-authenticated.svelte";

    const { data }: { data: PageData } = $props();
    const isUrgentField = createNeed.fields.isUrgent.as("checkbox");
    let open = $state(false);

    const items = getItems();
</script>

<Dialog.Root bind:open>
    <Dialog.Trigger
        type="button"
        class={buttonVariants({ variant: "outline" })}
    >
        Request
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-106.25">
        {#if !data.userAuthenticated}
            <NotAuthenticated />
        {:else}
            <form
                {...createNeed.enhance(async (form) => {
                    const ok = await form.submit().updates();

                    if (ok && createNeed.result) {
                        items.set([
                            createNeed.result,
                            ...(items.current ?? []),
                        ]);
                    }
                    form.element.reset();
                    open = false;
                })}
            >
                <Dialog.Header>
                    <Dialog.Title>Create new Need</Dialog.Title>
                    <Dialog.Description
                        >Describe what you need and why you need it</Dialog.Description
                    >
                </Dialog.Header>
                <div class="grid gap-4">
                    <div class="grid gap-3">
                        <Label for="what">What?</Label>
                        <Input
                            {...createNeed.fields.what.as("text")}
                            id="what"
                            name="what"
                            placeholder="What do you need?"
                        />
                    </div>
                    <div class="grid gap-3">
                        <Label for="why">Why?</Label>
                        <Textarea
                            {...createNeed.fields.why.as("text")}
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
                    <Button type="submit" disabled={createNeed.pending > 0}
                        >{#if createNeed.pending}Creating...{:else}Create{/if}</Button
                    >
                </Dialog.Footer>
            </form>
        {/if}
    </Dialog.Content>
</Dialog.Root>
