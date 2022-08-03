<script lang="ts">
	import { KeyCodes } from '$lib/constants';
	import withClickSound from '$lib/with-click-sound';

	export let volumeOn: boolean;

	const links = [
		{ href: '/cv', blank: true, name: 'CV' },
		{ href: 'https://github.com/rzru', blank: true, name: 'GitHub' },
		{
			href: 'https://www.linkedin.com/in/vladimir-polovtsev-789418198/',
			blank: true,
			name: 'LinkedIn'
		},
		{ href: 'https://t.me/soryulangley', blank: true, name: 'Telegram' },
		{ href: 'mailto:rzzzzru@gmail.com', blank: false, name: 'Email' },
		{ href: 'https://github.com/rzru/rzru.github.io', blank: true, name: 'Page Repo' }
	];
	const click = withClickSound();
	const navigateList = (event: KeyboardEvent) => {
		if ([KeyCodes.Up, KeyCodes.Down, KeyCodes.Enter].includes(event.code as KeyCodes) && volumeOn) {
			click.play();
		}

		if (event.code === KeyCodes.Up) {
			if (selectedLinkIdx > 0) {
				selectedLinkIdx -= 1;
			} else {
				selectedLinkIdx = links.length - 1;
			}
		}

		if (event.code === KeyCodes.Down) {
			if (selectedLinkIdx < links.length - 1) {
				selectedLinkIdx += 1;
			} else {
				selectedLinkIdx = 0;
			}
		}

		if (event.code === KeyCodes.Enter) {
			window.open(links[selectedLinkIdx]?.href, '_blank');
		}
	};

	let selectedLinkIdx = 0;
</script>

<div class="outer">
	<nav class="container">
		<ul>
			{#each links as { href, blank, name }, i}
				<li on:mouseenter={() => (selectedLinkIdx = i)}>
					{#if i === selectedLinkIdx}
						<span>►</span>
					{/if}
					<a
						on:click={() => {
							if (volumeOn) {
								click.play();
							}
						}}
						{href}
						target={blank ? '_blank' : '_self'}>{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<svelte:body on:keydown={navigateList} />

<style>
	.outer {
		position: absolute;
		border: 5px solid var(--select-outline);
		border-radius: 10px;
		right: 4.5%;
		bottom: 150px;
	}

	.container {
		background-color: var(--dialogue-background);
		padding: 15px 25px;
		font-size: 18px;
		text-transform: uppercase;
		border: 10px solid var(--select-border);
		border-radius: 5px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		position: relative;
	}

	a {
		text-decoration: none;
		color: var(--dialogue-text);
		text-shadow: 2px 2px 0 var(--dialogue-text-shadow);
		width: 100%;
		display: inline-block;
	}

	span {
		color: var(--dialogue-text);
		text-shadow: 2px 2px 0 var(--dialogue-text-shadow);
		position: absolute;
		left: -18px;
		top: -5px;
		font-size: 18px;
	}

	@media (min-width: 800px) {
		.outer {
			bottom: 250px;
		}

		.container {
			font-size: 28px;
			padding: 25px 40px;
		}

		span {
			left: -35px;
			font-size: 28px;
			text-shadow: 3px 3px 0 var(--dialogue-text-shadow);
		}

		a {
			text-shadow: 3px 3px 0 var(--dialogue-text-shadow);
		}
	}

	@media (min-width: 1200px) {
		.outer {
			bottom: 270px;
		}

		.container {
			font-size: 32px;
			padding: 25px 40px;
		}

		span {
			left: -35px;
			font-size: 32px;
			text-shadow: 3px 3px 0 var(--dialogue-text-shadow);
		}

		a {
			text-shadow: 3px 3px 0 var(--dialogue-text-shadow);
		}
	}
</style>
