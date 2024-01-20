<script setup>
useHead({
	title: "Burger King",
});
</script>
<template>
	<PageHeader />
	<div class="container mx-auto px-4 pt-7">
		<h2 class="text-center text-5xl font-semibold mt-5 mb-9">Top Oferty</h2>
		<div class="flex flex-row gap-3 items-center justify-center">
			<Card
				title="Białko"
				description="KFD REGULAR+ WPC 80 3000 G (BIAŁKO SERWATKOWE INSTANT)"
				image-src="https://sklep.kfd.pl/13345-medium_default/kfd-regular-wpc-80-3000-g-bialko-serwatkowe-instant.jpg"
				:price="100"
			/>
			<Card
				title="Białko"
				description="KFD REGULAR+ WPC 80 3000 G (BIAŁKO SERWATKOWE INSTANT)"
				image-src="https://sklep.kfd.pl/13345-medium_default/kfd-regular-wpc-80-3000-g-bialko-serwatkowe-instant.jpg"
				:price="100"
			/>
			<Card
				title="Białko"
				description="KFD REGULAR+ WPC 80 3000 G (BIAŁKO SERWATKOWE INSTANT)"
				image-src="https://sklep.kfd.pl/13345-medium_default/kfd-regular-wpc-80-3000-g-bialko-serwatkowe-instant.jpg"
				:price="100"
			/>
		</div>
	</div>
</template>
<style scoped></style>
