<script lang="ts">
	import Dialogue from '$lib/stages/dialogue.svelte';
	import Start from '$lib/stages/start.svelte';
	import { Howl } from 'howler';

	let started = false;
	let musicStarted = false;
	let volumeOn = true;

	const volume = 0.7;
	const onVolumeClick = (event: MouseEvent) => {
		event.stopPropagation();
		volumeOn = !volumeOn;
	};

	var theme = new Howl({
		src: ['theme.mp3'],
		loop: true,
		volume
	});

	$: if (started && !musicStarted) {
		musicStarted = true;
		theme.play();
	}

	$: theme.volume(volumeOn ? volume : 0);
</script>

<main>
	{#if started}
		<Dialogue {onVolumeClick} {volumeOn} />
	{:else}
		<Start onStart={() => (started = true)} {onVolumeClick} {volumeOn} />
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

		--arrow: #b2060b;

		--dialogue-background: #f3f8f4;
		--dialogue-border: #a1d0e0;
		--dialogue-outline: #47739b;
		--dialogue-text: #62625b;
		--dialogue-text-shadow: #bfcaca;

		--select-outline: #4d5372;
		--select-border: #736b85;
	}
</style>
