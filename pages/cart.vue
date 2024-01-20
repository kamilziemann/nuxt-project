<template>
	<div>
		<button @click="addItemToCart">Dodaj do koszyka</button>
		<div
			v-for="(item, index) in cartItems"
			:key="index"
		>
			{{ item.name }} - {{ item.price }}
			<button @click="removeItemFromCart(index)">Usuń</button>
		</div>
		<p>Liczba przedmiotów: {{ store.itemCount }}</p>
	</div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";

const store = useCartStore();
</script>
