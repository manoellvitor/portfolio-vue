<script lang="ts" setup>
const { data: projects } = await useFetch("/api/qa/future-projects");
</script>

<template>
  <div class="p-4 container flex mx-auto">
    <h1 class="font-ocra text-2xl text-blue-500">
      <span class="text-zinc-300">{{ "<" }}</span
      >Working On
      <span class="text-zinc-300">{{ "/>" }}</span>
    </h1>
  </div>
  <section class="flex flex-col container mx-auto">
    <div
      class="md:grid-row-2 mt-2 grid gap-3 lg:grid-flow-col p-4 lg:max-w-[50%] mx-auto"
    >
      <UiBlueProjectCard
        v-for="project in projects"
        :key="project.id"
        :project-data="project"
      />
    </div>
  </section>
</template>
