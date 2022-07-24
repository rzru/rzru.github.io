<script lang="ts">
	import Sound from '$lib/components/sound.svelte';

	export let onStart: () => void;
	export let onVolumeClick: (event: MouseEvent) => void;
	export let volumeOn: boolean;

	const onKeyboardStart = (event: KeyboardEvent) => {
		if (event.key === 'Space') {
			onStart();
		}
	};

	let visible = true;
	setInterval(() => {
		visible = !visible;
	}, 1000);
</script>

<section on:click={onStart} on:keypress={onKeyboardStart}>
	<Sound
		{volumeOn}
		onClick={onVolumeClick}
		filter="invert(89%) sepia(2%) saturate(13%) hue-rotate(47deg) brightness(95%) contrast(87%);"
	/>
	<img src="/rzrus-page.png" alt="rzru's page" />
	<h1 style="visibility: {visible ? 'visible' : 'hidden'};">PRESS START</h1>
</section>

<style>
	section {
		height: 100vh;
		width: 100%;
		background-color: black;
		display: flex;
		flex-direction: column;
		gap: 150px;
		align-items: center;
		justify-content: center;
	}

	h1 {
		margin: 0;
		font-family: 'Press Start';
		background: linear-gradient(to top, #6f6e6f, #cecece);
		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-size: 54px;
		letter-spacing: 5px;
	}
</style>
