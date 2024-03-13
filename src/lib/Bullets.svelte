<script lang="ts">
	import { convertMarkdownToHTML } from './util';

	export let items: string[] = [];
</script>

<ul class="list-disc list-inside">
	{#each items as item}
		<li>{@html convertMarkdownToHTML(item)}</li>
	{/each}
</ul>
