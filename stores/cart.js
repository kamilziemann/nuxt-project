import products from "~/data/products.js";

export const useCartStore = defineStore("cart", {
	state: () => ({
		items: [],
	}),
	actions: {
		addToCart(id) {
			this.items.push(id);
		},
		removeFromCart(id) {
			const index = this.items.findIndex((itemId) => itemId === id);
			if (index !== -1) {
				this.items.splice(index, 1);
			}
		},
		clearCart() {
			this.items = [];
		},
	},
	getters: {
		itemCount: (state) => state.items.length,
		totalPrice: (state) =>
			state.items.reduce((total, id) => {
				const product = products.find((p) => p.id === id);

				return total + (product?.price ?? 0);
			}, 0),
	},
	persist: {
		storage: persistedState.localStorage,
	},
});
