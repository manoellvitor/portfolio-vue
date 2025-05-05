<script setup lang="ts">
import type { ProjectData } from "~/types";

defineProps<{
	project: ProjectData;
}>();
</script>

<template>
	<div
		class="flex flex-col items-center rounded-md border-2 border-cyan-400 p-4 gap-4 justify-between"
	>
		<h1 class="font-ocra text-2xl uppercase text-purple-600">
			{{ project.name }}
		</h1>
		<p class="text-md text-justify indent-10 font-courier text-zinc-500">
			{{ project.description }}
		</p>
		<h2 class="font-ocra text-sm uppercase text-orange-500">
			Tech Stack
		</h2>
		<div class="flex gap-4 mx-auto mt-4  items-center">
			<Icon
				v-for="ico in project.stack"
				:key="ico.id"
				v-tooltip.bottom="{
					content: ico.name,
				}"
				:name="ico.icon"
				mode="svg"
				size="32"
				class="text-zinc-500 transition-colors duration-500 hover:text-zinc-300"
			/>
		</div>
		<div
			class="mt-5 flex flex-col overflow-hidden whitespace-nowrap md:flex-row gap-4 "
		>
			<UiGreenButton
				v-for="link in project.urls"
				:key="link.id"
				:url="link.url"
			>
				{{ link.type }}
			</UiGreenButton>
		</div>
	</div>
</template>
