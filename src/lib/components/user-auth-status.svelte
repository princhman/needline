<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { User } from "@lucide/svelte";
    import { getUser } from "../../routes/auth.remote";
    import Button from "./ui/button/button.svelte";

    const userQuery = getUser();
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        <Button size="icon">
            <User />
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
        <DropdownMenu.Group>
            {@const result = userQuery.current}
            {#if result?.user == null}
                <DropdownMenu.Label
                    >You are not authenticated</DropdownMenu.Label
                >
                <DropdownMenu.Item
                    ><a href={result?.login_url}>Login with company</a
                    ></DropdownMenu.Item
                >
            {:else}
                <DropdownMenu.Label>
                    {result.user.name} ({result.user.email})
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                    <a href="/logout">Logout</a>
                </DropdownMenu.Item>
            {/if}
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
