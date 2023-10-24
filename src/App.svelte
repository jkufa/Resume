<script>
	import { ResContent } from './lib/resContent';
	import Header from './lib/Header.svelte';
	import Page from './lib/Page.svelte';
	import Section from './lib/Section.svelte';
	import Skills from './lib/Skills.svelte';
	import Education from './lib/Education.svelte';

	let { header, experience, projects, skills, education } = ResContent;
	let { name, title, contacts, links } = header;
</script>

<main>
	<Page>
		<Header {name} {title} {contacts} {links}></Header>
		<Section title={experience.title} content={experience.content} />
		<Section title={projects.title} content={projects.content} headerType="1Liner" />
		<Skills title={skills.title} items={skills.items} />
		<Education
			title={education.title}
			school={education.school}
			degrees={education.degrees}
			dates={education.dates}
		/>
	</Page>
</main>

<style lang="scss">
</style>
