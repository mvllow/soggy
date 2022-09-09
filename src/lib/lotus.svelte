<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { id } from './store';
	import { filter } from './utils';
	import type { List, LabelsContext, QueryContext } from './types';

	export let list: List;

	// Provide unique labels per lotus instance
	id.update((previous) => previous + 1);
	setContext<LabelsContext>('labels', {
		input: `lotus-input-${$id}`,
		suggestions: `lotus-suggestions-${$id}`,
	});

	let query = setContext<QueryContext>('query', writable(''));
	$: matches = filter(list, $query);
</script>

<div data-lotus-root {...$$restProps}>
	<slot {matches} query={$query} />
</div>
