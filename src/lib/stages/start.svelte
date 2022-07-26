<script lang="ts">
	import { browser } from '$app/env';
	import Sound from '$lib/components/sound.svelte';
	import { Events, KeyCodes } from '$lib/constants';

	export let onStart: () => void;
	export let onVolumeClick: (event: MouseEvent) => void;
	export let volumeOn: boolean;

	const onKeyboardStart = (event: KeyboardEvent) => {
		if (event.code === KeyCodes.Space) {
			onStart();
		}
	};

	let visible = true;

	setInterval(() => {
		visible = !visible;
	}, 1000);

	$: if (browser) {
		document.addEventListener(Events.KeyDown, onKeyboardStart);
	}
</script>

<section on:click={onStart}>
	<Sound
		{volumeOn}
		onClick={onVolumeClick}
		filter="invert(89%) sepia(2%) saturate(13%) hue-rotate(47deg) brightness(95%) contrast(87%);"
	/>
	<h1 style="visibility: {visible ? 'visible' : 'hidden'};">PRESS START</h1>
</section>

<style>
	section {
		height: 100vh;
		width: 100%;
		background: var(--black);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		margin: 0;
		font-family: 'Press Start';
		background: linear-gradient(to top, var(--start-gradient-bottom), var(--start-gradient-top));
		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-size: 54px;
		letter-spacing: 5px;
	}
</style>
