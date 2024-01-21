<script setup>
import products from "~/data/products.js";

useHead({
	title: "KFD - Produkty",
});
</script>

<template>
	<div class="container mx-auto px-4 pt-7 pb-80">
		<h2 class="text-center text-5xl font-semibold mt-5 mb-9">Produkty</h2>
		<div class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 items-center justify-center">
			<Card
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:title="product.title"
				:description="product.description"
				:image-src="product.imageSrc"
				:price="product.price"
			/>
		</div>
	</div>
</template>
