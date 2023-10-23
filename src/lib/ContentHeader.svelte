<script>
	import { formatDateRange } from './util';

	export let title;
	export let info;
	export let dates;
	export let location = null;
	export let isOneLine = false;

	console.log(info);
</script>

<div class="content-header">
	<div class="content-start" class:oneLiner={isOneLine}>
		<p class="title">
			{title}
		</p>
		<p class="info">
			{#if Array.isArray(info) && info.length > 0}
				{info.join(', ')}
			{:else}
				{info}
			{/if}
		</p>
	</div>
	<div class="content-end">
		<p class="dates">
			{formatDateRange(dates.start, dates.end)}
		</p>
		{#if location && !isOneLine}
			<p class="location">
				{location}
			</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.content-start.oneLiner {
		flex-direction: row;
	}

	.content-header {
		display: flex;
		justify-content: space-between;
	}
	.content-end {
		p {
			display: flex;
			gap: var(--spacing-xs);
			justify-content: flex-end;
		}
	}
	.title {
		font-weight: 600;
	}
	.info {
		opacity: var(--opacity-s);
	}

	.content-end {
		opacity: var(--opacity-s);
	}
</style>
