import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
	list: [
		// { name: 'African sheepbush', species: 'Pentzia incana' },
		{
			name: 'Alder',
			species: 'Alnus',
			items: [
				{ name: 'Black alder', species: 'Alnus glutinosa, Ilex verticillata' },
				{ name: 'Common alder', species: 'Alnus glutinosa' },
				{ name: 'False alder', species: 'Ilex verticillata' },
				{ name: 'Gray alder', species: 'Alnus incana' },
				{ name: 'Speckled alder', species: 'Alnus incana' },
				{
					name: 'White alder',
					species: 'Alnus incana, Alnus rhombifolia, Ilex verticillata',
				},
			],
		},
		// { name: 'Almond', species: 'Prunus dulcis' },
		// { name: 'Aloe vera', species: 'Aloe vera' },
		{
			name: 'Amaranth',
			species: 'Amaranthus',
			items: [{ name: 'Foxtail amaranth', species: 'Amaranthus caudatus' }],
		},
		{
			name: 'Ambrosia',
			items: [{ name: 'Tall ambrosia', species: 'Ambrosia trifida' }],
		},
		// { name: 'Amy root', species: 'Apocynum cannabinum' },
		// { name: 'Angel trumpet', species: 'Brugmansia suaveolens' },
		// { name: 'Apple', species: 'Malus domestica' },
		// { name: 'Apricot', species: 'Prunus armeniaca' },
		// { name: 'Arfaj', species: 'Rhanterium epapposum' },
		// { name: 'Arizona sycamore', species: 'Platanus wrighitii' },
		{
			name: 'Arrowwood',
			species: 'Cornus florida',
			items: [{ name: 'Indian arrowwood', species: 'Cornus florida' }],
		},
		{
			name: 'Ash',
			species: 'Fraxinus spp.',
			items: [
				{ name: 'Black ash', species: 'Acer negundo, Fraxinus nigra' },
				{ name: 'Blue ash', species: 'Fraxinus quadrangulata' },
				{ name: 'Cane ash', species: 'Fraxinus americana' },
				{ name: 'European ash', species: 'Fraxinus excelsior' },
				{ name: 'Green ash', species: 'Fraxinus pennsylvanica lanceolata' },
				{ name: 'Maple ash', species: 'Acer negundo' },
				{ name: 'Red ash', species: 'Fraxinus pennsylvanica lanceolata' },
				{ name: 'River ash', species: 'Fraxinus pennsylvanica' },
				{ name: 'Swamp ash', species: 'Fraxinus pennsylvanica' },
				{ name: 'White ash', species: 'Fraxinus americana' },
				{ name: 'Water ash', species: 'Acer negundo, Fraxinus pennsylvanica' },
			],
		},
		{
			name: 'Azolla',
			species: 'Azolla',
			items: [{ name: 'Carolina azolla', species: 'Azolla caroliniana' }],
		},
	],
});
