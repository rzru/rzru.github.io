<script lang="ts">
	import Dialogue from '$lib/dialogue.svelte';
	import Start from '$lib/start.svelte';
	import { Howl } from 'howler';

	let started = false;
	let musicStarted = false;

	var theme = new Howl({
		src: ['theme.mp3'],
		loop: true,
		volume: 0.7
	});

	$: if (started && !musicStarted) {
		musicStarted = true;
		theme.play();
	}
</script>

<main>
	{#if started}
		<Dialogue />
	{:else}
		<Start onStart={() => (started = true)} />
	{/if}
</main>

<style>
	@font-face {
		font-family: 'Pokemon Fire Red';
		src: url('/pokemon-firered-leafgreen-font-recreation.ttf');
	}

	@font-face {
		font-family: 'Press Start';
		src: url('/PressStart2P-Regular.ttf');
	}

	:global(body) {
		margin: 0;
		font-family: 'Pokemon Fire Red';
		background-color: var(--black);

		--gradient-start: #438d7b;
		--gradient-med-1: #4c9484;
		--gradient-med-2: #66a694;
		--gradient-med-3: #81b4a5;
		--gradient-med-4: #97c3b4;
		--gradient-med-5: #add0c0;
		--gradient-med-6: #c9e4d5;
		--gradient-end: #dff4e5;

		--black: #000;
		--white: #fff;

		--stand: #c5edd5;
		--stand-border: #92ccac;
	}
</style>
