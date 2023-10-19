<script>
  import { Content } from './lib/content';
  import Header from "./lib/Header.svelte";
  import Page from "./lib/Page.svelte";

  let {name, title, contacts, links} = Content.header;

</script>

<main>
  <Page>
    <Header name={name} title={title} contacts={contacts} links={links}></Header>
  </Page>
</main>