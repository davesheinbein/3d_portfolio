import {
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	internetbrands,
	dna,
	superworld,
	frontend,
	backendDev,
	react,
	angular,
	devops,
	webDesign,
	qa,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'blog',
		title: 'Blog',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Full-Stack Web Developer',
		icon: web,
	},
	{
		title: 'Frontend Developer',
		icon: frontend,
	},
	{
		title: 'Backend Developer',
		icon: backendDev,
	},
	{
		title: 'React Developer',
		icon: react,
	},
	{
		title: 'Angular Developer',
		icon: angular,
	},
	{
		title: 'DevOps Engineer',
		icon: devops,
	},
	{
		title: 'Quality Assurance',
		icon: qa,
	},
	{
		title: 'Web Design',
		icon: webDesign,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Associate Frontend Developer',
		company_name: 'Internet Brands',
		icon: internetbrands,
		iconBg: '#383E56',
		date: 'January 2021 - Present',
		points: [
			'Develops and maintains responsive websites using Angular and React frameworks, as well as libraries such as Materialize and Bootstrap for various industry verticals: health, travel, legal, and automotive. Example: working with companies like WebMD to create an internal record system for doctors.',
			'Utilizes React hooks to create reusable and efficient components and manage component state.',
			"Incorporates SCSS for styling, to maintain consistency and organization of the website's visual design.",
			'Utilizes HTML, JavaScript, and CSS to create dynamic and interactive user experiences, including event handling, data manipulation, and API calls.',
			'Participates in paired and independent programming sessions to create new functionality for existing projects.',
			'Works with remote and on-site multidisciplinary teams to convert business needs into technical specifications, and effectively presents work to the development team during company-wide meetings.',
			'Installs and maintains node packages and integrates existing services and APIs.',
			'Familiar with containerization technology such as Docker.',
			'Troubleshoots issues on local, staging, and master branches, and makes necessary corrections.',
			'Contributes to weekly developer meetings and discusses business needs, software design, and technical specifications about applications, Jira, and planning for future projects.',
			'Collaborates with cross-functional teams, including designers, product managers, and backend developers, to implement and deliver high-quality, user-friendly web applications. Example: working directly with the design, product, and management team members to optimize Figma designs for mobile and then bringing those exact designs to life through code.',
			'Implements user interface designs using modern front-end frameworks such as React and Angular.',
			'Utilizes debugging tools such as Chrome DevTools to identify and resolve performance issues and improve website load times.',
			'Develops and maintains internal documentation and guidelines for web applications to ensure consistency across all projects.',
			'Proficient in utilizing debugging tools such as Chrome DevTools to identify and resolve performance issues and improve website load times, as well as troubleshoot issues on local, staging, and master branches. Example: state not being passed properly or child container text overflowing into parent container.',
		],
		linkedinUrl:
			'https://www.linkedin.com/company/internet-brands/',
	},
	{
		title: 'Frontend Web Developer',
		company_name: 'SuperWorld',
		icon: superworld,
		iconBg: '#E6DEDD',
		date: 'September 2020 - January 2021',
		points: [
			'Implemented complex front-end applications using dynamic HTML, CSS, and JavaScript, and improved upon React components.',
			'Analyzed and selected the most suitable design templates, frameworks, and development frameworks for client projects.',
			'Attended weekly meetings, contributed ideas and feedback, and participated in software development training.',
			'Used object-oriented design principles and test-driven development to build full-stack web applications.',
			'Expanded my knowledge in the growing field of crypto-based projects with mentorship from specialists.',
		],
		linkedinUrl:
			'https://www.linkedin.com/company/superworldapp/',
	},
	{
		title: 'Digital Niche Agency (DNA)',
		company_name: 'Digital Marketing Specialist',
		icon: dna,
		iconBg: '#383E56',
		date: 'Nov 2018 - May 2020',
		points: [
			"Built and managed both B2B e-mail and direct mail campaigns to promote our client's services and our  companies services and brand while gathering feedback and lead data to help future product development by identifying and building partnerships with key lead partners",
			'Lead strategic outreach efforts including strategic communications, investor acquisition and outreach, influencer outreach, Linkedin outreach, networking, account maintenance, and lead generation',
			'Networked and communicated with leads regularly updating our contact databases and coordinated with different organizations to maximize brand exposure.',
			'Participated in operational decisions, provided input on goals, and participated in staff meetings while fostering positive working relationships.',
			'Prepared marketing reports by collecting, analyzing, and summarizing sales data and conducted keyword research and web statistics reporting, and utilized web analytics software to monitor the performance of client websites and make recommendations for improvement and SEO',
			"Designed and created various websites and landing pages in accordance with our client's needs and requests: Industries included - eCommerce, Technology, Crowdfunding, and more - using platforms including - Wix, Squarespace, Leadpages, WordPress, Etc.",
			'In charge of website operation, including providing website performance reports, setting optimization plans and managing regular update tasks, ensuring the smooth running of projects and resolving any issues arising in the process reconciling technical issues to maintain a high level of quality while retaining ease of use for consumers',
			'Generated and developed promotional ideas for the brands together with the marketing team and designed brand style guides, graphic assets, images, the copyright for websites, and other content-related projects for brand development and positioning to targeted public segments.',
			'Provided recommendations regarding how internal processes could be optimized to accommodate new product offerings.',
		],
		linkedinUrl:
			'https://www.linkedin.com/company/digital-niche-agency/',
	},
];

