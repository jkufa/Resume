<script>
	import SectionHeader from './SectionHeader.svelte';

	export let title;
	export let items;
</script>

<div class="container">
	<SectionHeader {title} />
	{#each items as item}
		<p class="item">
			<span>{item.name}</span>
			<span>{item.skills.join(', ')}</span>
		</p>
	{/each}
</div>

<style lang="scss">
	.item {
		display: flex;
		gap: var(--spacing-xxl);
		&:not(:last-of-type) {
			margin-bottom: var(--spacing-xs);
		}
		span:first-of-type {
			font-weight: 600;
			width: 80px;
		}
	}
</style>
