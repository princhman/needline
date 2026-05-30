<script lang="ts">
    import { env } from "$env/dynamic/public";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const params = new URLSearchParams({
        client_id: env.PUBLIC_CLIENT_ID!,
        redirect_uri: env.PUBLIC_REDIRECT_URI,
        response_type: "code",
        scope: "read,write",
        state: crypto.randomUUID(),
    });

    const url = `https://linear.app/oauth/authorize?${params.toString()}`;
</script>

<a href={url}>Authorize</a>

{#if data.authenticated}
    <p>Connected to Linear</p>
{:else}
    <p>Not connected to Linear</p>
{/if}
