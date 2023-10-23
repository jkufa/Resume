<script>
	import Bullets from './Bullets.svelte';
	import ContentHeader from './ContentHeader.svelte';

	export let content;
	export let headerType = 'default';
</script>

{#each content as c}
	<div class="container">
		<ContentHeader
			title={c.title}
			info={c['info'] ?? c['company']}
			dates={c.dates}
			location={c.location}
			isOneLine={headerType === '1Liner' ? true : false}
		/>
		<Bullets items={c.bulletPoints}></Bullets>
	</div>
{/each}

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);

		&:not(:last-child) {
			margin-bottom: var(--spacing-m);
		}
	}
</style>
