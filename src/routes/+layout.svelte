<header>
	<h1>soggy</h1>
</header>

<main>
	<slot />
</main>

<style global>
	:root {
		color-scheme: light dark;
	}

	body {
		color: black;
		background: white;
	}

	@media (prefers-color-scheme: dark) {
		body {
			color: white;
			background: black;
		}
	}
</style>
