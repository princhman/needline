<script lang="ts">
    import { env } from "$env/dynamic/public";
    import { url } from "$lib/utils/linearAuthUrl";
    import { Button } from "./ui/button";
</script>

<div class="flex items-center h-screen w-full">
    <div class="flex flex-col items-center w-full gap-2">
        <div class="flex items-center">
            <span class="text-4xl">Needline</span>
            <img src="/logo.svg" alt="Needline logo" width="54" />
        </div>
        <p class="max-w-sm text-center text-sm text-muted-foreground mb-3">Connect your workspace to bring customer needs into Linear.</p>
        {#if env.PUBLIC_CLIENT_ID && env.PUBLIC_BASE_URL}
        <Button href={url}>
            <span class="flex items-center gap-2">
                <span>Connect Linear</span>
                <img src="/linear-dark-logo.svg" alt="Linear logo" width="18" />
            </span>
        </Button>
        {:else}
            <p class="max-w-sm text-center text-sm text-muted-foreground">The portal hasn’t been configured yet.</p>
            <Button href="https://github.com/princhman/needline/blob/main/docs/setup.md">Setup instructions</Button>
        {/if}
    </div>
</div>
