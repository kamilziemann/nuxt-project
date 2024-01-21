<script setup>
import products from "~/data/products.js";
import { useCartStore } from "@/stores/cart";

useHead({
	title: "KFD - Koszyk",
});

const store = useCartStore();

const filteredProducts = computed(() =>
	store.items.map((itemId) => products.find((product) => product.id === itemId)).filter((product) => product != null)
);
</script>

<template>
	<div class="container mx-auto px-4 pt-7 pb-80">
		<h2 class="text-center text-5xl font-semibold mt-5 mb-9">Koszyk</h2>
		<div
			v-if="store.itemCount === 0"
			class="text-center"
		>
			<p>Twój koszyk jest pusty.</p>
		</div>

		<div v-else>
			<div class="flex justify-between mb-4">
				<p>Liczba przedmiotów: {{ store.itemCount }}</p>
				<button
					class="btn btn-primary min-h-8 h-8"
					@click="() => store.clearCart()"
				>
					Wyczyść koszyk
				</button>
			</div>

			<div class="flex flex-col gap-4">
				<Card
					type="remove"
					v-for="item in filteredProducts"
					:key="item.id"
					:id="item.id"
					:title="item.title"
					:description="item.description"
					:price="item.price"
					:imageSrc="item.imageSrc"
				/>
			</div>

			<p class="text-info mt-4 text-start">Suma: {{ store.totalPrice ?? 0 }} zł</p>
		</div>
	</div>
</template>
