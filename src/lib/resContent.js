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
					'Owned migration of Blazor WASM web app to Angular 15 with functional parity in 7 days',
					'Designed & maintained GitHub Action CI/CD workflows to deploy over 6 unique projects to Azure',
					'Reduced brittle cypress tests from 43% & used fixtures & custom commands to improve test coverage by 20%'
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
					'Updated API to support functionality for KPI lite model to reduce loading time',
					'Decoupled functionality in AngularJS service to correctly show resolved cases for 200+ accounts',
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
					'Managed server resources on a Linux box remotely via SSH to ensure plugin responsiveness'
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
					'Automated generation of electrical panel schematics, reducing 30-40 minute design time to seconds',
					'Designed SQL Database schemas using Code First Migrations in EF6 to store schematic information'
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
					'Goal based Todo app inspired by Todoist',
					'Supported account creation & profile management with Supabase Auth, including Google Oauth',
					'Implemented binary materialized paths using user index & id for extremely performant sorts',
					'Scripted postgres functions & triggers to automatically set indices & binary materialized paths',
					'Created integration tests for all major user flows with Playwright & implemented Lighthouse into CI/CD'
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
					'Created Wordle-like game for hackathon with the objective of guessing dog names based on images',
					'Awarded Cigna’s Most Accessible Hack award for including alt text for 500 dog pictures',
					'Scraped WeRateDogs® Tweets & translated data to JSON containing over 200 unique dogs'
				]
			},
			{
				title: 'Drafty',
				info: ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'Discord'],
				dates: {
					start: 'Oct 2020',
					end: 'Dec 2020'
				},
				bulletPoints: [
					'Built Discord bot for creating & managing Pokemon Draft Leagues',
					'Created Flask UI to initialize manage users, Pokemon, & draft sheets',
					'Wrote complete documentation on how to setup & run the web app & bot'
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
				skills: ['React', 'Angular', 'Svelte', 'SvelteKit', 'NextJS', '.NET 6']
			},
			{
				name: 'Other',
				skills: [
					'Node',
					'Jest',
					'Vite',
					'Cypress',
					'Playwright',
					'Git',
					'Agile',
					'REST APIs',
					'Storybook',
					'Azure',
					'GitHub Actions'
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