const testimonials = [
	{
		testimonial:
			'Good Frontend Engineer and good at JavaScript and React',
		name: 'Jeremy Guan',
		designation: 'Frontend Developer',
		company: 'Internet Brands',
		image:
			'https://media.licdn.com/dms/image/C5603AQFgkL6RZl1ouQ/profile-displayphoto-shrink_800_800/0/1579338556183?e=1683763200&v=beta&t=8dZFvkOQVNDfZR47ef0jTsjt_UnGtilqinJknshlPHw',
	},
	{
		testimonial:
			'David was an extremely thorough, talented and hard-working Software Engineering student. He will make an exceptional addition to any company!',
		name: 'Jim Clark',
		designation:
			'Senior Lead Software Engineering Immersive (SEI) Instructor',
		company: 'General Assembly',
		image:
			'https://media.licdn.com/dms/image/C4E03AQF1-tz0KC6ImQ/profile-displayphoto-shrink_800_800/0/1517440579749?e=1683763200&v=beta&t=m9CP5k2mIv2taZcLWS16_dGBoVFFleYGsQxlmcPpZBs',
	},
	{
		testimonial:
			'David was an absolute pleasure to work with throughout the planning and execution of the app we worked on. He has a very keen eye for creativity and design and played a crucial role in developing our overall look for our application and really brought it together. I continue to look to him for guidance on some projects I currently work on as he continues to elevate his skills. ',
		name: 'Jonathan Lane',
		designation: 'Software Developer',
		company: 'Journal Technologies',
		image:
			'https://media.licdn.com/dms/image/D5635AQGzIwGh48ewtA/profile-framedphoto-shrink_800_800/0/1634205356390?e=1678874400&v=beta&t=jMbt7nzKwZP1BZs7skv6JPQiJ1UScShB7kLshoYejbY',
	},
];

// red-text-gradient
// orange-text-gradient
// yellow-text-gradient
// green-text-gradient
// blue-text-gradient
// pink-text-gradient
// violet-text-gradient

