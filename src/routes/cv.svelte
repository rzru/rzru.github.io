<script lang="ts">
	import { browser } from '$app/env';
	import { randomFloatInRange, randomIntegerInRange } from '$lib/utils';

	interface Pokemon {
		id: number;
		gif: string;
		x: number;
		y: number;
		spintime: number;
		invertRotation: boolean;
	}

	const gifs = ['bulbasaur.gif', 'charmander.gif', 'eevee.gif', 'squirtle.gif', 'pikachu.gif'];
	const interval = 300;
	const onScroll = () => {
		const delta = container.scrollTop - lastScrollTop;
		let newPokemonList = pokemonList.map((pokemon) => {
			let y = pokemon.y + delta / 2;

			while (y < 0) {
				y += document.body.offsetHeight;
			}

			while (y > document.body.offsetHeight) {
				y -= document.body.offsetHeight;
			}

			return {
				...pokemon,
				y
			};
		});
		requestAnimationFrame(() => {
			pokemonList = newPokemonList;
		});
		lastScrollTop = container.scrollTop;
	};

	let maxPokemon = 120;
	let pokemonList: Pokemon[] = [];
	let container: HTMLDivElement;
	let lastScrollTop = 0;
	let id = 1;

	if (browser) {
		setInterval(() => {
			if (pokemonList.length >= maxPokemon) {
				pokemonList.shift();
			}

			pokemonList = [
				...pokemonList,
				{
					id,
					gif: gifs[randomIntegerInRange(0, gifs.length - 1)],
					x: randomIntegerInRange(0, document.body.offsetWidth),
					y: randomIntegerInRange(0, document.body.offsetHeight),
					spintime: randomIntegerInRange(200, 2000),
					invertRotation: Math.random() < 0.5
				}
			];
			id = id === maxPokemon ? 1 : id + 1;
		}, interval);
	}
</script>

<div class="layout">
	{#each pokemonList as { gif, x, y, spintime, id, invertRotation } (id)}
		<img
			src="gifs/{gif}"
			style="
                    position: absolute; 
                    top: {y}px; 
                    left: {x}px;
                    animation-duration: {spintime}ms; 
                    animation-direction: {invertRotation ? 'reverse' : 'normal'}
                "
			alt={gif}
		/>
	{/each}
	<div bind:this={container} class="container" on:scroll={onScroll}>
		{#each new Array(1000) as _}
			<div>test</div>
		{/each}
	</div>
</div>

<style>
	.layout {
		width: 100%;
		height: 100vh;
		background-color: var(--dialogue-border);
		display: flex;
		justify-content: center;
		gap: 20px;
		overflow: hidden;
	}

	.container {
		margin: 2% 0;
		width: 60%;
		background-color: var(--dialogue-background);
		padding: 25px 40px;
		font-size: 32px;
		text-transform: uppercase;
		border: 10px solid var(--select-border);
		outline: 5px solid var(--select-outline);
		border-radius: 5px;
		overflow-y: auto;
		z-index: 1;
	}

	img {
		animation: spin linear infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
