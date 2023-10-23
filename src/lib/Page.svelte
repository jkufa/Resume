<script>
	import { onMount } from 'svelte';
	import { cubicInOut, cubicOut, elasticIn, elasticOut, quintOut } from 'svelte/easing';

	import { fade } from 'svelte/transition';

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
	});

  function fadeIn(node, { duration, delay }) {
    return {
      duration,
      delay,
      easing: cubicOut,
      css: (t, u) => {
        return `
          opacity: ${t};
          transform: translateY(-${u*5}%);
        `
      }
    }
  }
</script>

{#if isLoaded}
	<div class="page" transition:fadeIn={{ duration: 700, delay: 100 }}>
		<slot />
	</div>
{/if}

<style lang="scss">
	.page {
		box-sizing: border-box;
		padding: 0.5in;
		width: 100%;
		max-width: var(--page-width);
		height: var(--page-height);
		background: white;
		border-radius: 2px;
    transition: all 300ms ease-out;
    &:hover {
      scale: 1.01;
      box-shadow: rgba(2, 2, 131, 0.12) 0px 30px 90px;
    }
		box-shadow:
			0px 4px 8px 0px rgba(0, 0, 0, 0.03),
			0px 0px 4px 0px rgba(0, 0, 0, 0.02);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-s);
	}
</style>
