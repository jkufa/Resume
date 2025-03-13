<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<h2 class="font-bold mb-1 border-b border-font border-opacity-40">{title}</h2>
