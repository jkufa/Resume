<script>
	import SectionHeader from './SectionHeader.svelte';
	import Content from './Content.svelte';

	export let title;
	export let content;
	export let headerType = 'default';
</script>

<div class="container">
	<SectionHeader {title} />
	<Content {content} {headerType} />
</div>

<style>
	.container {
	}
</style>
