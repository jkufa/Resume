<script lang="ts">
	import { onMount } from 'svelte';
	import { circOut } from 'svelte/easing';

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
	});
  interface FadeInTransitionConfig {
    duration: number;
    delay: number;
  }

	function fadeIn(node: HTMLElement, { duration, delay }: FadeInTransitionConfig) {
		return {
			duration,
			delay,
			easing: circOut,
			css: (t: number, u: number) => {
				return `
          opacity: ${t};
          transform: translateY(-${u * 5}%);
        `;
			}
		};
	}
</script>

{#if isLoaded}
	<div id="page" class="flex flex-col gap-4 md:gap-[6px] bg-white shadow-page rounded-sm p-4 md:p-[.5in] max-w-A4 md:h-A4 ease-in-out-expo duration-700 delay-100 transition-all md:hover:scale-[1.01] md:hover:shadow-hover" transition:fadeIn={{ duration: 800, delay: 100 }}>
		<slot />
	</div>
{/if}