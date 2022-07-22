<script lang="ts">
	import Dialogue from '$lib/components/dialogue.svelte';

	let replicas: string[][] = [
		['Hello, there!', 'Glad to meet you!'],
		["Welcome to the rzru's webpage!"],
		['My name is OAK.'],
		['This world...'],
		['...is inhabited far and wide by information about rzru.'],
		['rzru is a skilled frontend developer.', "He's also a good Rust developer."],
		['As for myself...'],
		['...I just love this guy.'],
		['Anyway, here are all the links you might need', 'to learn more and get in touch.'],
		['See you later!']
	];
	let currentReplicaIdx = 0;
	let showDialogue = false;
	let outOfReplicas = false;

	const incrementReplicaIdx = () => {
		if (currentReplicaIdx < replicas.length - 1) {
			currentReplicaIdx++;
		}
	};

	setTimeout(() => {
		showDialogue = true;
	}, 2000);

	$: lines = replicas[currentReplicaIdx] || [];
	$: outOfReplicas = currentReplicaIdx === replicas.length - 1;
</script>

<section>
	<div class="stand" />
	{#if showDialogue}
		<Dialogue {outOfReplicas} {lines} onClick={incrementReplicaIdx} />
	{/if}
	<audio autoplay muted src="theme.mp3" />
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
		bottom: calc(40% - 100px);
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;

		height: 200px;
		width: 500px;
		background-color: var(--stand);
		border-radius: 50%;
		border: 10px solid var(--stand-border);
	}
</style>
