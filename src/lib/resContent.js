export const ResContent = {
	header: {
		name: 'Jack Kufa',
		title: 'Frontend Software Engineer',
		links: ['kufa.io', 'github.com/jkufa', 'linkedin.com/in/jackkufa'],
		contacts: ['jack@kufa.io']
	},
	experience: {
		title: 'Experience',
		content: [
			{
				title: 'Software Engineer',
				company: 'Service Management Group',
				location: 'Remote, US',
				dates: {
					start: 'Jan 2022',
					end: 'Present'
				},
				bulletPoints: [
					'Led development of SAAS hierarchy onboarding wizard, cutting onboarding time from 2 weeks to minutes',
					'Implemented 2 APIs to migrate away from legacy service API & reduced hierarchy import times by up to 500%',
					'Designed & maintained GitHub Actions CI/CD workflows to deploy over 6 unique projects to Azure',
          'Leveraged Cypress fixtures/custom commands to reduce brittle tests by 93% and boost developer productivity',
					'Migrated Blazor WASM web app to Angular 15 with functional parity in 7 days',
				]
			},
			{
				title: 'Software Engineer Intern',
				company: 'Service Management Group',
				location: 'Kansas City, MO',
				dates: {
					start: 'May 2021',
					end: 'Aug 2021'
				},
				bulletPoints: [
					'Developed reusable Angular components for internal UI component library & design systems',
					'Revamped reporting API to support functionality for KPI lite model to reduce loading time',
					'Decoupled functionality in AngularJS service to correctly show resolved cases for over 200 accounts',
					'Fixed various bugs in smg360® across 3 different technologies to improve user experience'
				]
			},
			{
				title: 'Plugin Developer',
				company: 'Cinemacraft LLC',
				location: 'Remote, US',
				dates: {
					start: 'May 2020',
					end: 'Aug 2020'
				},
				bulletPoints: [
					'Managed development of assets that generated over 16.6 million YouTube views for content creators',
					'Interfaced with Spigot API to create custom Minecraft plugins',
					'Developed in large enterprise Java codebase & automated plugin deployment to servers with Maven',
          'Coordinated various departments to bundle assets and resources for a weekly deliverable'
				]
			},
			{
				title: 'Software Engineer Intern',
				company: 'Yaskawa America Inc',
				location: 'Oak Creek, WI',
				dates: {
					start: 'May 2019',
					end: 'Aug 2019'
				},
				bulletPoints: [
					'Created a first-of-its-kind C# ASP.NET MVC web app with EPLAN’s API',
					'Automated generation of electrical panel schematics, reducing design time from 30+ minutes to seconds',
					'Architected SQL Database schemas using Code First Migrations in EF6 to store schematic information'
				]
			}
		]
	},
	projects: {
		title: 'Projects',
		content: [
			{
				title: 'JourneyTodo',
				info: 'SvelteKit, Typescript, Sass, Supabase, Postgres, Vercel',
				dates: {
					start: 'Sept 2023',
					end: 'Present'
				},
				bulletPoints: [
					'Goal based todo app inspired by Todoist with Supabase as data layer & auth layer',
					'Implemented binary materialized paths using user index + id for performant custom sorts',
					'Scripted postgres functions & triggers to automatically set indices & binary materialized paths',
					'Integrated end-to-end tests for major user flows with Playwright',
          'Prototyped components & screens in Figma to validate user experience before implementation',
				]
			},
			{
				title: 'Corgle',
				info: 'React, Typescript, Sass, NestJS, Python, & MongoDB',
				dates: {
					start: 'April 2022',
					end: 'April 2022'
				},
				bulletPoints: [
					'Built Wordle-like game for hackathon with the objective of guessing dog names based on images',
					'Awarded Cigna’s Most Accessible Hack award for including alt text for 500 dog pictures',
					'Scraped WeRateDogs® Tweets & translated data to JSON containing over 200 unique dogs'
				]
			},
			{
				title: 'Drafty',
				info: ['Python', 'Flask', 'SQLite3', 'SQLAlchemy', 'Discord'],
				dates: {
					start: 'Oct 2020',
					end: 'Dec 2020'
				},
				bulletPoints: [
					'Custom Discord bot for creating & managing Pokemon Draft Leagues',
					'Designed Flask web app for adding & managing users, Pokemon, & draft sheets',
          'Automated user reporting of match scores & handled leaderboards via Discord bot',
					'Authored complete documentation of system design, including how to setup & run the web app & bot'
				]
			}
		]
	},
	skills: {
		title: 'Skills',
		items: [
			{
				name: 'Languages',
				skills: ['Typescript', 'Python', 'HTML/CSS3/SASS', 'C#', 'Postgres', 'MSSQL']
			},
			{
				name: 'Frameworks',
				skills: ['Angular', 'Svelte', 'SvelteKit', 'React', 'NextJS', '.NET 6']
			},
			{
				name: 'Other',
				skills: [
					'REST',
          'CI/CD',
					'Agile',
					'Node',
					'Git',
					'Jest',
					'Cypress',
					'Playwright',
					'Storybook',
          'Figma',
					'Azure',
				]
			}
		]
	},
	education: {
		title: 'Education',
		school: 'Missouri University of Science & Technology',
		degrees: ['B.S. Computer Science', 'B.S. Computer Engineering'],
		dates: {
			end: 'Dec 2021'
		}
	}
};
