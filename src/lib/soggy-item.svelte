<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { SelectedContext } from './types';

	let item: Element;
	const selected = getContext<SelectedContext>('selected');

	onMount(() => {
		// TODO: Cleanup onDestroy?
		item.addEventListener('focusin', () => ($selected = item));
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
