<script>
	import Header from './lib/Header.svelte';
	import Page from './lib/Page.svelte';
	import Section from './lib/Section.svelte';
	import SectionHeader from './lib/SectionHeader.svelte';
	import { ResContent } from './lib/resContent';

	let { header, experience, projects } = ResContent;
	let { name, title, contacts, links } = header;
</script>

<main>
	<Page>
		<Header {name} {title} {contacts} {links}></Header>
		<Section title={experience.title} content={experience.content} />
		<Section title={projects.title} content={projects.content} headerType="1Liner" />
	</Page>
</main>

<style lang="scss">
</style>
