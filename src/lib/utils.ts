import hasMatch from 'has-match';
import type { List, Group, Item } from './types';

function isGroups(list: List): list is Group[] {
	return (list as Group[])[0].items !== undefined;
}

function filterItems(items: Item[], query: string, keys = ['name', 'tags']) {
	return items.filter((item) => hasMatch(item, query, keys));
}

function filterGroups(groups: Group[], query: string) {
	return groups
		.map((group) => ({
			...group,
			items: filterItems(group.items, query),
		}))
		.filter((group) => group.items.length);
}

export function filter(list: List, query: string) {
	if (list.length <= 0) return [];
	return isGroups(list) ? filterGroups(list, query) : filterItems(list, query);
}
