<script lang="ts" setup>
const { data: socialMedias } = await useFetch("/api/social-media");
</script>

<template>
	<header
		class="sticky left-0 top-0 overflow-hidden border-b-8 border-lime-700 bg-zinc-950"
	>
		<div
			class="flex flex-col sm:flex-row h-32 items-center sm:justify-between justify-evenly container mx-auto"
		>
			<div>
				<NuxtLink
					to="/"
					class="font-ocra text-4xl text-zinc-300 uppercase"
				>
					MANOEL LOPES<span class="animate-ping-fast">_</span>
				</NuxtLink>
			</div>
			<div>
				<div>
					<ul class="flex gap-4">
						<li
							v-for="media in socialMedias"
							:key="media.id"
							v-tooltip.bottom="{
								content: media.name,
							}"
							:aria-label="media.ariaLabel"
						>
							<NuxtLink
								:to="media.url"
								target="_blank"
								rel="noopener noreferrer"
								class="font-courier text-sm"
							>
								<Icon
									:name="media.icon"
									mode="svg"
									size="32"
									class="text-zinc-500 transition-colors duration-500 hover:text-zinc-300"
								/>
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>
