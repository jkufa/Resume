<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	export let title: string;
	export let items: { skills: string[] }[];
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
