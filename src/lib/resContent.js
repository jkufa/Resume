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
					start: 'January 2022',
					end: 'Present'
				},
				bulletPoints: [
					'Led development of SAAS hierarchy onboarding wizard, cutting onboarding time from 2 weeks to minutes',
					'Implemented 2 APIs to reduce hierarchy import times by up to 5x for large clients',
					'Owned migration of Blazor WASM web app to Angular 15 with functional parity in 7 days',
					'Designed & maintained GitHub Action CI/CD workflows to deploy over 6 unique projects to Azure',
					'Mentored QA engineer in Cypress testing to improve overall test coverage'
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
					'Generated over 16.6 million YouTube views for content creator',
					'Interfaced with Spigot API to create a custom Minecraft plugin',
					'Deployed plugins to servers using Maven to automate the build process',
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
					'Designed an SQL Database using Code First Migrations in EF6 to store schematic information'
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
					start: 'September 2023',
					end: 'Present'
				},
				bulletPoints: [
					'Goal based Todo app inspired by Todoist',
					'Supported account creation & profile management with Supabase Auth, including Google Oauth',
					'Designed hierarchical goals table with pre-sorted materialized path by converting index & id integers into 4 byte binary',
					'Scripted postgres functions and triggers to automatically set indices and binary materialized paths',
					'Created integration tests for all major user flows with Playwright & implemented Lighthouse into CI/CD'
				]
			},
			{
				title: 'Corgle',
				info: 'React, Typescript, Sass, NestJS, Python, and MongoDB',
				dates: {
					start: 'April 2022',
					end: 'April 2022'
				},
				bulletPoints: [
					'Created Wordle-like game for hackathon with the objective of guessing dog names based on images',
					'Awarded Cigna’s Most Accessible Hack award for including alt text for 500 dog pictures',
					'Scraped WeRateDogs® Tweets and translated data to JSON containing over 200 unique dogs'
				]
			}
		]
	},
	skills: {
		title: 'Skills',
		items: [
			{
				name: 'Languages',
				skills: ['Typescript', 'Python', 'HTML/CSS3/SASS', 'Golang', 'C#', 'Postgres', 'MSSQL']
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
