import type { Writable } from 'svelte/store';

export type List = Group[] | Item[];

export interface Group {
	/** Group name.  */
	name: string;
	/** Group items.  */
	items: Item[];
	[key: string]: unknown;
}

export interface Item {
	/** Item name.  */
	name: string;
	/** Additional search strings. */
	tags?: string[];
	[key: string]: unknown;
}

export type QueryContext = Writable<string>;
export type LabelsContext = { input: string; suggestions: string };
