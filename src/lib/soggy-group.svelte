<!--
	Adding the role is necessary when removing default list styles
	https://tailwindcss.com/docs/preflight#accessibility-considerations

	svelte-ignore a11y-no-redundant-roles
-->
<ul data-soggy-group role="list" {...$$restProps}>
	{#if $$slots.heading}
		<li data-soggy-heading><slot name="heading" /></li>

		<ul data-soggy-items role="list">
			<!-- TODO: Perhaps we could expose match here, providing better types for groups -->
			<slot />
		</ul>
	{:else}
		<slot />
	{/if}
</ul>
