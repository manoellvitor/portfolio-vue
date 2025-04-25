<script lang="ts" setup>
const { data: projects } = await useFetch("/api/qa/projects");
</script>

<template>
  <UiSectionTitle color="yellow" text="Projects" />
  <section class="flex flex-col container mx-auto">
    <div class="md:grid-row-2 mt-2 grid w-full gap-3 lg:grid-flow-col p-4">
      <UiBlueProjectCard
        v-for="project in projects"
        :key="project.id"
        :project-data="project"
      />
    </div>
  </section>
</template>
