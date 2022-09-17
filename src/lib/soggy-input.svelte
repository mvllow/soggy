<script lang="ts">
	import { getContext } from 'svelte';
	import type { QueryContext, LabelsContext } from './types.js';

	export let placeholder: string;

	let query = getContext<QueryContext>('query');
	let labels = getContext<LabelsContext>('labels');
</script>

<label data-soggy-label for={labels.input}>{placeholder}</label>
<input
	data-soggy-input
	id={labels.input}
	bind:value={$query}
	{placeholder}
	{...$$restProps}
/>

<style>
	label {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