const projects = [
	{
		name: 'COVID Tracker',
		source_code_link:
			'https://github.com/davesheinbein/covid-tracker',
		tags: [
			{ id: 1, name: 'React', color: 'blue-text-gradient' },
			{
				id: 2,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 3,
				name: 'Node.js',
				color: 'yellow-text-gradient',
			},
			{
				id: 4,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
			{ id: 5, name: 'CSS', color: 'blue-text-gradient' },
			{
				id: 6,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 7,
				name: 'Chart.js',
				color: 'pink-text-gradient',
			},
			{
				id: 8,
				name: 'React-leaflet',
				color: 'green-text-gradient',
			},
		],
		description:
			'Developed a web application that tracks global COVID-19 statistics and displays the data on a map using Chart.js, CSS, Firebase, HTML5, JavaScript, Node.js, Numeral, React, React-leaflet, and SCSS',
		live_link: 'https://covid-track-er.web.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?covid',
	},
	{
		name: 'Fakeflix Frontend UI',
		source_code_link:
			'https://github.com/davesheinbein/netflix-clone-ds',
		tags: [
			{
				id: 1,
				name: 'React',
				color: 'blue-text-gradient',
			},
			{ id: 2, name: 'CSS', color: 'blue-text-gradient' },
			{
				id: 3,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 4,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
			{
				id: 5,
				name: 'axios',
				color: 'pink-text-gradient',
			},
			{
				id: 6,
				name: 'movie-trailer',
				color: 'yellow-text-gradient',
			},
			{
				id: 7,
				name: 'react-youtube',
				color: 'green-text-gradient',
			},
		],
		description:
			'Developed a high-fidelity replica of the Netflix user interface using React, CSS, and HTML5, with data stored and retrieved from Firebase database. Utilized axios, movie-trailer, and react-youtube libraries to fetch and display movie trailers.',
		live_link: 'Not specified',
		image:
			'https://source.unsplash.com/random/1920x1080/?streaming',
	},
	{
		name: 'React Typescript Quiz App',
		source_code_link:
			'https://github.com/davesheinbein/react-quiz-typescript',
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{ id: 2, name: 'CSS', color: 'blue-text-gradient' },
			{ id: 3, name: 'React', color: 'blue-text-gradient' },
			{
				id: 4,
				name: 'TypeScript',
				color: 'orange-text-gradient',
			},
			{
				id: 5,
				name: 'API usage',
				color: 'pink-text-gradient',
			},
			{
				id: 6,
				name: 'Styled-Components',
				color: 'red-text-gradient',
			},
		],
		description:
			'Built a front-end trivia quiz application using React, TypeScript, and APIs.',
		live_link:
			'https://react-typescript-quiz-app.netlify.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?quiz',
	},
	{
		name: 'Fun Functionalities',
		source_code_link:
			'https://github.com/davesheinbein/fun-functionalities',
		tags: [
			{
				id: 1,
				name: 'React',
				color: 'blue-text-gradient',
			},
			{ id: 2, name: 'CSS', color: 'blue-text-gradient' },
			{
				id: 3,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 4,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 5,
				name: 'Framer',
				color: 'blue-text-gradient',
			},
			{
				id: 6,
				name: 'React-spring',
				color: 'pink-text-gradient',
			},
			{
				id: 7,
				name: 'React-Chatbot-Kit',
				color: 'green-text-gradient',
			},
			{
				id: 8,
				name: 'React-Motion',
				color: 'yellow-text-gradient',
			},
			{ id: 9, name: 'D3', color: 'orange-text-gradient' },
			{
				id: 10,
				name: 'Mongoose',
				color: 'green-text-gradient',
			},
			{
				id: 11,
				name: 'Cors',
				color: 'red-text-gradient',
			},
			{
				id: 12,
				name: 'Node.js',
				color: 'yellow-text-gradient',
			},
			{
				id: 13,
				name: 'Heroku',
				color: 'violet-text-gradient',
			},
			{
				id: 14,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
			{
				id: 15,
				name: 'Git',
				color: 'yellow-text-gradient',
			},
		],
		description:
			'An application that showcases various functionalities using various technologies.',
		live_link: 'https://fun-functionalities.web.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?fun',
	},
	{
		name: 'Mock Twitch UI Website',
		source_code_link:
			'https://github.com/davesheinbein/mock-twitch-ui',
		tags: [
			{
				id: 1,
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				name: 'CSS',
				color: 'blue-text-gradient',
			},
			{
				id: 3,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 4,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 5,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
		],
		description:
			'Designed and developed a high-fidelity mock front-end user interface for Twitch using React, CSS, and HTML5. The project leveraged Firebase to store and retrieve data.',
		live_link: 'https://mock-twitch-ui.web.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?gaming',
	},
	{
		name: 'Fake Amazon Mock UI',
		source_code_link:
			'https://github.com/davesheinbein/amazon-clone-ds',
		tags: [
			{ id: 1, name: 'React', color: 'blue-text-gradient' },
			{
				id: 2,
				name: 'Redux',
				color: 'violet-text-gradient',
			},
			{ id: 3, name: 'SASS', color: 'pink-text-gradient' },
			{
				id: 4,
				name: 'Stripe',
				color: 'blue-text-gradient',
			},
			{
				id: 5,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
			{ id: 6, name: 'Axios', color: 'pink-text-gradient' },
			{
				id: 7,
				name: 'Firebase database',
				color: 'red-text-gradient',
			},
			{
				id: 8,
				name: 'Firebase authentication',
				color: 'red-text-gradient',
			},
		],
		description:
			'A mock Amazon UI with payment processing and authentication functionality.',
		live_link: 'https://clone-ds.web.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?shopping',
	},
	{
		name: 'Healthy Restaurant Website',
		source_code_link:
			'https://github.com/davesheinbein/healthy-template',
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 2,
				name: 'CSS',
				color: 'blue-text-gradient',
			},
			{
				id: 3,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				name: 'Stripe',
				color: 'blue-text-gradient',
			},
			{
				id: 5,
				name: 'Context API',
				color: 'red-text-gradient',
			},
			{
				id: 6,
				name: 'Node.js',
				color: 'yellow-text-gradient',
			},
			{
				id: 7,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
		],
		description:
			'A business website for a healthy food restaurant with shopping cart and payment functionality.',
		live_link: 'https://healthy-template.web.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?food',
	},
	{
		name: 'LA Mountains Website',
		source_code_link:
			'https://github.com/davesheinbein/mountain-template',
		tags: [
			{
				id: 1,
				name: 'React',
				color: 'red-text-gradient',
			},
			{
				id: 2,
				name: 'CSS',
				color: 'blue-text-gradient',
			},
			{
				id: 3,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 4,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 5,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
		],
		description:
			'A business website for Los Angeles mountains.',
		live_link: 'https://mountain-template.web.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?mountains',
	},
	{
		name: 'Single Page Template',
		source_code_link:
			'https://github.com/davesheinbein/single-page-template',
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{ id: 2, name: 'CSS', color: 'blue-text-gradient' },
			{
				id: 3,
				name: 'SASS',
				color: 'pink-text-gradient',
			},
			{
				id: 4,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 5,
				name: 'Node.js',
				color: 'yellow-text-gradient',
			},
			{
				id: 6,
				name: 'Firebase',
				color: 'red-text-gradient',
			},
			{ id: 7, name: 'Git', color: 'yellow-text-gradient' },
			{
				id: 8,
				name: 'Github',
				color: 'yellow-text-gradient',
			},
		],
		description:
			'Developed a customizable and responsive single-page business website template for Los Angeles mountains using HTML5, CSS, SASS, and JavaScript. The template is easy to modify and includes features such as a responsive navigation menu, image carousel, and contact form. The project was built using Node.js and deployed on Firebase. Git and Github were used for version control and collaboration.',
		live_link:
			'https://single-page-template-928d4.web.app/',
		image:
			'https://source.unsplash.com/random/1920x1080/?computer-programming',
	},
	{
		name: 'Undraw SVG Animation',
		description:
			'SVG animation using CSS. Can be applied to any image or SVG.',
		source_code_link:
			'https://github.com/davesheinbein/svg-animation',
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 2,
				name: 'CSS',
				color: 'blue-text-gradient',
			},
			{
				id: 3,
				name: 'Git',
				color: 'yellow-text-gradient',
			},
			{
				id: 4,
				name: 'Github',
				color: 'yellow-text-gradient',
			},
			{
				id: 5,
				name: 'GithubPages',
				color: 'green-text-gradient',
			},
		],
		live_link:
			'https://davesheinbein.github.io/svg-animation/',
		image:
			'https://source.unsplash.com/random/1920x1080/?animation',
	},
	{
		name: 'Steed Finder',
		description:
			'A website that showcases RESTful routes, CRUD functionality, and JWT login. Functions as a peer to peer marketplace and message board for horse sellers and buyers.',
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 2,
				name: 'CSS',
				color: 'blue-text-gradient',
			},
			{
				id: 3,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				name: 'Mongoose',
				color: 'green-text-gradient',
			},
			{
				id: 5,
				name: 'MongoDB',
				color: 'orange-text-gradient',
			},
			{
				id: 6,
				name: 'MongoDB Atlas',
				color: 'yellow-text-gradient',
			},
			{
				id: 7,
				name: 'Node.js',
				color: 'yellow-text-gradient',
			},
			{
				id: 8,
				name: 'Express',
				color: 'green-text-gradient',
			},
			{
				id: 9,
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				id: 10,
				name: 'Google Fonts',
				color: 'yellow-text-gradient',
			},
			{
				id: 11,
				name: 'Font Awesome',
				color: 'orange-text-gradient',
			},
			{
				id: 12,
				name: 'Postman',
				color: 'green-text-gradient',
			},
			{
				id: 13,
				name: 'Heroku',
				color: 'violet-text-gradient',
			},
		],
		github_link:
			'https://github.com/davesheinbein/steed-finder-horse-bulliten-board',
		live_link: '',
		image:
			'https://source.unsplash.com/random/1920x1080/?horses',
	},
	{
		name: 'Inspirations Website',
		description:
			'A website where people can post gifs or videos and add comments and ratings. Allows users to favorite and remove creatives from favorites.',
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{ id: 2, name: 'CSS', color: 'blue-text-gradient' },
			{
				id: 3,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				name: 'Mongoose',
				color: 'green-text-gradient',
			},
			{
				id: 5,
				name: 'MongoDB',
				color: 'orange-text-gradient',
			},
			{
				id: 6,
				name: 'MongoDB Atlas',
				color: 'yellow-text-gradient',
			},
			{
				id: 7,
				name: 'Node.js',
				color: 'yellow-text-gradient',
			},
			{
				id: 8,
				name: 'Express',
				color: 'green-text-gradient',
			},
			{
				id: 9,
				name: 'Postman',
				color: 'green-text-gradient',
			},
			{
				id: 10,
				name: 'Heroku',
				color: 'violet-text-gradient',
			},
			{
				id: 11,
				name: 'Google Fonts',
				color: 'yellow-text-gradient',
			},
		],
		source_code_link:
			'https://github.com/davesheinbein/inspirations',
		live_link: '',
		image:
			'https://source.unsplash.com/random/1920x1080/?inspired',
	},
	{
		name: 'TwistsOfRate',
		description:
			'A gaming website where people can find information and post reviews about the latest games. Utilizes an API to access current information about games.',
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 2,
				name: 'CSS',
				color: 'blue-text-gradient',
			},
			{
				id: 3,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				name: 'Python3',
				color: 'orange-text-gradient',
			},
			{
				id: 5,
				name: 'Django',
				color: 'orange-text-gradient',
			},
			{
				id: 6,
				name: 'PostgreSQL',
				color: 'orange-text-gradient',
			},
			{
				id: 7,
				name: 'GitHub',
				color: 'yellow-text-gradient',
			},
			{
				id: 8,
				name: 'Heroku',
				color: 'violet-text-gradient',
			},
			{
				id: 9,
				name: 'Materialize',
				color: 'orange-text-gradient',
			},
			{
				id: 10,
				name: 'AWS',
				color: 'orange-text-gradient',
			},
			{
				id: 11,
				name: 'Google Fonts',
				color: 'yellow-text-gradient',
			},
		],
		source_code_link:
			'https://github.com/davesheinbein/TwistsOfRate',
		live_link: '',
		image:
			'https://source.unsplash.com/random/1920x1080/?gaming',
	},
	{
		name: 'War Game',
		description:
			"A game where players turn up cards and the player with the higher card takes both cards and puts them face down on their stack. If the cards are the same rank, it's War.",
		tags: [
			{
				id: 1,
				name: 'HTML5',
				color: 'violet-text-gradient',
			},
			{
				id: 2,
				name: 'CSS',
				color: 'blue-text-gradient',
			},
			{
				id: 3,
				name: 'JavaScript',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				name: 'Git',
				color: 'yellow-text-gradient',
			},
			{
				id: 5,
				name: 'Github',
				color: 'yellow-text-gradient',
			},
			{
				id: 6,
				name: 'Github Pages',
				color: 'orange-text-gradient',
			},
		],
		source_code_link:
			'https://github.com/davesheinbein/War-game',
		live_link: 'https://davesheinbein.github.io/War-game/',
		image:
			'https://source.unsplash.com/random/1920x1080/?war',
	},
];

