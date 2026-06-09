<script lang="ts">
    import { env } from "$env/dynamic/public";
    import type { PageData } from "./$types";
    import Board from "$lib/components/board.svelte";

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
</script>

{#if data.authenticated}
    <Board />
{:else}
    <p>Not connected to Linear</p>
    <a href={url}>Authorize</a>
{/if}
