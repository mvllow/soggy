<script lang="ts">
	import { Lotus, LotusInput, LotusGroup, LotusItem } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Items</h2>

<Lotus list={data.itemList} let:matches>
	<LotusInput placeholder="Search..." />

	<LotusGroup>
		{#each matches as match}
			<LotusItem>{match.name}</LotusItem>
		{/each}
	</LotusGroup>
</Lotus>

<h2>Groups</h2>

<Lotus list={data.groupList} let:matches let:query>
	<LotusInput placeholder="Search..." />

	{#each matches as match}
		<LotusGroup>
			<svelte:fragment slot="heading">{match.name}</svelte:fragment>

			<!-- Provide accurate typings -->
			{#if Array.isArray(match.items)}
				{#each match.items as item}
					<LotusItem>
						<a href="#{item.name}">{item.name}</a>
					</LotusItem>
				{/each}
			{/if}
		</LotusGroup>
	{/each}

	{#if !matches.length}
		<p>No results for "{query}"</p>
	{/if}
</Lotus>

<style global>
	[aria-selected='true'] {
		color: white;
		background: palevioletred;
	}
</style>
