<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	interface Props {
		title: string;
		items: { skills: string[] }[];
	}

	let { title, items }: Props = $props();
</script>

<div class="container">
	<SectionHeader {title} />
	<ul class="list-disc list-inside">
		{#each items as item}
			<li class="item">
				<span>{item.skills.join(', ')}</span>
			</li>
		{/each}
	</ul>
</div>
