<script lang="ts" setup>
const error = createError({
  statusCode: 404,
  statusMessage: "Page Not Found!",
});
</script>

<template>
  <NuxtLayout>
    <main
      class="container h-screen mx-auto flex flex-col justify-center items-center p-4"
    >
      <div
        class="flex flex-col items-center rounded-md border-2 border-cyan-400 p-4 gap-4 sm:w-[40%] sm:h-[40%] w-[100%] h-[40%] justify-center"
      >
        <h1 class="text-6xl text-red-600 font-bold">{{ error.statusCode }}</h1>
        <p class="text-3xl">{{ error.statusMessage }}</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>
