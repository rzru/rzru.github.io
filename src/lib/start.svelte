<script lang="ts">
	export let onStart: () => void;
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
	{#if visible}
		<h1>PRESS START</h1>
	{/if}
</section>

<style>
	section {
		height: 100vh;
		width: 100%;
		background-color: black;
		display: flex;
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
