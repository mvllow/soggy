<script lang="ts">
	import { Soggy, SoggyInput, SoggyGroup,SoggyItem } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Items</h2>

<Soggy list={data.itemList} let:matches>
	<SoggyInput placeholder="Search..." />

	<SoggyGroup>
		{#each matches as match}
			<SoggyItem>{match.name}</SoggyItem>
		{/each}
	</SoggyGroup>
</Soggy>

<h2>Groups</h2>

<Soggy list={data.groupList} let:matches let:query>
	<SoggyInput placeholder="Search..." />

	{#each matches as match}
		<SoggyGroup>
			<svelte:fragment slot="heading">{match.name}</svelte:fragment>

			<!-- Provide accurate typings -->
			{#if Array.isArray(match.items)}
				{#each match.items as item}
					<SoggyItem>
						<a href="#{item.name}">{item.name}</a>
					</SoggyItem>
				{/each}
			{/if}
		</SoggyGroup>
	{/each}

	{#if !matches.length}
		<p>No results for "{query}"</p>
	{/if}
</Soggy>

<style global>
	[aria-selected='true'] {
		color: white;
		background: palevioletred;
	}
</style>
