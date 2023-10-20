<script>
  import { Content } from './lib/content';
  import Header from "./lib/Header.svelte";
  import Page from "./lib/Page.svelte";
	import SectionHeader from './lib/SectionHeader.svelte';

  let { name, title, contacts, links } = Content.header;
  let  { experience } = Content;

</script>

<main>
  <Page>
    <Header name={name} title={title} contacts={contacts} links={links}></Header>
    <SectionHeader title={experience.title} />
  </Page>
</main>

<style lang="scss">

</style>