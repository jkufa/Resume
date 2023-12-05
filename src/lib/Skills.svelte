<script>
	import Bullets from './Bullets.svelte';
	import SectionHeader from './SectionHeader.svelte';

	export let title;
	export let items;
</script>

<div class="container">
	<SectionHeader {title} />
	<ul class="bullet-points">
		{#each items as item}
			<li class="item">
				<span>{item.skills.join(', ')}</span>
			</li>
		{/each}
	</ul>
</div>
