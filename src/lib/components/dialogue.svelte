<script lang="ts">
	import Arrow from '$lib/components/arrow.svelte';
	import { Events, KeyCodes } from '$lib/constants';
	import withClickSound from '$lib/with-click-sound';

	export let onClick: () => void;
	export let lines: string[];
	export let outOfReplicas: boolean;
	export let volumeOn: boolean;

	const click = withClickSound();
	const typewritingSpeed = 80;
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

	let interval: ReturnType<typeof setInterval>;
	let renderedLines: string[] = [];
	let lineIdx = 0;
	let charIdx = 0;
	let typewritingEnded = false;

	document.addEventListener(Events.Click, onClickLocal);
	document.addEventListener(Events.KeyDown, (event) => {
		if (event.code === KeyCodes.Space) {
			onClickLocal();
		}
	});

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
		width: calc(98% - 56px);
		margin: 1%;
		background-color: var(--dialogue-background);
		border: 8px solid var(--dialogue-border);
		border-radius: 25px;
		height: calc(22% - 50px);
		padding: 20px;
		font-size: 16px;
		color: var(--dialogue-text);
		text-shadow: 2px 2px 0 var(--dialogue-text-shadow);
		user-select: none;
	}

	.line {
		position: relative;
		width: fit-content;
	}

	@media (min-width: 800px) {
		.dialogue {
			font-size: 36px;
			outline: 4px solid var(--dialogue-outline);
			text-shadow: 4px 4px 0 var(--dialogue-text-shadow);
		}
	}

	@media (min-width: 1200px) {
		.dialogue {
			border-radius: 50px;
			font-size: 52px;
			outline: 4px solid var(--dialogue-outline);
			text-shadow: 4px 4px 0 var(--dialogue-text-shadow);
		}
	}
</style>
