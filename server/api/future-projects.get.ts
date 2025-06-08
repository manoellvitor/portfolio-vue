export default defineEventHandler(() => {
	const futureProject = [
		{
			id: 1,
			name: "Test Tracker v2.0",
			description:
        "Test Track is a powerful and user-friendly test management tool designed to streamline and optimize the testing track of tested hardware components.",
			image: "",
			stack: [
				{
					id: 1,
					name: "Next",
					icon: "teenyicons:nextjs-outline",
				},
				{
					id: 2,
					name: "React",
					icon: "mdi:react",
				},
				{
					id: 3,
					name: "Tailwind CSS",
					icon: "mdi:tailwind",
				},
				{
					id: 4,
					name: "TypeScript",
					icon: "mdi:language-typescript",
				},
				{
					id: 5,
					name: "Postgre SQL",
					icon: "cib:postgresql",
				},
				{
					id: 6,
					name: "Prisma",
					icon: "simple-icons:prisma",
				},
			],
			urls: [
				{
					id: 1,
					type: "Live Demo",
					url: "https://test-tracker-snowy.vercel.app/",
				},
				{
					id: 2,
					type: "Git Repository",
					url: "https://github.com/manoellvitor/test-tracker",
				},
			],
		}, {
			id: 2,
			name: "Test Tracker Nuxt.js",
			description:
        "Test Tracker is a web application designed to help users track their test results and manage their testing process efficiently. It provides a user-friendly interface for logging test results, viewing historical data, and generating reports. This project is built using Nuxt.js, a powerful framework for building Vue.js applications. It leverages the Composition API and Vue Router for seamless navigation and state management.",
			image: "",
			stack: [
				{
					id: 1,
					name: "Nuxt.js",
					icon: "lineicons:nuxt",
				},
				{
					id: 2,
					name: "Vue.js",
					icon: "akar-icons:vue-fill",
				},
				{
					id: 3,
					name: "Tailwind CSS",
					icon: "mdi:tailwind",
				},
				{
					id: 4,
					name: "TypeScript",
					icon: "mdi:language-typescript",
				},
				{
					id: 5,
					name: "Turso",
					icon: "simple-icons:turso",
				},
				{
					id: 6,
					name: "Drizzle ORM",
					icon: "lineicons:drizzle",
				},
			],
			urls: [
				{
					id: 1,
					type: "Live Demo",
					url: "https://test-tracker-nuxt.vercel.app/",
				},
				{
					id: 2,
					type: "Git Repository",
					url: "https://github.com/manoellvitor/test-tracker-nuxt",
				},
			],
		},
	];

	return futureProject;
});
