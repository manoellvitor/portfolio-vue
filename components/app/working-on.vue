<script lang="ts" setup>
const { data: projects } = await useFetch("/api/qa/future-projects");
</script>

<template>
	<UiSectionTitle
		color="blue"
		text="Working On"
	/>
	<section class="flex flex-col container mx-auto">
		<div
			class="md:grid-row-2 mt-2 grid gap-3 lg:grid-flow-col p-4 mx-auto"
		>
			<UiBlueProjectCard
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>
