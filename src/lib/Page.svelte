<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { circOut } from 'svelte/easing';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  let isLoaded = $state(false);

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
  <div
    id="page"
    class="flex flex-col gap-4 md:gap-1.5 bg-white shadow-page rounded-xs p-4 md:p-[.5in]
    max-w-[8.5in] md:h-[11in]
    ease-in-out-expo duration-700 delay-100 transition-all md:hover:shadow-hover"
    transition:fadeIn={{ duration: 800, delay: 100 }}
  >
    {@render children?.()}
  </div>
{/if}
