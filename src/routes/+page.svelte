<script lang="ts">
    import { env } from "$env/dynamic/public";
    import type { PageData } from "./$types";
    import Board from "$lib/components/board.svelte";
    import { url } from "$lib/utils/linearAuthUrl";

    let { data }: { data: PageData } = $props();
</script>

{#if data.authenticated}
    <Board />
{:else}
    <p>Not connected to Linear</p>
    <a href={url}>Authorize</a>
{/if}
