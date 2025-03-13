<script lang="ts">
	import { formatDateRange } from './util';

	interface Props {
		title: string;
		info: string | Array<string>;
		dates: { start: string, end: string };
		location?: string | null;
		url?: string | null;
		isOneLine?: boolean;
	}

	let {
		title,
		info,
		dates,
		location = null,
		url = null,
		isOneLine = false
	}: Props = $props();
</script>

<div class="content-header md:flex justify-between">
	<div class="content-start">
		<div class="oneLiner flex gap-1 flex-row flex-wrap">
			<p class="title font-bold">
				{title}
			</p>
			{#if url}
				<span class="leading-tight">•</span>
				<a class="url" href={url}>{url}</a>
			{/if}
		</div>
		<p class="info opacity-75">
			{#if Array.isArray(info) && info.length > 0}
				{info.join(', ')}
			{:else}
				{info}
			{/if}
		</p>
	</div>
	<div class="flex flex-row-reverse justify-between md:flex-col md:gap-0" class:!flex-row={!location}>
		<p class="dates opacity-75">
			{formatDateRange(dates.start, dates.end)}
		</p>
		{#if location && !isOneLine}
			<p class="location opacity-75 text-end">
				{location}
			</p>
		{/if}
	</div>
</div>