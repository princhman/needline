<script lang="ts">
    import { env } from "$env/dynamic/public";
    import type { PageData } from "./$types";
    import { getIssues } from "$lib/linear/issues.remote";

    let { data }: { data: PageData } = $props();

    const params = new URLSearchParams({
        client_id: env.PUBLIC_CLIENT_ID!,
        redirect_uri: env.PUBLIC_REDIRECT_URI,
        response_type: "code",
        scope: "read,write",
        state: crypto.randomUUID(),
    });

    const url = `https://linear.app/oauth/authorize?${params.toString()}`;

    function formatLastRefreshed(date: Date) {
        const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

        if (seconds < 5) return "just now";
        if (seconds < 60) return `${seconds}s ago`;

        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;

        const hours = Math.floor(minutes / 60);
        return `${hours}h ago`;
    }

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
    {#if issues.loading}
        <p>Loading...</p>
    {:else if issues.current}
        <ul>
            {#each issues.current as issue}
                <li>{issue.title}</li>
            {/each}
        </ul>
    {/if}
</div>

<button onclick={() => issues.refresh()}>Refresh</button>
