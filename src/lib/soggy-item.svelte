<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import type { SelectedContext } from './types.js';

	let item: Element;
	const selected = getContext<SelectedContext>('selected');

	const listener = () => ($selected = item);

	onMount(() => {
		item.addEventListener('focusin', listener);
	});

	onDestroy(() => {
		item && item.removeEventListener('focusin', listener);
	});

	// @ts-ignore it should be okay to attempt to blur non focusable elements
	$: $selected?.firstElementChild?.blur();
</script>

<li
	bind:this={item}
	on:focus={() => ($selected = item)}
	on:mouseover={() => ($selected = item)}
	data-soggy-item
	aria-selected={item === $selected}
	role="option"
	{...$$restProps}
>
	<slot />
</li>
