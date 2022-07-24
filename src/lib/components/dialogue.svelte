<script lang="ts">
	import { Howl } from 'howler';
	import Arrow from '$lib/components/arrow.svelte';

	export let onClick: () => void;
	export let lines: string[];
	export let outOfReplicas: boolean;
	export let volumeOn: boolean;

	var click = new Howl({
		src: ['click.wav']
	});

	let interval: ReturnType<typeof setInterval>;
	const typewritingSpeed = 80;

	let renderedLines: string[] = [];
	let lineIdx = 0;
	let charIdx = 0;
	let typewritingEnded = false;

	const restartTypewriter = (lines: string[]) => {
		const resetReplica = () => {
			renderedLines = [];
			lineIdx = 0;
			charIdx = 0;
			typewritingEnded = false;
		};

		resetReplica();
		clearInterval(interval);

		interval = setInterval(() => {
			if (charIdx === (lines[lineIdx]?.length || 0)) {
				if (lineIdx === lines.length - 1) {
					clearInterval(interval);
					typewritingEnded = true;
				} else {
					lineIdx++;
					charIdx = 0;
				}
			}
			let remainder: string = renderedLines[lineIdx] || '';
			remainder += lines[lineIdx]?.charAt(charIdx) || '';
			renderedLines[lineIdx] = remainder;
			charIdx++;
		}, typewritingSpeed);
	};

	const onClickLocal = () => {
		if ((!outOfReplicas || !typewritingEnded) && volumeOn) {
			click.play();
		}

		if (typewritingEnded) {
			onClick();
		} else {
			renderedLines = lines;
			clearInterval(interval);
			typewritingEnded = true;
		}
	};

	document.addEventListener('click', onClickLocal);

	$: {
		restartTypewriter(lines);
	}
</script>

<div class="dialogue">
	{#each renderedLines as line, i}
		<div class="line">
			{line}
			{#if typewritingEnded && i === renderedLines.length - 1 && !outOfReplicas}
				<Arrow />
			{/if}
		</div>
	{/each}
</div>

<style>
	.dialogue {
		position: absolute;
		bottom: 0;
		left: 0;
		width: calc(98% - 66px);
		margin: 1%;
		border-radius: 50px;
		background-color: var(--dialogue-background);
		border: 8px solid var(--dialogue-border);
		outline: 4px solid var(--dialogue-outline);
		height: calc(22% - 50px);
		padding: 25px;
		font-size: 52px;
		color: var(--dialogue-text);
		text-shadow: 4px 4px 0 var(--dialogue-text-shadow);
		user-select: none;
	}

	.line {
		position: relative;
		width: fit-content;
	}
</style>
