<script setup>
import { useCartStore } from "@/stores/cart";
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageSrc: {
		type: String,
		required: true,
	},
	buttonText: {
		type: String,
		default: "Buy Now",
	},
	onClick: {
		type: Function,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const store = useCartStore();

const addToCart = () => {
	store.addToCart({ title: props.title, description: props.description, price: props.price });
};
</script>

<template>
	<div class="card card-compact max-w-96 bg-base-100 shadow-xl">
		<figure>
			<img
				:src="imageSrc"
				alt="Shoes"
				class="max-w-60"
			/>
		</figure>
		<div class="card-body">
			<h3 class="card-title">{{ title }}</h3>
			<p class="break-words">{{ description }}</p>
			<div class="card-actions justify-end items-center">
				<p class="font-medium">{{ price }} zł</p>
				<button
					class="btn btn-primary"
					@click="addToCart"
				>
					Kup
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
