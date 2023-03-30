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

const blogData = [
	{
		id: 1,
		title:
			'Building a Covid-19 Tracker with React, Node.js, and Firebase',
		author: 'David Sheinbein',
		date: '09/23/2022',
		content:
			'In the midst of the Covid-19 pandemic, keeping track of the latest statistics and information on the virus has become increasingly important. In response to this need, we developed a web application called Covid Tracker that tracks global Covid-19 statistics and displays the data on a map using a variety of technologies.\n\n The Covid Tracker was built using React for the frontend, Node.js for the backend, and Firebase for data storage and real-time updates. We also utilized chart.js for data visualization, CSS and HTML for styling, and react-leaflet for the interactive map features. \n\n One of the challenges we faced while building the Covid Tracker was finding a way to display a large amount of data in a visually appealing and intuitive manner. To solve this problem, we used chart.js to create dynamic and interactive charts that made it easy for users to understand the data. We also incorporated CSS and HTML to create a clean and modern user interface. \n\n Another challenge we faced was ensuring that the data displayed on the map was always up-to-date. To accomplish this, we utilized Firebase to store and update the data in real-time. This ensured that users were always viewing the most recent data available. \n\n One of the most notable features of the Covid Tracker is its interactive map, which allows users to view statistics for different regions around the world. This feature was implemented using react-leaflet, which made it easy to integrate the map with the data from Firebase. \n\n Overall, the Covid Tracker demonstrates our expertise in frontend technologies such as React and JavaScript, as well as back-end technologies such as Node.js and Firebase. We were able to create a visually appealing and intuitive user interface using CSS and HTML, and implemented real-time data updates and interactive map features using chart.js and react-leaflet. \n\n The project is open-source and available on Github https://github.com/davesheinbein/covid-tracker \n\n If you want to track the latest Covid-19 statistics and view them on an interactive map, be sure to check out the Covid Tracker.',
		image:
			'https://source.unsplash.com/random/1920x1080/?Covid-19',
	},
	{
		id: 2,
		title:
			'Building a Netflix Clone UI with HTML, CSS, and JavaScript',
		author: 'David Sheinbein',
		date: '07/03/2022',
		content:
			"In this project, we set out to replicate the user interface of the popular streaming platform, Netflix, using HTML, CSS, and JavaScript. Our goal was to create a replica that closely resembled the original while also showcasing our ability to create complex and responsive designs. \n\n The project began with a thorough analysis of the Netflix interface, paying attention to the details of the layout, typography, colors, and interactive elements. We then set out to replicate the design using HTML and CSS, focusing on creating a responsive design that would adapt to different screen sizes. \n\n One of the challenges we faced while building the replica was replicating the interactive features of the original interface. To overcome this, we used jQuery to implement hover effects and modal windows. This allowed us to create a more engaging and interactive user experience. \n\n Another challenge we faced was ensuring that the design was as close to the original as possible. To achieve this, we paid close attention to the details and made sure that everything was pixel-perfect. \n\n The result of our efforts is a replica of the Netflix user interface that closely resembles the original. The layout, typography, colors, and interactive elements are all accurate to the real Netflix, and the responsive design makes it accessible on any device. \n\n Overall, this project demonstrates our strong understanding of responsive design principles and our ability to replicate complex UI designs. Our use of jQuery to implement interactive features such as hover effects and modal windows also showcases our ability to create engaging and interactive user experiences. \n\n The project is open-source and available on Github https://github.com/davesheinbein/netflix-clone-ds \n\n If you're looking for a great example of a UI replica that closely resembles the original, be sure to check out our Netflix clone UI.",
		image:
			'https://source.unsplash.com/random/1920x1080/?computer-code',
	},
	{
		id: 3,
		title:
			'Building an iMessage Clone UI with HTML, CSS, and JavaScript',
		author: 'David Sheinbein',
		date: '05/10/2022',
		content:
			"In this project, we set out to replicate the user interface of the popular messaging app, iMessage, using HTML, CSS, and JavaScript. Our goal was to create a replica that closely resembled the original while also showcasing our ability to create complex and responsive designs. \n\n The project began with a thorough analysis of the iMessage interface, paying attention to the details of the layout, typography, colors, and interactive elements. We then set out to replicate the design using HTML and CSS, focusing on creating a responsive design that would adapt to different screen sizes. \n\n One of the challenges we faced while building the replica was replicating the interactive features of the original interface. To overcome this, we used jQuery to implement hover effects, text input, and message sending functionality, which allowed us to create a more engaging and interactive user experience. \n\n Another challenge we faced was ensuring that the design was as close to the original as possible. To achieve this, we paid close attention to the details and made sure that everything was pixel-perfect. \n\n The result of our efforts is a replica of the iMessage user interface that closely resembles the original. The layout, typography, colors, and interactive elements are all accurate to the real iMessage, and the responsive design makes it accessible on any device. \n\n Overall, this project demonstrates our proficiency in frontend technologies such as HTML, CSS, and JavaScript, as well as our problem-solving and analytical skills. Our use of jQuery to implement interactive features such as hover effects, text input, and message sending functionality also showcases our ability to create engaging and interactive user experiences. Additionally, our visually appealing and intuitive user interface created using CSS and HTML were able to engage users. \n\n The project is open-source and available on Github https://github.com/davesheinbein/i-message-clone-ui \n\n If you're looking for a great example of a UI replica that closely resembles the original, be sure to check out our iMessage clone UI.",
		image:
			'https://source.unsplash.com/random/1920x1080/?messages',
	},
	{
		id: 4,
		title:
			'Building a Spotify Clone UI with HTML, CSS, and JavaScript',
		author: 'David Sheinbein',
		date: '07/04/2022',
		content:
			'In this project, we set out to replicate the user interface of the popular music streaming platform, Spotify, using HTML, CSS, and JavaScript. Our goal was to create a replica that closely resembled the original while also showcasing our ability to create complex and responsive designs. \n\n The project began with a thorough analysis of the Spotify interface, paying attention to the details of the layout, typography, colors, and interactive elements. We then set out to replicate the design using HTML and CSS, focusing on creating a responsive design that would adapt to different screen sizes. \n\n One of the challenges we faced while building the replica was replicating the interactive features of the original interface. To overcome this, we used jQuery to implement hover effects, text input, and song playing functionality, which allowed us to create a more engaging and interactive user experience. \n\n Another challenge we faced was ensuring that the design was as close to the original as possible. To achieve this, we paid close attention to the details and made sure that everything was pixel-perfect. \n\n The result of our efforts is a replica of the Spotify user interface that closely resembles the original. The layout, typography, colors, and interactive elements are all accurate to the real Spotify, and the responsive design makes it accessible on any device. \n\n Overall, this project demonstrates our proficiency in frontend technologies such as HTML, CSS, and JavaScript, as well as our problem-solving and analytical skills. Our use of jQuery to implement interactive features such as hover effects, text input, and song playing functionality also showcases our ability to create engaging and interactive user experiences. Additionally, our visually appealing and intuitive user interface created using CSS and HTML were able to engage users. \n\n The project is open-source and available on Github',
		image:
			'https://source.unsplash.com/random/1920x1080/?music',
	},
	{
		id: 5,
		title:
			'Building Fun Functionalities with HTML, CSS, and JavaScript',
		author: 'David Sheinbein',
		date: '09/23/2022',
		content:
			"In this project, we set out to create a web application that showcases various interactive frontend features using HTML, CSS, and JavaScript. The goal of the project was to demonstrate our proficiency in frontend technologies and our problem-solving and analytical skills. \n\n The Fun Functionalities web application includes various features such as a to-do list, a calculator, and a random quote generator. These features were implemented using DOM manipulation and event listeners, allowing for a dynamic and interactive user experience. \n\n One of the challenges we faced while building the application was ensuring that the features were intuitive and easy to use. To overcome this, we paid close attention to the user interface and made sure that it was visually appealing and easy to navigate. We used CSS and HTML to create a clean and modern design that made it easy for users to understand how to use the features. \n\n Another challenge we faced was implementing the various features in a way that was efficient and easy to maintain. To accomplish this, we used DOM manipulation and event listeners, which allowed us to create a dynamic and interactive user experience. \n\n The result of our efforts is a web application that demonstrates our proficiency in frontend technologies such as HTML, CSS, and JavaScript, as well as our problem-solving and analytical skills. The application includes various interactive features such as a to-do list, a calculator, and a random quote generator, which were implemented using DOM manipulation and event listeners, making it easy for users to navigate and use the features. \n\n The project is open-source and available on Github https://github.com/davesheinbein/fun-functionalities \n\n If you're looking for a great example of a web application that showcases various interactive frontend features, be sure to check out Fun Functionalities.",
		image:
			'https://source.unsplash.com/random/1920x1080/?fun-programming',
	},
	{
		id: 6,
		title:
			'Building Your First React Application - A Step-by-Step Guide',
		author: 'David Sheinbein',
		date: '11/04/2022',
		content:
			"React is a popular JavaScript library for building user interfaces, and it's a great choice for building dynamic and interactive web applications. In this tutorial, we'll walk you through the beginning steps of creating a React application, from setting up your development environment to deploying your finished product. \n\n Step 1: Setting up the Development Environment \n\n The first step in creating a React application is setting up your development environment. This includes installing Node.js, which is required to run JavaScript on the server, as well as a package manager like npm or yarn. You can download Node.js from the official website, and it comes with npm, or you can use yarn which is an alternative package manager. \n\n Step 2: Initializing the Project \n Once your development environment is set up, you'll need to create a new directory for your project and initialize it using npm or yarn. This will create a package.json file, which contains information about your project and its dependencies. To initialize the project, you can use the command: \n\n Copy code \n npm init \n or \n Copy code \n yarn init \n Step 3: Installing React and React-related Packages \n Next, you'll need to install React and React DOM, which are the core libraries for building React applications. You can do this by running the following command: \n\n Copy code \n npm install react react-dom \n or \n Copy code \n yarn add react react-dom \n You will also need to install other packages such as webpack and babel, which are needed for building and transpiling the application. You can install them by running this command: \n\n Copy code \n npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react \n or \n Copy code \n yarn add webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react \n Step 4: Creating the File Structure \n Now it's time to create the file structure for your project. This includes creating the main entry point of the application, index.js, and setting up the file structure for the project, including the components, styles, and other necessary files. You can use the following file structure as a starting point: \n\n Copy code \n - src - components - styles - index.js - package.json - webpack.config.js \n Step 5: Setting up Webpack \n Webpack is a tool that helps you bundle your application's files and assets for production or development. You'll need to configure webpack to work with your project by creating a webpack.config.js file in the root of your project. This file will contain the configuration for webpack, and it will tell it where to find the entry point of your application and how to bundle the files. \n\n Step 6: Starting the Development Server \n With your development environment set up, your project initialized, and the file structure created, it's time to start the development server. You can use npm or yarn scripts to start a development server, which will automatically reload the application when any changes are made to the code. You can use this command to start the development server: \n\n Copy code \n npm run start \n or \n Copy code \n yarn start \n Step 7: Building the Components \n Now it's time to start building the components that make up the user interface of your application using React's JSX syntax and JavaScript logic. This is the main step of creating a React application, and it's where you'll create the different components that make up your user interface. You can start by creating a simple component such as a button or a header, and then move on to more complex components as you become more comfortable with React. \n\n Step 8: Testing and Debugging \n Once you've built your components, it's important to test your application and debug any issues that arise. This can be done by running test cases on your application, and debugging any errors that come up. You can use tools such as Jest or Enzyme for testing and debugging. \n\n Step 9: Deployment \n Finally, it's time to bundle your application for production and deploy it to a web server or hosting service. This can be done by running the following command: \n\n Copy code \n npm run build \n or \n Copy code \n yarn build \n This command will bundle your application and create a build directory that you can deploy to your web server or hosting service. \n\n Note that this is a general overview of the beginning steps of creating a React application. There are many other steps involved in creating a React application, such as setting up a development server, testing, and debugging, but this tutorial should give you a good idea of how to get started.",
		image:
			'https://source.unsplash.com/random/1920x1080/?technical-tutorial',
	},
	{
		id: 7,
		title:
			'Never Too Late to Start: My Journey from Marketer to Software Engineer',
		author: 'David Sheinbein',
		date: '02/26/2023',
		content:
			"Have you ever felt like you were stuck in a job that didn't fulfill your passion or purpose? Maybe you've been dreaming of a career change, but the idea seems daunting, and you don't know where to start. If you're in that position, let me tell you my story. My name is David Sheinbein, and I made a career change from a marketer to a software engineer.\n\nIt all started during my time as a media production student, where I took programming classes that introduced me to the world of coding. I found it fascinating but never pursued it as a career until later when I was working as a marketer. I wanted to specialize further in creating single-page landing pages, so I decided to attend an accelerated bootcamp to develop my programming skills.\n\nThe bootcamp was an excellent starting point for me, but I quickly realized that to become a proficient software engineer, I needed to continue to program, network, and explore new concepts. So, I started building projects, attending meetups, and talking to fellow developers. And you know what I found out? Programming is not a static field. There's always something new to learn, and technology is constantly evolving. So, it's essential to stay up-to-date and continuously improve your skills.\n\nAfter completing the bootcamp, I landed an internship at Superworld, where I was able to hone my skills further. The real challenge came when I started working during the global pandemic. Working remotely was different from any work setting I was previously accustomed to, but I found it to be an interesting and exciting challenge to overcome.\n\nFrom there, I transitioned to working at Internet Brands, where I've been for over two years now. The workload is different from my previous job, but when working with competent, intelligent individuals, everything runs smoothly and efficiently like a well-oiled machine. This transition has jump-started my career and sent me on an upward trajectory of consistent career growth.\n\nIf you're ever considering a career change similar to the one that I went through, my biggest advice would be to communicate with people who have done what you want to do before. Reach out to friends or relatives in those fields or industries and get their advice. If you have no contacts in the fields or want to make more, I suggest networking via platforms like LinkedIn and attending conferences and virtual seminars to learn from those who have come before you. Besides that, code a little bit every day. Pick a project, any project, and just start building. The project doesn't even need to have a larger purpose; it can be just to explore a new idea or look further into an old one. Just keep creating.\n\nTransitioning from a job as a marketer to a software engineer may seem like a big leap, but it's a journey that can be incredibly rewarding. If you have a passion for programming and are willing to put in the time and effort, it's never too late to start. I hope my story has inspired you to take the leap and pursue your dreams. Remember, with determination and hard work, anything is possible.",
		image:
			'https://source.unsplash.com/random/1920x1080/?technical-tutorial',
	},
	{
		id: 8,
		title:
			'Balancing Work and Life as a Remote Software Engineer',
		author: 'David Sheinbein',
		date: '02/26/2023',
		content:
			"As a remote software engineer, I can say that finding a work-life balance can be quite challenging. With no clear boundaries between work and personal time, it's easy to lose track of both. However, over time, I've learned to strike a balance, and in this article, I'll share some of the strategies that have worked for me.\n\nFirstly, I have a dedicated workspace in my home, which I use exclusively for work. This helps me get into a work mindset and stay focused during my work hours. Similarly, when my workday is over, I leave my workspace and mentally shift to my personal time.\n\nAnother strategy I use is to set clear boundaries with my team members and clients. I have set work hours, and I make it clear that I won't be available outside of those hours unless it's an emergency. This allows me to have control over my personal time and ensures that I don't burn out.\n\nLastly, I make sure to schedule breaks throughout my day. These breaks could be as simple as taking a walk or doing a quick workout. They help me stay energized and focused throughout the day.\n\nBalancing work and life as a remote software engineer can be challenging, but with a few strategies and a bit of discipline, it's possible to find a balance that works for you.",
		image:
			'https://source.unsplash.com/random/1920x1080/?balance',
	},
	{
		id: 9,
		title:
			'Overcoming Imposter Syndrome as a New Software Engineer',
		author: 'David Sheinbein',
		date: '10/26/2022',
		content:
			"When I first started as a software engineer, I struggled with imposter syndrome. I felt like I didn't know enough and that I didn't belong in the industry. However, over time, I've learned to overcome these feelings, and in this article, I'll share some strategies that have helped me.\n\nFirstly, I've learned to accept that I don't know everything, and that's okay. Instead of feeling inadequate, I've learned to view it as an opportunity to learn and grow. I take on projects that challenge me, and I ask my colleagues for help when I need it. This has helped me gain confidence in my abilities as a software engineer.\n\nAnother strategy that has helped me is to celebrate my successes, no matter how small. It's easy to focus on our failures, but celebrating our successes can help us build confidence and combat imposter syndrome.\n\nLastly, I've learned to remind myself that everyone makes mistakes, and that's part of the learning process. By accepting that mistakes are inevitable, I've been able to approach my work with a growth mindset, and I've been able to learn and improve.\n\nOvercoming imposter syndrome as a new software engineer is possible. By accepting that we don't know everything, celebrating our successes, and embracing our mistakes, we can build confidence and thrive in the industry.",
		image:
			'https://source.unsplash.com/random/1920x1080/?imposter',
	},
	{
		id: 10,
		title:
			'How to Balance Learning and Working in a Fast-Paced Tech Environment',
		author: 'David Sheinbein',
		date: '12/14/2023',
		content:
			"As a software engineer, staying up-to-date with the latest technologies and skills is crucial. But how do you balance learning and working in a fast-paced tech environment? Here are some tips based on my personal experience.\n\nFirst, set realistic goals. It's easy to get overwhelmed with the amount of information available, but setting specific goals can help you focus your learning. For example, if you want to learn a new programming language, start with the basics and gradually work your way up. Don't try to learn everything at once.\n\nSecond, make time for learning. It's important to prioritize learning, even if it means sacrificing some free time. You can try allocating a specific time each day or week for learning, or take advantage of any downtime during work, such as commuting or breaks.\n\nThird, use resources that work best for you. There are plenty of resources available, such as online courses, books, and tutorials, but not all of them will be effective for your learning style. Experiment with different resources until you find what works best for you.\n\nFinally, don't forget to apply what you learn. Learning new skills is great, but it's equally important to apply them in real-world situations. Look for opportunities to apply your new skills in your current work or personal projects.\n\nBy balancing learning and working effectively, you can stay competitive in a fast-paced tech environment.",
		image:
			'https://source.unsplash.com/random/1920x1080/?fast-paced',
	},
	{
		id: 11,
		title:
			'The Challenges and Rewards of Working Remotely in the Tech Industry',
		author: 'David Sheinbein',
		date: '06/08/2022',
		content:
			"Working remotely in the tech industry can be both challenging and rewarding. As someone who has worked remotely during the pandemic, I've experienced both sides of the coin.\n\nOne of the biggest challenges of working remotely is the lack of in-person interaction. It can be difficult to build relationships with colleagues and collaborate effectively when you're not in the same physical space. However, this challenge can be overcome with regular communication, both through video conferencing and messaging apps.\n\nAnother challenge is staying motivated and focused. Without the structure of a physical workplace, it can be easy to get distracted and lose productivity. But with the right mindset and tools, such as setting clear goals and using productivity apps, you can maintain focus and achieve your goals.\n\nDespite the challenges, working remotely can be incredibly rewarding. For one, it allows for a better work-life balance, as you have more flexibility to work around your personal schedule. It also eliminates the need for commuting, saving time and reducing stress.\n\nIn addition, working remotely can provide access to a wider range of job opportunities, regardless of geographical location. This means you can work with a team from all over the world and learn from different perspectives.\n\nOverall, while there are challenges to working remotely in the tech industry, the benefits and rewards make it a worthwhile and fulfilling experience.",
		image:
			'https://source.unsplash.com/random/1920x1080/?challenges',
	},
	{
		id: 12,
		title:
			'5 Tips for Transitioning from Marketing to Software Engineering',
		author: 'David Sheinbein',
		date: '06/02/2022',
		content:
			"Are you considering transitioning from marketing to software engineering? It may seem like a big leap, but with the right mindset and approach, it can be a smooth transition. As someone who made this career change, I wanted to share my top five tips for a successful transition.\n\nTake advantage of bootcamps and online resources: Join an accelerated bootcamp to develop your programming skills or take online courses to learn the fundamentals of coding. Sites like Codecademy, Udemy, and Pluralsight offer a wealth of resources for beginners and advanced programmers alike.\n\nBuild a portfolio of projects: Create a portfolio of projects that showcase your coding skills. It's a great way to demonstrate your expertise and stand out from other job applicants. You can also use these projects to continue learning and experimenting with new technologies.\n\nAttend networking events and conferences: Attend local tech meetups, conferences, and events to network with other software engineers and learn about new trends in the industry. It's an excellent way to meet people and learn from their experiences.\n\nLeverage your marketing experience: Your experience in marketing can be a huge asset in software engineering. You have a unique perspective on user experience, design, and how to create engaging content. Use this knowledge to your advantage and bring a fresh perspective to your work.\n\nBe patient and persistent: Learning to code and transitioning to a new career takes time and effort. Be patient with yourself and stay persistent in your pursuit. You may face obstacles and setbacks, but with dedication and perseverance, you can achieve your goals.\n\nMaking a career change is never easy, but with the right mindset and approach, it can be a rewarding experience. Follow these tips, and you'll be well on your way to becoming a successful software engineer.",
		image:
			'https://source.unsplash.com/random/1920x1080/?software-engineering',
	},
	{
		id: 13,
		title:
			'The Role of Soft Skills in the Tech Industry: Why Communication and Collaboration Matter',
		author: 'David Sheinbein',
		date: '09/15/2022',
		content:
			"As a software engineer, it's easy to focus solely on technical skills and forget about the importance of soft skills like communication and collaboration. However, I've learned firsthand that these skills are just as crucial as technical expertise.\n\nIn the tech industry, collaboration is essential. As software engineers, we work in teams to build products and solve complex problems. Communication is key to ensuring that everyone is on the same page and that projects are completed efficiently. The ability to work well with others and communicate effectively can make all the difference in the success of a project.\n\nFurthermore, the software we create is ultimately intended for users. It's essential to consider the user experience and create products that are intuitive and user-friendly. Soft skills like empathy and interpersonal communication help us understand our users' needs and create products that meet their expectations.\n\nAs someone who majored in Communications before transitioning to software engineering, I can attest to the importance of soft skills in the tech industry. Interpersonal skills like active listening, conflict resolution, and teamwork are essential to building relationships and fostering a positive work environment.\n\nIn conclusion, technical expertise is critical in the tech industry, but don't underestimate the importance of soft skills. Communication and collaboration are essential to the success of software engineering projects, and interpersonal skills are crucial for building positive relationships and creating user-friendly products.",
		image:
			'https://source.unsplash.com/random/1920x1080/?soft-skills',
	},
	{
		id: 14,
		title:
			'How Technology Bootcamps Can Give You the Edge You Need to Succeed in Your Tech Career',
		author: 'David Sheinbein',
		date: '09/15/2022',
		content:
			"As an Associate Frontend Developer, I have always been a firm believer that practical skills are the key to success in the field of technology. While traditional education programs provide a solid foundation in computer science, they often fall short in providing students with the hands-on experience necessary to excel in their chosen career paths. In fact, a recent YouTube video titled 'Stanford Computer Science is Broken' highlights the problems with computer science curricula, stating that they have little connection to the actual work that is done in the real world. \n\n This is where technology bootcamps come in. They are designed to provide students with the skills and experience they need to succeed in their chosen careers. Unlike traditional education programs, technology bootcamps provide targeted education and training that is directly related to students' fields of interest. They offer hands-on experience, allowing students to work on real-world projects and gain practical knowledge that is immediately applicable in the workforce. \n\n I attended the General Assembly BootCamp and can attest to the value of these programs. The BootCamp provided me with the necessary skills and experience to succeed as a frontend developer. I was able to work on real-world projects and gain practical knowledge that I could immediately apply in my job. \n\n In addition to attending the BootCamp, I am also continuing my education by learning three.js from Bruno Simon's three.js Journey program. This program is instrumental in furthering my understanding of the library and developing my skills in creating immersive 3D experiences. \n\n At SuperWorld, a crypto financial company, I was responsible for designing and maintaining the frontend for web and mobile applications. I was able to utilize my knowledge of HTML5, CSS, JavaScript, React, and other modern front-end technologies to optimize website performance and improve development workflow. Furthermore, I was able to utilize version control tools such as Git to manage code and collaborate with team members on development projects. Currently, at Internet Brands, I am developing and maintaining responsive websites using Angular and React frameworks. I have worked with various industry verticals, including health, travel, legal, and automotive, and have created responsive websites from scratch. I have also participated in user research, usability testing, and user feedback sessions to identify and address usability issues and improve the user experience of the website. \n\n In conclusion, technology bootcamps provide an invaluable resource for anyone looking to start or further their career in technology. They offer targeted education and hands-on experience that is directly related to the workforce, helping students gain the skills they need to succeed. With the dynamic nature of technology, it is essential to stay up to date with the latest technologies and best practices. Bootcamps provide the perfect platform to stay ahead of the curve and develop the skills that are in high demand by employers. \n\n References: \n\n - Stanford Computer Science is Broken. (2019, February 22). [Video]. YouTube. https://www.youtube.com/watch?v=4SiFgB1lGxw \n - General Assembly. (n.d.). General Assembly Bootcamp. https://generalassemb.ly/education/web-development-immersive/online",
		image:
			'https://source.unsplash.com/random/1920x1080/?software-engineering',
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
		date: 'November 2018 - May 2020',
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
	{
		testimonial:
			"David worked for me as an intern when he was still attending college. I was impressed with his ability to take directions and work independently. He's helped me a lot with research and he's a great asset to any organization.",
		name: 'Mellissa Tong',
		designation: 'Film & Video Director/Producer',
		company: 'DuckPunk Productions, Inc.',
		image:
			'https://media.licdn.com/dms/image/D5603AQEPyCGVsZt-Gw/profile-displayphoto-shrink_800_800/0/1668829392626?e=1684368000&v=beta&t=BCT_6yHeaCu8lx2_KvbURT-qEN8RyRVqR0SCPFj2JmA',
	},
];

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
	blogData,
	skillsData,
	services,
	technologies,
	experiences,
	testimonials,
	projects,
};
