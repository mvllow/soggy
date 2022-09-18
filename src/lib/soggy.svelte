<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { id } from './store.js';
	import { filter } from './utils.js';
	import {
		GROUP_SELECTOR,
		HEADING_SELECTOR,
		ITEM_SELECTOR,
	} from './constants.js';
	import type {
		List,
		LabelsContext,
		QueryContext,
		SelectedContext,
	} from './types.js';

	export let list: List;
	export let keys: string[];

	let rootElement: Element;
	let query = setContext<QueryContext>('query', writable(''));
	let selected = setContext<SelectedContext>('selected', writable(null));

	$: matches = filter(list, $query, keys);
	$: scrollSelectedIntoView($selected);
	$: $query.length > 0 && selectFirstItem();

	// Provide unique labels per soggy instance
	id.update((previous) => previous + 1);
	setContext<LabelsContext>('labels', {
		input: `soggy-input-${$id}`,
		suggestions: `soggy-suggestions-${$id}`,
	});

	function getSelectedItem(parentElement: Element = rootElement) {
		return parentElement?.querySelector(
			`${ITEM_SELECTOR}[aria-selected="true"]`
		);
	}

	function getValidItems(parentElement: Element = rootElement) {
		return Array.from(parentElement?.querySelectorAll(ITEM_SELECTOR) ?? []);
	}

	function updateSelectedToIndex(index: number) {
		const items = getValidItems();
		const item = items[index];

		if (item) {
			$selected = item;
		}
	}

	function updateSelectedByChange(change: 1 | -1) {
		const selected = getSelectedItem();
		const items = getValidItems();
		const index = items.findIndex((item) => item === selected);
		const newIndex = index + change;

		if (newIndex > items.length - 1) {
			updateSelectedToIndex(0);
		} else if (newIndex < 0) {
			updateSelectedToIndex(items.length - 1);
		} else {
			updateSelectedToIndex(newIndex);
		}
	}

	function selectFirstItem() {
		const items = getValidItems();
		const item = items?.find((item) => !item.ariaDisabled);

		if (item) {
			updateSelectedToIndex(items?.indexOf(item) ?? 0);
		}
	}

	function scrollSelectedIntoView(selected: Element | null) {
		const item = selected || getSelectedItem();

		if (item && item.parentElement?.firstChild === item) {
			// First item in group, ensure heading is in view
			item
				.closest(GROUP_SELECTOR)
				?.querySelector(HEADING_SELECTOR)
				?.scrollIntoView({ block: 'nearest' });
		}

		item?.scrollIntoView({ block: 'nearest' });
	}

	// TODO: Multiple instances of soggy breaks keyboard navigation
	function handleKeydown(e: KeyboardEvent) {
		if (!e.defaultPrevented) {
			switch (e.key) {
				case 'n':
				case 'j': {
					if (e.ctrlKey) {
						e.preventDefault();
						updateSelectedByChange(1);
					}
					break;
				}
				case 'ArrowDown': {
					e.preventDefault();
					updateSelectedByChange(1);
					break;
				}
				case 'p':
				case 'k': {
					if (e.ctrlKey) {
						e.preventDefault();
						updateSelectedByChange(-1);
					}
					break;
				}
				case 'ArrowUp': {
					e.preventDefault();
					updateSelectedByChange(-1);
					break;
				}
				// Manually handle enter to avoid removing focus from the
				// search input when selecting an item.
				case 'Enter': {
					e.preventDefault();

					const childElement = $selected?.firstElementChild;
					const tagName = childElement?.tagName;

					if (!tagName) break;
					if (tagName === 'A' || tagName === 'BUTTON') {
						(childElement as HTMLAnchorElement | HTMLButtonElement).click();
					}

					$query = '';

					break;
				}
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div bind:this={rootElement} data-soggy-root {...$$restProps}>
	<slot {matches} query={$query} selected={$selected} />
</div>
