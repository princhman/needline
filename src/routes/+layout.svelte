<script lang="ts">
    import "./layout.css";

    let { children } = $props();
</script>

<svelte:head
    ><link rel="icon" href="/logo.svg" /><title>Needline</title></svelte:head
>
<div class="flex mx-auto max-w-3xl">
    {@render children()}
</div>
