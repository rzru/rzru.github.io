<script lang="ts">
	import Sound from '$lib/components/sound.svelte';
	import { KeyCodes } from '$lib/constants';

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
</script>

<svelte:body on:keydown={onKeyboardStart} />
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
		width: 100%;
		height: 100vh;
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
		font-size: 24px;
	}

	@media (min-width: 600px) {
		h1 {
			font-size: 36px;
		}
	}

	@media (min-width: 1200px) {
		h1 {
			font-size: 48px;
		}
	}
</style>
