import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
	groupList: [
		{
			name: 'Heading 1',
			items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }],
		},
		{
			name: 'Heading 2',
			items: [{ name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }],
		},
	],
	itemList: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }],
});
