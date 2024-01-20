export const useCartStore = defineStore("cart", {
	state: () => ({
		items: [],
	}),
	actions: {
		addToCart(item) {
			this.items.push(item);
		},
		removeFromCart(index) {
			this.items.splice(index, 1);
		},
	},
	getters: {
		itemCount: (state) => state.items.length,
		totalPrice: (state) => state.items.reduce((total, item) => total + item.price, 0),
	},
	persist: {
		storage: persistedState.localStorage,
	},
});
