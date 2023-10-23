<div class="page">
	<slot />
</div>

<style lang="scss">
	.page {
		box-sizing: border-box;
		padding: 0.5in;
		width: 100%;
		max-width: var(--page-width);
		height: var(--page-height);
		background: white;
		border-radius: 2px;
		box-shadow:
			0px 4px 8px 0px rgba(0, 0, 0, 0.03),
			0px 0px 4px 0px rgba(0, 0, 0, 0.02);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-s);
	}
</style>
