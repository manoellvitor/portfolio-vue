<template>
	<UiSectionTitle
		color="green"
		text="About Manoel"
	/>
	<section class="container flex flex-col lg:flex-row mx-auto p-4">
		<div
			class="flex flex-col lg:flex-row items-center gap-10 mx-auto container justify-evenly"
		>
			<p class="text-justify indent-10 leading-7 tracking-wide flex flex-1 flex-col gap-6">
				I&apos;m Manoel Lopes, a passionate Software Test Engineer with over 5
				years of experience specializing in quality assurance and test
				automation. I thrive on crafting reliable, scalable testing solutions
				that enhance software performance and ensure exceptional user
				experiences. My expertise spans across tools like Playwright, Cypress,
				Selenium, and Postman, and I&apos;m fluent in JavaScript, TypeScript,
				and Python. With a solid foundation in both manual and automated testing
				across APIs, web apps, and robotics systems, I bring a detail-oriented,
				Agile-driven approach to every project. Let&apos;s build better
				software—one test at a time.

				<q class="italic text-zinc-500">
					<span class="font-bold underline underline-offset-4">On a personal note,</span> I&apos;m an Inline
					Hockey enthusiast 🏒 and a devoted fan of Harry Potter ⚡ and Lord of
					the Rings 🌄.
				</q>
			</p>
			<div class="flex h-80 w-80 rounded-full shadow-xl shadow-cyan-500/50">
				<NuxtImg
					src="/images/manoel-lopes.jpg"
					alt="Manoel Lopes, Preparing his hockey stick for a game!"
					class="h-80 w-80 rounded-full object-cover ring-4 ring-cyan-300"
					format="webp"
					densities="1x"
				/>
			</div>
		</div>
	</section>
</template>
