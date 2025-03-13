<script lang="ts">
	import ContentHeader from './ContentHeader.svelte';
	import SectionHeader from './SectionHeader.svelte';

	let {
		title,
		school,
		degrees = [],
		dates
	} = $props();
</script>

<div class="container">
	<SectionHeader {title} />
	<ContentHeader title={school} info={degrees} {dates} />
</div>
