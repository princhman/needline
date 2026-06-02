<script lang="ts">
    import { createNeed } from "$lib/linear/need.remote";
</script>

<form
    {...createNeed.enhance(async (form) => {
        if (await form.submit()) {
            form.element.reset();
        }
    })}
>
    <span>New request form:</span>

    <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
            <label for="what">What?</label>
            <input
                {...createNeed.fields.what.as("text")}
                id="what"
                class="border border-gray-700 rounded-sm px-2"
            />
        </div>

        <div class="flex items-center gap-2">
            <label for="why">Why?</label>
            <input
                {...createNeed.fields.why.as("text")}
                id="why"
                class="border border-gray-700 rounded-sm px-2"
            />
        </div>

        <div class="flex items-center gap-2">
            <label for="urgency">Urgent?</label>
            <input
                {...createNeed.fields.isUrgent.as("checkbox")}
                id="urgency"
            />
        </div>
    </div>

    {#each createNeed.fields.allIssues() as issue}
        <p class="text-red-600">{issue.message}</p>
    {/each}

    {#if createNeed.pending}
        <p>Creating...</p>
    {/if}

    {#if createNeed.result}
        <p>Created {createNeed.result?.customerNeedCreate.success}</p>
    {/if}

    <button type="submit" disabled={createNeed.pending != 0}>Submit</button>
</form>
