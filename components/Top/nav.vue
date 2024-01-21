<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cart";

const store = useCartStore();
const route = useRoute();

const menuRef = ref(null);
const cartRef = ref(null);

const closeMenuDialog = () => {
	if (menuRef.value) {
		menuRef.value.open = false;
	}
};

const closeCartDialog = () => {
	if (cartRef.value) {
		cartRef.value.open = false;
	}
};

const handleClickOutside = (event) => {
	if (!menuRef.value.contains(event.target)) {
		closeMenuDialog();
	}
	if (!cartRef.value.contains(event.target)) {
		closeCartDialog();
	}
};

onMounted(() => {
	watch(route, () => {
		closeMenuDialog();
		closeCartDialog();
	});

	document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
	menuRef.value = null;
	cartRef.value = null;

	document.removeEventListener("click", handleClickOutside);
});
</script>
<template>
	<div class="navbar bg-base-100 z-10 shadow-[rgba(0,0,15,0.5)_0_0_4px_0px]">
		<div class="navbar-start">
			<details
				ref="menuRef"
				class="dropdown"
			>
				<summary class="m-1 btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</summary>
				<ul
					tabIndex="{0}"
					class="menu menu-sm dropdown-content z-[1] p-2 bg-base-100 rounded-box w-52 -m-1 shadow"
				>
					<li>
						<NuxtLink to="/">Strona główna</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/products">Produkty</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/cart">Koszyk</NuxtLink>
					</li>
				</ul>
			</details>
		</div>
		<div class="navbar-center">
			<NuxtLink
				to="/"
				class="btn btn-ghost text-xl"
			>
				<img
					src="https://sklep.kfd.pl/img/logo-1652696382.jpg"
					class="max-w-[50px]"
					alt="Logo"
				/>
			</NuxtLink>
		</div>

		<div class="navbar-end">
			<div class="flex-none">
				<details
					ref="cartRef"
					class="dropdown dropdown-end"
				>
					<summary class="m-1 btn btn-ghost btn-circle">
						<div class="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span class="badge badge-sm indicator-item">{{ store.itemCount }}</span>
						</div>
					</summary>
					<div
						tabIndex="{0}"
						class="z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
					>
						<div class="card-body">
							<span class="font-bold text-lg">{{ store.itemCount }} produktów</span>
							<span class="text-info">Suma: {{ store.totalPrice ?? 0 }} zł</span>
							<div class="card-actions">
								<NuxtLink
									to="/cart"
									class="btn btn-primary btn-block"
								>
									Koszyk
								</NuxtLink>
							</div>
						</div>
					</div>
				</details>
			</div>
		</div>
	</div>
	<!-- Nav Bar End -->
</template>
