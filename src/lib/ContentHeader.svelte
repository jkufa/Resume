<script lang="ts">
  import { formatDateRange } from './util';

  interface Props {
    title: string;
    info: string | Array<string>;
    dates: { start: string; end: string };
    location?: string | null;
    url?: string | null;
    isOneLine?: boolean;
  }

  let { title, info, dates, location = null, url = null, isOneLine = false }: Props = $props();
</script>

<div class="content-header grid grid-cols-[1fr_auto] justify-between">
  <div class="flex gap-1">
    <p class="title font-bold">
      {title}
    </p>
    {#if url}
      <span class="leading-tight">•</span>
      <a class="url" href={url}>{url}</a>
    {/if}
  </div>
  <p class="dates opacity-75 flex-grow text-end">
    {formatDateRange(dates.start, dates.end)}
  </p>
  <p class="info opacity-75 {!location ? 'col-span-2' : ''}">
    {#if Array.isArray(info) && info.length > 0}
      {info.join(', ')}
    {:else}
      {info}
    {/if}
  </p>

  {#if location && !isOneLine}
    <p class="location opacity-75 text-end">
      {location}
    </p>
  {/if}
</div>
