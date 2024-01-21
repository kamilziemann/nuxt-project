<script setup lang="ts"></script>

<template>
	<footer class="p-10 bg-base-200 text-base-content flex justify-center">
		<div class="footer container justify-between">
			<nav>
				<header class="footer-title">LINKI</header>

				<NuxtLink
					class="link link-hover"
					to="/"
				>
					Strona główna
				</NuxtLink>

				<NuxtLink
					class="link link-hover"
					to="/products"
				>
					Produkty
				</NuxtLink>

				<NuxtLink
					class="link link-hover"
					to="/cart"
				>
					Koszyk
				</NuxtLink>
			</nav>
			<form>
				<header class="footer-title">Newsletter</header>
				<fieldset class="form-control w-80">
					<label class="label">
						<span class="label-text">Wpisz swój adres email</span>
					</label>
					<div class="join">
						<input
							type="text"
							placeholder="username@site.com"
							class="input input-bordered join-item"
						/>
						<button class="btn btn-primary join-item">Subskrybuj</button>
					</div>
				</fieldset>
			</form>
		</div>
	</footer>
</template>
