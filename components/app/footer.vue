<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
	<div>
		<div class="mt-10 flex items-center justify-center">
			<h1 class="font-ocra text-4xl text-red-700">
				Game Over
			</h1>
		</div>
		<footer
			class="flx row mx-auto mt-10 flex h-24 max-w-[1200px] items-center border-t-2 border-dashed border-zinc-500 p-4"
		>
			<div class="mx-auto items-center justify-center">
				<h1 class="font-courier text-lg text-zinc-300">
					All rights reserved &copy; {{ year }}
				</h1>
			</div>
		</footer>
	</div>
</template>
