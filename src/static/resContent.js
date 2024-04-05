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
				location: 'Kansas City, MO',
				dates: {
					start: 'Jan 2022',
					end: 'Feb 2024'
				},
				bulletPoints: [
       // 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
          // 'Architected and developed critical features for  Credit Trading Platform, including supporting different asset types, implementing trade calculations, and displaying key metrics.',
          // 'Implemented functionality to support Investment Grade Bonds in the platform, receiving iterative feedback from users and delivering fixes and changes as needed.',
          // 'Worked in an Agile environment with developers, technical lead, Quality Automation team, Product Owner, and business users to generate well-documented, reliably coded, helpful features in C#/.NET and Angular.',
          // 'Used SQL to edit database schema + data and edit stored procedures as necessary for new features.',
					'Architected & implemented key functionality in TypeScript/Angular for client onboarding wizard, including state management & saving progress via local storage, cutting client onboarding time from 2 weeks to minutes',
          'Engineered scalable C# REST APIs & microservices to replace critical legacy systems for ingesting & processing company hierarchy data, improving processing times by 99.6%',
          'Refactored end-to-end Cypress tests into reusable suite using JSON fixtures & custom commands, resulting in more coverage, less code & dev time, & 93% fewer brittle tests',
					'Owned team linting, testing, & CI/CD pipelines to streamline development, ensure code quality, & handle deployments to Azure cloud across 4 different environments',
          'Delivered enhancements to SaaS TypeScript/Angular/NX micro-frontend prototype, including updates to localization framework & adding functionality for client admins to view/manage their users, improving UX',
          // 'Conducted customer interviews to validate product needs, using feedback data to iteratively enhance product UI',
          // 'Developed Python CLI tool for rapid comparison of CSVs with 1000+ rows, significantly improving QA efficiency',
          // 'Integrated Pendo Analytics into production SaaS app with custom HTML attributes for resilient feature tracking',
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
          'Maintained & enhanced production JavaScript/AngularJS app with over 85,000 active users, improving unit test coverage & fixing case management statuses for all dashboards',
					'Optimized reporting C# REST API business logic by implementing a \'lite\' model for large sets of KPI data, resulting in a smaller payload & 93% reduction in page load times',
					'Developed reusable, responsive Angular UI components for internal design system, cutting dev time by 33%',
					// 'Maintained & enhanced production SaaS app based on user-reported issues for over 85,000 active users'
					// 'Maintained & enhanced production SaaS app, addressing user-reported issues & delivering improvements such as resolved cases for over 85,000 active users'
				]
			},
			{
				title: 'Software Engineer',
				company: 'CinemaCraft LLC',
				location: 'Remote, US',
				dates: {
					start: 'May 2020',
					end: 'Aug 2020'
				},
				bulletPoints: [
					'Managed development of assets for creators that generated over 16.6 million unique views on YouTube',
					'Developed in large enterprise Java codebase & automated plugin deployment to servers with Maven',
					'Coordinated with various departments to deliver bundled assets & resources in a weekly deliverable'
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
					'Architected MSSQL database using Code First Migrations/Entity Framework 6 to store schematic configurations',
					'Built ASP.NET MVC Web Application to serve views, handle schematic requests, & maintain data contracts',
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
				title: 'Journey',
				url: 'https://journeytodo.com',
				info: 'SvelteKit, TypeScript, Sass/SCSS, Supabase, Supabase Auth, PostgreSQL, Vercel, Playwright',
				dates: {
					start: 'Sept 2023',
					end: 'Present'
				},
				bulletPoints: [
					// 'Goal tracking app designed to make it easier to achieve more with less clutter',
          'Stored binary materialized paths for goals in PostgreSQL database to handle hierarchies of nested sub-goals & support custom ordering, resulting in no processing overhead on server or client & < 1s load times for 32M goals',
          'Integrated Google Lighthouse into CI/CD pipeline to automate accessibility & performance checks across pages',
					'Utilized SvelteKit\'s server-side rendering to improve SEO, reduce initial overhead on the client',
          // 'Used Supabase Auth to handle user management, generating JWT access tokens ',
					// 'Stress tested system performance, loading 32 million nested goals in 0.633 seconds',
					// 'Implemented auto-archival feature to encourage clutter-free goals, archiving tasks after the start of the next week',
          // 'Created design system & icon library in Figma & implemented reusable component library in Svelte + Storybook',
					// 'Created design system & icon library in Figma & implemented reusable component library in Svelte',
				]
			},
			// {
			//   title: 'kufa.io',
			//   url:'https://kufa.io',
			//   info: 'SvelteKit, Three.js, GSAP, Lenis, Tailwind, Vercel',
			//   dates: {
			//     start: 'Dec 2023',
			//     end: 'Jan 2024'
			//   },
			//   bulletPoints: [
			//     'Fast, accessible & responsive personal website to showcase personality, projects & skills.'
			//   ]
			// }
			// {
			// 	title: 'Shinegrab.tech',
			// 	url: 'https://github.com/mitchhit234/ShineGrabDotTech',
			// 	info: 'Slippi SDK, JavaScript, Express.js, Top 5 Finish out of over 30 teams',
			// 	dates: {
			// 		start: 'April 2021',
			// 		end: 'April 2021'
			// 	},
			// 	bulletPoints: [
			// 		'Data analysis tool for improving at Super Smash Bros. Melee, leveraging Slippi SDK to read game replay files',
			// 		'Engineered custom game state parsing algorithms to identify & track complex player movement techniques',
			// 		'Implemented express.js server to handle data ingestion & serve hydrated HTML with stats to the client'
			// 	]
			// },
      // {
      //   title: 'IoT Garden Sensor Dashboard',
      //   url: '',
      //   info: 'Vue2, Vuex, C++, Go, MQTT, Senior capstone project',
      //   dates: {
      //     start: 'Sept 2021',
      //     end: 'Dec 2021'
      //   },
      //   bulletPoints: [
      //     'Built dashboard using Vue2 + Vuex to manage garden sensors connected via MQTT Internet of Things system'
      //   ]
      // }
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
			// {
			// 	title: 'Corgle',
			// 	info: 'React, Typescript, Sass, NestJS, Python, & MongoDB',
			// 	dates: {
			// 		start: 'April 2022',
			// 		end: 'April 2022'
			// 	},
			// 	bulletPoints: [
			// 		'Wordle-inspired game with the objective of guessing dog names based on a set of images',
			// 		'Awarded **Cigna’s Most Accessible Hack award** for including alt text for 500 dog pictures',
			// 		'Scraped WeRateDogs® Tweets to aggregate over 200 unique dogs & stored in MongoDb'
			// 	]
			// }
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
					'C#',
					'Python',
					'HTML5',
					'CSS3',
					'Tailwind',
					'Sass',
					'Java',
					'PostgreSQL',
					'MS SQL Server'
				]
			},
			{
				skills: [
          // 'Vue2',
					'Angular 16+',
					'.NET 6+',
					'React',
					'NextJS',
					'Svelte',
					'SvelteKit',
					'RxJs',
					'Cypress',
					'Playwright',
					'Jest',
					'Storybook'
				]
			},
			{
				skills: [
					'RESTful APIs',
					'Microservices',
					// 'AWS',
					'Azure',
					'CI/CD',
					'Unit testing',
					'Agile',
					'Node',
					'Express.js',
					'Git',
					'Docker',
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
