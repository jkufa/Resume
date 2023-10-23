<script>
	import ContentHeader from './ContentHeader.svelte';
	import SectionHeader from './SectionHeader.svelte';

	export let title;
	export let school;
	export let degrees = [];
	export let dates;
</script>

<div class="container">
	<SectionHeader {title} />
	<ContentHeader title={school} info={degrees.join(', ')} {dates} />
</div>
