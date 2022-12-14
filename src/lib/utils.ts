import hasMatch from 'has-match';
import type { List, Group, Item } from './types.js';

function isGroups(list: List): list is Group[] {
	return (list as Group[])[0].items !== undefined;
}

function filterItems(items: Item[], query: string, keys = ['name', 'tags']) {
	return items.filter((item) => hasMatch(item, query, keys));
}

function filterGroups(groups: Group[], query: string, keys: string[]) {
	return groups
		.map((group) => ({
			...group,
			items: filterItems(group.items, query, keys),
		}))
		.filter((group) => group.items.length);
}

export function filter(list: List, query: string, keys: string[]) {
	if (list.length <= 0) return [];
	return isGroups(list)
		? filterGroups(list, query, keys)
		: filterItems(list, query, keys);
}
