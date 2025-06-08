<script lang="ts" setup>
const { data: webProjects } = await useFetch("/api/web/projects");
const { data: qaProjects } = await useFetch("/api/qa/projects");
</script>

<template>
	<UiSectionTitle
		color="yellow"
		text="QA Projects"
	/>
	<section class="flex flex-col container mx-auto">
		<div class="md:grid-row-2 mt-2 grid w-full gap-3 lg:grid-flow-col p-4">
			<UiBlueProjectCard
				v-for="project in qaProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>

	<UiSectionTitle
		color="yellow"
		text="Web Projects"
	/>
	<section class="flex flex-col container mx-auto">
		<div class="md:grid-row-2 mt-2 grid w-full gap-3 lg:grid-flow-col p-4">
			<UiBlueProjectCard
				v-for="project in webProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>
