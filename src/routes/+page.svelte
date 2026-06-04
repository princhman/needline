<script lang="ts">
    import { env } from "$env/dynamic/public";
    import type { PageData } from "./$types";
    import { getIssues } from "$lib/linear/issues.remote";
    import CreateNeed from "$lib/components/create-need.svelte";
    import UserAuthStatus from "$lib/components/user-auth-status.svelte";

    let { data }: { data: PageData } = $props();

    const params = new URLSearchParams({
        client_id: env.PUBLIC_CLIENT_ID!,
        redirect_uri: env.PUBLIC_REDIRECT_URI,
        response_type: "code",
        scope: "read,write,customer:read,customer:write",
        state: crypto.randomUUID(),
        actor: "app",
    });

    const url = `https://linear.app/oauth/authorize?${params.toString()}`;

    const issues = getIssues();
</script>

<a href={url}>Authorize</a>

{#if data.authenticated}
    <p>Connected to Linear</p>
{:else}
    <p>Not connected to Linear</p>
{/if}

<h2>Issues</h2>
<div>
    {#if issues.current}
        <ul>
            {#each issues.current as issue}
                <li>{issue.title}</li>
            {/each}
        </ul>

        {#if issues.loading}
            <p>Refreshing...</p>
        {/if}
    {:else if issues.loading}
        <p>Loading...</p>
    {:else if issues.error}
        <p>Failed to load issues</p>
    {/if}
</div>

<button onclick={() => issues.refresh()}>Refresh</button>

<CreateNeed />

<UserAuthStatus />
