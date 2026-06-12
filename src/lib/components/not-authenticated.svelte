<script>
    import { getUser } from "../../routes/auth.remote";
    import Button from "./ui/button/button.svelte";
    const result = getUser().current;
</script>

{#if result?.user == null}
    <div class="flex flex-col items-center">
        <span>You are not authenticated</span>
        <Button href={result?.login_url}>Login with company</Button>
    </div>
{/if}
