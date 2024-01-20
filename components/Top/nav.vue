<script setup>
import { useCartStore } from "@/stores/cart";

const store = useCartStore();

</script>

<template>
	<div class="navbar bg-base-100 z-10">
		<div class="navbar-start">
			<details class="dropdown">
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
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a>Homepage</a></li>
					<li><a>Portfolio</a></li>
					<li><a>About</a></li>
				</ul>
			</details>
		</div>
		<div class="navbar-center">
			<NuxtLink
				to="/"
				class="btn btn-ghost text-xl"
			>
				<img
					src="http://localhost:3000/img/logo.png"
					class="max-w-[50px]"
					alt="Logo"
				/>
			</NuxtLink>
		</div>

		<div class="navbar-end">
			<div class="flex-none">
				<details class="dropdown dropdown-end">
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
						class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
					>
						<div class="card-body">
							<span class="font-bold text-lg">{{ store.itemCount }} produktów</span>
							<span class="text-info">Suma: {{ store.totalPrice }} zł</span>
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
