<script lang="ts">
	import Bullets from './Bullets.svelte';
	import ContentHeader from './ContentHeader.svelte';

	interface Props {
		content: any;
		headerType?: string;
	}

	let { content, headerType = 'default' }: Props = $props();

</script>

{#each content as c}
	<div class="mb-2 last-of-type:mb-0 flex flex-col gap-1">
		<ContentHeader
			title={c.title}
			info={c['info'] ?? c['company']}
			dates={c.dates}
			location={c.location}
			url={c.url}
			isOneLine={headerType === '1Liner' ? true : false}
		/>
		<Bullets items={c.bulletPoints}></Bullets>
	</div>
{/each}