<script lang="ts">
	import { Soggy, SoggyInput, SoggyGroup, SoggyItem } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Soggy list={data.list} let:matches let:query>
	<SoggyInput placeholder="Search..." />

	{#each matches as match}
		<SoggyGroup>
			<svelte:fragment slot="heading">{match.name}</svelte:fragment>

			<!-- Provide accurate typings for groups -->
			{#if Array.isArray(match.items)}
				{#each match.items as item}
					<SoggyItem>
						<a href="#!">{item.name} ({item.species})</a>
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
