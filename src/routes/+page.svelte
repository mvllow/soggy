<script lang="ts">
	import { Lotus, LotusInput } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Items</h2>

<Lotus list={data.itemList} let:matches>
	<LotusInput placeholder="Search..." />

	<ul>
		{#each matches as match}
			<li>{match.name}</li>
		{/each}
	</ul>
</Lotus>

<h2>Groups</h2>

<Lotus list={data.groupList} let:matches>
	<LotusInput placeholder="Search..." />

	<ul>
		{#each matches as match}
			<li>{match.name}</li>

			<!-- Provide accurate typings -->
			{#if Array.isArray(match.items)}
				<ul>
					{#each match.items as item}
						<li>{item.name}</li>
					{/each}
				</ul>
			{/if}
		{/each}
	</ul>
</Lotus>
