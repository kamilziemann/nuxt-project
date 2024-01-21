<script setup>
useHead({
	title: "KFD - Strona Główna",
});

import products from "~/data/products.js";
import topProducts from "~/data/topProducts.js";

const topProductsData = computed(() => products.filter((product) => topProducts.includes(product.id)));
</script>

<template>
	<PageHeader />
	<div class="container mx-auto px-4 pt-7 pb-80">
		<h2 class="text-center text-5xl font-semibold mt-5 mb-9">Top Oferty</h2>
		<div class="flex flex-row gap-3 items-center justify-center">
			<Card
			type="buy"
				v-for="product in topProductsData"
				:key="product.id"
				:id="product.id"
				:title="product.title"
				:description="product.description"
				:image-src="product.imageSrc"
				:price="product.price"
			/>
		</div>
		<div class="flex justify-center mt-5">
			<NuxtLink
				className="link"
				to="/products"
			>
				Zobacz wszystkie produkty
			</NuxtLink>
		</div>
	</div>
</template>
