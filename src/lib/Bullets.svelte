<script lang="ts">
	import { convertMarkdownToHTML } from './util';

	export let items: string[] = [];
</script>

<ul class="list-disc list-outside pl-3">
	{#each items as item}
		<li class="last:mb-0 mb-0.5">{@html convertMarkdownToHTML(item)}</li>
	{/each}
</ul>
