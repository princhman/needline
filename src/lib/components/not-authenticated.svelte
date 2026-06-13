<script>
    import { getUser } from "../../routes/auth.remote";
    import Button from "./ui/button/button.svelte";
    const result = getUser().current;
</script>

{#if result?.user == null}
    <div class="flex flex-col items-center gap-4">
        <span class="text-xl">Login to leave feedback</span>
        <Button href={result?.login_url}>Login</Button>
    </div>
{/if}
