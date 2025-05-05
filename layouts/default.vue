<template>
	<div class="font-courier text-xl bg-zinc-950 text-zinc-300 flex flex-col">
		<AppNavBar />
		<main>
			<slot />
		</main>
		<AppFooter />
	</div>
</template>
