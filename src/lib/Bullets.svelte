<script>
	export let items = [];
</script>

<ul class="bullet-points">
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>

<style lang="scss">
	.bullet-points {
		margin: 0;
		padding-left: var(--spacing-xxs);
		li {
			list-style-position: inside;
		}
	}
</style>
