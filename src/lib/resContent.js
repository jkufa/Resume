export const ResContent = {
	header: {
		name: 'Jack Kufa',
		title: 'Software Engineer',
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
					'Led system design of SAAS hierarchy onboarding wizard, cutting onboarding time from 2 weeks to minutes',
					'Implemented 2-layer API to migrate away from legacy API & reduced hierarchy import times by 99.6%',
          'Leveraged Cypress fixtures/custom commands to reduce brittle tests by 93% and boost developer productivity',
					'Designed & maintained GitHub Actions CI/CD workflows to deploy over 6 unique projects to Azure',
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
					'Developed reusable Angular components for internal UI component library & design system',
					'Revamped reporting API with new functionality for KPI lite model to reduce loading times',
					'Decoupled functionality in AngularJS service to correctly show resolved cases for over 200 accounts',
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
					'Developed in large enterprise Java codebase & automated plugin deployment to servers with Maven',
          'Coordinated various departments to bundle assets and resources for a weekly deliverable',
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
      // {
      //   title: 'TapIn',
      //   info: 'NextJs, React Native, Typescript, TailindCSS/Nativewind, Expo, Solito',
      //   dates: {
      //     start: 'November 2023',
      //     end: 'Present',
      //   },
      //   bulletPoints: [
      //     'The native-first matchmaking app for short-term relocation',
      //     'Shared component structure between web and native for fast, multi-platform development',
      //     'Solito to handle routing across platforms'
      //   ]
      // },
			{
				title: 'JourneyTodo',
				info: 'SvelteKit (with SSR), Typescript, Sass, Supabase, Postgres, Vercel',
				dates: {
					start: 'Sept 2023',
					end: 'Present'
				},
				bulletPoints: [
					'Goal based todo app inspired by Todoist with Supabase as data layer & auth layer',
					'Implemented binary materialized paths using custom user index + goal id for scalable load times',
					'Scripted postgres functions & triggers to automatically set indices & binary materialized paths',
					'Integrated end-to-end tests for major user flows with Playwright',
          'Prototyped components & screens in Figma to validate user experience before implementation',
				]
			},
      // {
      //   title: 'Wisdom Keeper',
      //   info: ['Golang, Discord, Docker, Google Cloud'],
      //   dates: {
      //       start: 'Sept 2023',
      //       end: 'Sept 2023',
      //   },
      //   bulletPoints: [
      //     'Custom discord bot that manages messaging in a server full of admins',
      //     'Automatically deletes message if a user posts too soon before a certain time',
      //     'Deployed in a docker container on Google Cloud Compute Engine',
      //   ]
      // },
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
          'Integrated SQLAlchemy ORM into Discord bot code & flask code to read & write to SQLite3 database',
          'Automated match score reporting for users & displayed leaderboards via Discord bot',
					'Authored complete documentation of system design, including how to setup & run the web app & bot'
				]
			},
		]
	},
	skills: {
		title: 'Skills',
		items: [
			{
				name: 'Languages',
				skills: ['Typescript', 'Python', 'HTML/CSS3/SASS', 'Java', 'C#', 'Postgres', 'MSSQL']
			},
			{
				name: 'Frameworks',
				skills: ['Angular', 'React', 'Svelte', 'SvelteKit', 'NextJS', '.NET 6']
			},
			{
				name: 'Other',
				skills: [
					'REST',
          'CI/CD',
					'Agile',
					'Node',
					'Git',
          'SSR',
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
