export default defineEventHandler(() => {
	const projects = [
		{
			id: 1,
			name: "Real World E2E Testing",
			description:
        "This project is a real world E2E testing example using Playwright and TypeScript, with a focus on testing the application's core functionality. The tests are run in a CI/CD pipeline using GitHub Actions.",
			image: "",
			stack: [
				{
					id: 1,
					name: "Playwright",
					icon: "devicon-plain:playwright",
				},
				{
					id: 2,
					name: "TypeScript",
					icon: "mdi:language-typescript",
				},
				{
					id: 3,
					name: "GitHub Actions",
					icon: "simple-icons:githubactions",
				},
				{
					id: 4,
					name: "Node.js",
					icon: "mdi:nodejs",
				},
			],
			urls: [
				{
					id: 1,
					type: "Live Demo",
					url: "https://manoellvitor.github.io/realworld-assesment/",
				},
				{
					id: 2,
					type: "Git Repository",
					url: "https://github.com/manoellvitor/realworld-assesment",
				},
			],
		}, {
			id: 2,
			name: "Zombie Plus E2E Testing",
			description:
        "Automated testing project for the Zombie Plus system. Playwright is an open-source tool developed by Microsoft that revolutionizes web system test automation, offering an effective and highly reliable approach.",
			image: "",
			stack: [
				{
					id: 1,
					name: "Playwright",
					icon: "devicon-plain:playwright",
				},
				{
					id: 2,
					name: "Javascript",
					icon: "mdi:language-javascript",
				},
				{
					id: 3,
					name: "Node.js",
					icon: "mdi:nodejs",
				}, {
					id: 4,
					name: "Postgre SQL",
					icon: "cib:postgresql",
				},
			],
			urls: [
				{
					id: 1,
					type: "Live Demo",
					url: "https://manoellvitor.github.io/realworld-assesment/",
				},
				{
					id: 2,
					type: "Git Repository",
					url: "https://github.com/manoellvitor/realworld-assesment",
				},
			],
		},
	];

	return projects;
});