const skillsData = [
	{
		id: 1,
		text: 'Animations',
		value: 1,
		description:
			'Techniques and tools for creating movement and motion graphics in web design.',
	},
	{
		id: 2,
		text: 'Axios',
		value: 1,
		description:
			'A Promise-based HTTP client for JavaScript, used to make API calls from the client-side of an application.',
	},
	{
		id: 3,
		text: 'Nodemailer',
		value: 1,
		description:
			'A module for Node.js applications used to send email messages.',
	},
	{
		id: 4,
		text: 'Sendgrid',
		value: 1,
		description:
			'A cloud-based email delivery and management service used to send transactional and marketing emails.',
	},
	{
		id: 5,
		text: 'D3',
		value: 1,
		description:
			'A JavaScript library for manipulating documents based on data. It is used to create dynamic and interactive data visualizations in web browsers.',
	},
	{
		id: 6,
		text: 'React-Motion',
		value: 1,
		description:
			'A physics-based animation library for React applications.',
	},
	{
		id: 7,
		text: 'React-Chatbot-Kit',
		value: 1,
		description:
			'A comprehensive and flexible chatbot library for React applications.',
	},
	{
		id: 8,
		text: 'Framer',
		value: 1,
		description:
			'A prototyping and design tool used to create interactive and animated user interface designs.',
	},
	{
		id: 9,
		text: 'HTML5',
		value: 10,
		description:
			'The latest version of the Hypertext Markup Language used for creating content on the World Wide Web.',
	},
	{
		id: 10,
		text: 'CSS',
		value: 10,
		description:
			'A style sheet language used for describing the presentation of a document written in HTML or XML.',
	},
	{
		id: 11,
		text: 'SASS',
		value: 4,
		description:
			'A CSS preprocessor that adds advanced features like variables, nesting, and mixins to standard CSS.',
	},
	{
		id: 12,
		text: 'SCSS',
		value: 10,
		description:
			'A variant of the SASS preprocessor with a syntax similar to CSS, making it easier for developers to adopt.',
	},
	{
		id: 13,
		text: 'JavaScript',
		value: 8,
		description:
			'A high-level programming language used for web development, among other applications.',
	},
	{
		id: 14,
		text: 'Express',
		value: 3,
		description:
			'A fast and flexible web application framework for Node.js.',
	},
	{
		id: 15,
		text: 'Node.js',
		value: 7,
		description:
			"A JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side.",
	},
	{
		id: 16,
		text: 'Django',
		value: 3,
		description:
			'A high-level Python web framework that follows the model-template-view architectural pattern.',
	},
	{
		id: 17,
		text: 'Python',
		value: 4,
		description:
			'A high-level programming language used for web development, scientific computing, data analysis, artificial intelligence, and many other applications.',
	},
	{
		id: 18,
		text: 'PostgreSQL',
		value: 3,
		description:
			'A powerful, open-source object-relational database system that uses and extends the SQL language.',
	},
	{
		id: 19,
		text: 'React',
		value: 10,
		description:
			'A JavaScript library for building user interfaces.',
	},
	{
		id: 20,
		text: 'React-spring',
		value: 6,
		description:
			'A spring-physics based animation library for React applications.',
	},
	{
		id: 21,
		text: 'Styled-Components',
		value: 3,
		description:
			'A CSS-in-JS library that allows developers to write actual CSS code to style components.',
	},
	{
		id: 22,
		text: 'MongoDB',
		value: 7,
		description:
			'A cross-platform document-oriented NoSQL database program that uses a document-oriented data model to store data.',
	},
	{
		id: 23,
		text: 'Mongoose',
		value: 3,
		description:
			'A MongoDB object modeling tool designed to work in an asynchronous environment.',
	},
	{
		id: 24,
		text: 'MongoDB Atlas',
		value: 2,
		description:
			'A fully-managed cloud database service for modern applications.',
	},
	{
		id: 25,
		text: 'Postman',
		value: 2,
		description:
			'A collaboration platform for API development that allows developers to design, test, and document APIs.',
	},
	{
		id: 26,
		text: 'Firebase',
		value: 3,
		description:
			'A mobile and web application development platform that provides developers with a range of tools and services to help them develop high-quality apps.',
	},
	{
		id: 27,
		text: 'AWS',
		value: 5,
		description:
			'Amazon Web Services is a cloud platform that provides a range of services for developing and deploying web applications.',
	},
	{
		id: 28,
		text: 'Third-Party APIs',
		value: 6,
		description:
			'Application Programming Interfaces (APIs) provided by third-party companies or organizations that allow developers to integrate their services into their own applications.',
	},
	{
		id: 29,
		text: 'Git',
		value: 8,
		description:
			'A free and open-source distributed version control system used for tracking changes in source code during software development.',
	},
	{
		id: 30,
		text: 'GitHub',
		value: 8,
		description:
			'A web-based hosting service for version control using git',
	},
	{
		id: 31,
		text: 'Angular',
		value: 5,
		description:
			'A TypeScript-based open-source web application framework used for building single-page applications',
	},
	{
		id: 32,
		text: 'Django',
		value: 2,
		description:
			'A high-level Python web framework that enables the rapid development of secure and maintainable websites',
	},
	{
		id: 33,
		text: 'Netlify',
		value: 2,
		description:
			'A cloud computing company that offers hosting and serverless backend services for static websites and web applications',
	},
	{
		id: 34,
		text: 'Jest',
		value: 3,
		description:
			'A JavaScript testing framework used for unit testing, integration testing, and other types of tests',
	},
	{
		id: 35,
		text: 'Jenkins',
		value: 4,
		description:
			'An open-source automation server that enables the building, testing, and deployment of software',
	},
	{
		id: 36,
		text: 'Docker',
		value: 4,
		description:
			'A platform that enables developers to easily create, deploy, and run applications in containers',
	},
	{
		id: 37,
		text: 'Scheduling',
		value: 6,
		description:
			'The process of planning and managing tasks or events according to a timeline or schedule',
	},
	{
		id: 38,
		text: 'Timeline Management',
		value: 6,
		description:
			'The process of organizing and managing events or tasks according to a timeline or schedule',
	},
	{
		id: 39,
		text: 'Outreach',
		value: 10,
		description:
			'The process of reaching out to potential customers or clients in order to promote a product or service',
	},
	{
		id: 40,
		text: 'Outreach Strategy',
		value: 6,
		description:
			'A plan for reaching out to potential customers or clients in order to promote a product or service',
	},
	{
		id: 41,
		text: 'Outreach Management',
		value: 7,
		description:
			'The process of managing the outreach efforts of a team or organization',
	},
	{
		id: 42,
		text: 'Marketing',
		value: 7,
		description:
			'The process of promoting and selling products or services',
	},
	{
		id: 43,
		text: 'Marketing Strategy',
		value: 5,
		description:
			'A plan for promoting and selling products or services',
	},
	{
		id: 44,
		text: 'Research',
		value: 10,
		description:
			'The process of gathering and analyzing information in order to gain knowledge and understanding about a particular topic',
	},
	{
		id: 45,
		text: 'Microsoft Office Suite',
		value: 6,
		description:
			'A collection of productivity applications developed by Microsoft that includes Word, Excel, PowerPoint, and more',
	},
	{
		id: 46,
		text: 'Teamwork',
		value: 10,
		description:
			'The process of working collaboratively with others to achieve a common goal',
	},
	{
		id: 47,
		text: 'Collaboration',
		value: 7,
		description:
			'The process of working together with others to achieve a common goal',
	},
	{
		id: 48,
		text: 'Communication',
		value: 10,
		description:
			'The process of exchanging information and ideas between individuals or groups',
	},
	{
		id: 49,
		text: 'Leadership',
		value: 8,
		description:
			'The ability to guide and direct a team towards a common goal.',
	},
	{
		id: 50,
		text: 'Problem Solving',
		value: 7,
		description:
			'The skill of finding solutions to complex or difficult issues.',
	},
	{
		id: 51,
		text: 'Time Management',
		value: 3,
		description:
			'The ability to prioritize and organize tasks to complete them efficiently and effectively.',
	},
	{
		id: 52,
		text: 'Organization',
		value: 5,
		description:
			'The ability to keep track of multiple tasks and maintain order in a work environment.',
	},
	{
		id: 53,
		text: 'Project Management',
		value: 5,
		description:
			'The process of planning, organizing, and overseeing tasks to complete a project on time and within budget.',
	},
	{
		id: 54,
		text: 'Agile',
		value: 6,
		description:
			'A project management methodology that emphasizes flexibility, collaboration, and continuous improvement.',
	},
	{
		id: 55,
		text: 'Scrum',
		value: 4,
		description:
			'An Agile framework that involves iterative development cycles and a focus on teamwork and communication.',
	},
	{
		id: 56,
		text: 'Kanban',
		value: 3,
		description:
			'An Agile framework that emphasizes visualization and limiting work in progress to improve efficiency.',
	},
	{
		id: 57,
		text: 'Trello',
		value: 6,
		description:
			'A web-based project management tool that allows users to organize tasks on a board.',
	},
	{
		id: 58,
		text: 'Jira',
		value: 8,
		description:
			'A popular project management tool that allows users to plan, track, and manage tasks and issues.',
	},
	{
		id: 59,
		text: 'Slack',
		value: 5,
		description:
			'A messaging platform that enables team communication and collaboration.',
	},
	{
		id: 60,
		text: 'Zoom',
		value: 4,
		description:
			'A video conferencing tool that enables remote communication and collaboration.',
	},
	{
		id: 61,
		text: 'Google Meet',
		value: 4,
		description:
			'A video conferencing tool provided by Google that enables remote communication and collaboration.',
	},
	{
		id: 62,
		text: 'Google Docs',
		value: 6,
		description:
			'A suite of web-based word processing tools that allow users to create, edit, and collaborate on documents.',
	},
	{
		id: 63,
		text: 'Google Sheets',
		value: 7,
		description:
			'A suite of web-based spreadsheet tools that allow users to create, edit, and collaborate on spreadsheets.',
	},
	{
		id: 64,
		text: 'Google Slides',
		value: 2,
		description:
			'A suite of web-based presentation tools that allow users to create, edit, and collaborate on presentations.',
	},
	{
		id: 65,
		text: 'Google Calendar',
		value: 2,
		description:
			'A web-based calendar application developed by Google.',
	},
	{
		id: 66,
		text: 'Google Drive',
		value: 2,
		description:
			'A cloud storage and collaboration platform developed by Google.',
	},
	{
		id: 67,
		text: 'Google Analytics',
		value: 1,
		description:
			'A web analytics service that tracks and reports website traffic.',
	},
	{
		id: 68,
		text: 'Google Tag Manager',
		value: 1,
		description:
			'A tag management system that allows marketers to easily update tracking codes and related code fragments (or tags) on their website or mobile app.',
	},
	{
		id: 69,
		text: 'Google Ads',
		value: 1,
		description:
			"A digital advertising platform developed by Google that allows businesses to create ads that appear on Google's search results pages, YouTube, and other websites.",
	},
	{
		id: 70,
		text: 'Google Adwords',
		value: 1,
		description:
			"A former name for Google Ads, Google's digital advertising platform.",
	},
	{
		id: 71,
		text: 'RESTful APIs',
		value: 6,
		description:
			'An architectural style for building web services that allows users to interact with a server through HTTP requests.',
	},
	{
		id: 72,
		text: 'OAuth2',
		value: 2,
		description:
			"An authorization protocol that allows third-party applications to access a user's data without requiring the user to give their login credentials to the third-party application.",
	},
	{
		id: 73,
		text: 'Webpack',
		value: 4,
		description:
			'A module bundler for JavaScript applications that processes modules with dependencies and generates static assets representing those modules.',
	},
	{
		id: 74,
		text: 'JSON Web Tokens (JWT)',
		value: 3,
		description:
			'A standard for securely transmitting information between parties as a JSON object.',
	},
	{
		id: 75,
		text: 'Heroku',
		value: 4,
		description:
			'A cloud platform as a service (PaaS) that allows developers to build, run, and operate applications entirely in the cloud.',
	},
];

export {
	skillsData,
	services,
	technologies,
	experiences,
	testimonials,
	projects,
};
