<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import Content from './Content.svelte';

	interface Props {
		title: any;
		content: any;
		headerType?: string;
	}

	let { title, content, headerType = 'default' }: Props = $props();
</script>

<div class="container">
	<SectionHeader {title} />
	<Content {content} {headerType} />
</div>
