<script setup>
import { defineProps } from "vue";
import { useCartStore } from "@/stores/cart";

const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
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
	onClick: {
		type: Function,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		default: "buy", // 'buy' or 'remove'
	},
});

const store = useCartStore();

const isRemoveType = props.type === "remove";

const defaultCardClass = "card bg-base 100 shadow-xl h-full w-full";
const cardClass = () =>
	isRemoveType ? `${defaultCardClass} flex-row card-compact` : `${defaultCardClass} card-compact max-w-96`;

const imageClass = () => (isRemoveType ? "max-h-20" : "max-w-60");

const buttonText = () => (isRemoveType ? "Usuń" : "Kup");

const handleButtonClick = () => {
	if (isRemoveType) {
		store.removeFromCart(props.id);
	} else {
		store.addToCart(props.id);
	}
};
</script>

<template>
	<div :class="cardClass()">
		<figure>
			<img
				:src="imageSrc"
				:alt="title"
				:class="imageClass()"
			/>
		</figure>
		<div class="card-body text-start">
			<h3 class="card-title">{{ title }}</h3>
			<p class="break-words">{{ description }}</p>
			<div class="card-actions justify-end items-center">
				<p class="font-medium">{{ price }} zł</p>
				<button
					class="btn btn-primary min-h-8 h-8"
					@click="handleButtonClick"
				>
					{{ buttonText() }}
				</button>
			</div>
		</div>
	</div>
</template>
