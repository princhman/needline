<script lang="ts">
    import { getUser } from "../../routes/auth.remote";

    const userQuery = getUser();
</script>

{#if userQuery.error}
    <p>Could not check authentication</p>
{:else if userQuery.loading && !userQuery.current}
    <p>Checking authentication...</p>
{:else}
    {@const result = userQuery.current}
    {#if result?.user == null}
        <p>You are not authenticated</p>
        <a href={result?.login_url}>Login with company</a>
    {:else}
        <p>
            You are authenticated as {result.user.name}, {result.user.email}, {result
                .user.company}
        </p>
    {/if}
{/if}
