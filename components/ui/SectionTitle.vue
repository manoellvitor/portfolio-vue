<script lang="ts" setup>
const props = defineProps<{
  color: string;
  text: string;
}>();
const titleColor = ref("");

switch (props.color) {
  case "blue":
    titleColor.value = "text-blue-500";
    break;
  case "yellow":
    titleColor.value = "text-yellow-400";
    break;
  case "green":
    titleColor.value = "text-green-700";
    break;

  default:
    titleColor.value = "text-violet-500";
}
</script>

<template>
  <div class="p-4 container flex mx-auto">
    <h1 class="font-ocra text-2xl" :class="titleColor">
      <span class="text-zinc-300">{{ "<" }}</span
      >{{ props.text }}
      <span class="text-zinc-300">{{ "/>" }}</span>
    </h1>
  </div>
</template>
