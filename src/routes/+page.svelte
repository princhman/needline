<script lang="ts">
    import type { PageData } from "./$types";
    import Board from "$lib/components/board.svelte";
    import NotConnectedLinear from "$lib/components/not-connected-linear.svelte";

    let { data }: { data: PageData } = $props();
</script>

{#if data.authenticated}
    <Board />
{:else}
    <NotConnectedLinear />
{/if}
