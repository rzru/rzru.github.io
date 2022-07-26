<script lang="ts">
	import Dialogue from '$lib/stages/dialogue.svelte';
	import Start from '$lib/stages/start.svelte';
	import { Howl } from 'howler';

	const volume = 0.7;
	const onVolumeClick = (event: MouseEvent) => {
		event.stopPropagation();
		volumeOn = !volumeOn;
	};
	const theme = new Howl({
		src: ['sounds/theme.mp3'],
		loop: true,
		volume
	});

	let started = false;
	let musicStarted = false;
	let volumeOn = true;

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
