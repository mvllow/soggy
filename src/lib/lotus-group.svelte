<!--
	Adding the role is necessary when removing default list styles
	https://tailwindcss.com/docs/preflight#accessibility-considerations

	svelte-ignore a11y-no-redundant-roles
-->
<ul data-lotus-group role="list" {...$$restProps}>
	{#if $$slots.heading}
		<li data-lotus-heading><slot name="heading" /></li>

		<ul data-lotus-items role="list">
			<!-- TODO: Perhaps we could expose match here, providing better types for groups -->
			<slot />
		</ul>
	{:else}
		<slot />
	{/if}
</ul>
