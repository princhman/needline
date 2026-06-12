<script lang="ts">
    import { url } from "$lib/utils/linearAuthUrl";
    import { Button } from "./ui/button";
</script>

<div class="flex items-center h-screen w-full">
    <div class="flex flex-col items-center w-full gap-2">
        <div class="flex items-center">
            <span class="text-4xl">Needline</span>
            <img src="/logo.svg" alt="Needline logo" width="54" />
        </div>
        <Button>
            <span class="flex items-center gap-2">
                <a href={url}>Connect Linear</a>
                <img src="/linear-dark-logo.svg" alt="Linear logo" width="18" />
            </span>
        </Button>
    </div>
</div>
