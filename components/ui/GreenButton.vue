<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<template>
  <NuxtLink
    :to="url"
    target="_blank"
    class="flex w-full items-center justify-center gap-2 rounded-md border-2 border-green-700 p-2 font-ocra text-sm uppercase text-zinc-300 transition-colors duration-300 hover:bg-green-700"
  >
    <slot />
  </NuxtLink>
</template>
