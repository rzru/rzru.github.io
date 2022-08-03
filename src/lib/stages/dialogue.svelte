<script lang="ts">
	import Dialogue from '$lib/components/dialogue.svelte';
	import Select from '$lib/components/select.svelte';
	import Sound from '$lib/components/sound.svelte';

	export let onVolumeClick: (event: MouseEvent) => void;
	export let volumeOn: boolean;

	const incrementReplicaIdx = () => {
		if (currentReplicaIdx < replicas.length - 1) {
			currentReplicaIdx++;
		}
	};

	let replicas: string[][] = [
		['Hello, there!', 'Glad to meet you!'],
		["Welcome to the rzru's webpage!"],
		['My name is OAK.'],
		['This world...'],
		['...is inhabited far and wide', 'by information about rzru.'],
		['rzru is a skilled frontend developer.', "He's also a good Rust developer."],
		['As for myself...'],
		['...I just love this guy.'],
		['Anyway, here are all the links you might need', 'to learn more and get in touch.'],
		['See you later!']
	];
	let currentReplicaIdx = 0;
	let showDialogue = false;
	let outOfReplicas = false;

	setTimeout(() => {
		showDialogue = true;
	}, 2000);

	$: lines = replicas[currentReplicaIdx] || [];
	$: outOfReplicas = currentReplicaIdx === replicas.length - 1;
	$: showSelect = currentReplicaIdx >= replicas.length - 2;
</script>

<section>
	<Sound
		{volumeOn}
		onClick={onVolumeClick}
		filter="invert(43%) sepia(10%) saturate(2082%) hue-rotate(167deg) brightness(95%) contrast(90%)"
	/>
	<div class="stand" />
	<img class="oak" src="/images/oak.png" alt="Professor Oak" />
	{#if showDialogue}
		<Dialogue {outOfReplicas} {lines} onClick={incrementReplicaIdx} {volumeOn} />
	{/if}
	{#if showSelect}
		<Select {volumeOn} />
	{/if}
</section>

<style>
	section {
		height: 100vh;
		background: linear-gradient(
			to top,
			var(--gradient-start) 40%,
			var(--gradient-med-1) 40% 42%,
			var(--gradient-med-2) 42% 44%,
			var(--gradient-med-3) 44% 46%,
			var(--gradient-med-4) 46% 48%,
			var(--gradient-med-5) 48% 50%,
			var(--gradient-med-6) 50% 52%,
			var(--gradient-end) 52%
		);
		animation: fadein 3s;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.stand {
		position: absolute;
		bottom: calc(45% - 100px);
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;

		height: 100px;
		width: 90%;
		background-color: var(--stand);
		border-radius: 50%;
		border: 10px solid var(--stand-border);
	}

	.oak {
		width: 150px;
		position: absolute;
		bottom: 35%;
		left: calc(50% - 85px);
	}

	@media (min-width: 800px) {
		.stand {
			width: 70%;
			height: 200px;
			bottom: calc(35% - 100px);
		}

		.oak {
			width: 250px;
			left: calc(50% - 140px);
			bottom: 35%;
		}
	}

	@media (min-width: 1200px) {
		.stand {
			width: 30%;
			height: 200px;
			bottom: calc(40% - 100px);
		}

		.oak {
			width: 250px;
			left: calc(50% - 140px);
			bottom: 40%;
		}
	}
</style>
