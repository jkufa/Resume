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
					'Led design of production SaaS hierarchy setup wizard to cut onboarding time from 2 weeks to minutes',
					'Replaced legacy system with scalable API & microservices, reducing processing times by 99.6% (hrs  to mins)',
					'Spearheaded end to end tests with Cypress & used fixtures/custom commands to reduce brittle tests by 93%',
          'Scaffolded infrastructure for linting, testing, and deployment to streamline development & ensure code quality',
          // 'Collaborated with design, product, & other engineers to provide high-value product enhancements',
					// 'Collaborated on UI proof of concepts, securing stakeholder approval & front-end alignment across teams',
          'Collaborated with engineers, designers, and product teams to identify & solve user pain points for a better UX'// on UI proof of concepts for stakeholder approval, and ensuring front-end alignment across teams for delightful customer experiences.'
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
					'Updated reporting API business logic to support lightweight contract, reducing KPI card load times by 93%',
					'Developed reusable, responsive Angular UI components for internal design system, cutting dev time by 33%',
					'Maintained large-scale B2B app & decoupled legacy AngularJS code to fix resolved cases for 200+ accounts'
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
					'Managed development of assets for creators that generated over 16.6 million unique views on YouTube',
					'Developed in large enterprise Java codebase & automated plugin deployment to servers with Maven',
					'Coordinated with various departments to bundle assets & resources for a weekly deliverable'
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
					'Automated building EPLAN electrical panel schematics, reducing design time by about 30 minutes per schematic',
					'Architected SQL database using Code First Migrations/Entity Framework 6 to store schematic information'
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
				url: 'https://journeytodo.com',
				info: 'SvelteKit, Typescript, Sass, Supabase, Supabase Auth, Postgres, Vercel, Playwright',
				dates: {
					start: 'Sept 2023',
					end: 'Present'
				},
				bulletPoints: [
					'Goal-based todo app for breaking down goals into tasks that are measurable, actionable, and specific',
          'Implemented API with SvelteKit\'s server-side rendering system to reduce overhead on client',
					'Created design system & icon library in Figma & implemented reusable component library in Svelte',
					'Stored goals with hierarchical data & stress tested system, loading 32 million nested goals in 0.633 seconds',
					'Implemented auto-archival feature to encourage clutter-free goals, archiving tasks after the start of the next week'
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
					'Awarded **Cigna’s Most Accessible Hack award** for including alt text for 500 dog pictures',
					'Scraped WeRateDogs® Tweets & translated data to JSON containing over 200 unique dogs'
				]
			}
			// {
			// 	title: 'Drafty',
			// 	info: ['Python', 'Flask', 'SQLite3', 'SQLAlchemy', 'Discord'],
			// 	dates: {
			// 		start: 'Oct 2020',
			// 		end: 'Dec 2020'
			// 	},
			// 	bulletPoints: [
			// 		'Custom Discord bot for creating & managing Pokemon Draft Leagues',
			// 		'Designed Flask web app for adding & managing users, Pokemon, & draft sheets',
			// 		'Integrated SQLAlchemy ORM into Discord bot code & flask code to read & write to SQLite3 database',
			// 		'Automated match score reporting for users & displayed leaderboards via Discord bot',
			// 	]
			// }
		]
	},
	skills: {
		title: 'Skills',
		items: [
			{
				skills: [
					'TypeScript',
					'JavaScript',
					'Python',
					'HTML5',
					'CSS3',
					'Tailwind',
					'Sass',
					'Java',
					'C#',
					'Postgres',
					'MSSQL'
				]
			},
			{
				skills: [
          'React',
					'NextJS',
					'Svelte',
					'SvelteKit',
					'Angular',
					'RxJs',
					'Cypress',
					'Playwright',
					'Jest',
					'Docker',
					'.NET',
					'Storybook'
				]
			},
			{
				skills: [
					'Restful APIs',
					'Microservices',
					'Azure',
					'CI/CD',
					'Unit testing',
					'Agile',
					'Node',
					'Git',
					'Server-side rendering',
					'Figma'
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
