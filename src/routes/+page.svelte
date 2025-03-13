<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Page from '$lib/Page.svelte';
	import Section from '$lib/Section.svelte';
	import Skills from '$lib/Skills.svelte';
	import Education from '$lib/Education.svelte';

	let { data } = $props();

	let { ResContent } = $state(data);
	let { header, experience, projects, skills, education } = $state(ResContent);
	let { name, title, contacts, links } = $state(header);

	let pageTitles = {
		default: 'Jack Kufa – Resume',
		print: 'JackKufaResume'
	};
	let pageTitle = $state(pageTitles.default);

	function setTitle() {
		pageTitle = pageTitles.print;
	}
	function resetTitle() {
		pageTitle = pageTitles.default;
	}
</script>

<svelte:window onbeforeprint={setTitle} onafterprint={resetTitle} />
<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
<main class="flex min-h-svh items-center justify-center">
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
