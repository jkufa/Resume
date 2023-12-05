<script>
	import { ResContent } from './lib/resContent';
	import Header from './lib/Header.svelte';
	import Page from './lib/Page.svelte';
	import Section from './lib/Section.svelte';
	import Skills from './lib/Skills.svelte';
	import Education from './lib/Education.svelte';

	let { header, experience, projects, skills, education } = ResContent;
	let { name, title, contacts, links } = header;
  let pageTitles = {
    default: 'Jack Kufa – Resume',
    print: 'JackKufaResume',
  }
  let pageTitle = pageTitles.default;

  function setTitle() {
    pageTitle = pageTitles.print;
  }
  function resetTitle() {
    pageTitle = pageTitles.default;
  }
</script>

<svelte:window on:beforeprint={setTitle} on:afterprint={resetTitle}></svelte:window>
<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
<main>
	<Page>
		<Header {name} {title} {contacts} {links}></Header>
		<Skills title={skills.title} items={skills.items} />
		<Section title={experience.title} content={experience.content} />
		<Section title={projects.title} content={projects.content} />
		<Education
			title={education.title}
			school={education.school}
			degrees={education.degrees}
			dates={education.dates}
		/>
	</Page>
</main>
