<script lang="ts">
	const links = [
		{ href: '/cv', blank: false, name: 'CV' },
		{ href: 'https://github.com/rzru', blank: true, name: 'GitHub' },
		{
			href: 'https://www.linkedin.com/in/vladimir-polovtsev-789418198/',
			blank: true,
			name: 'LinkedIn'
		},
		{ href: 'https://t.me/soryulangley', blank: true, name: 'Telegram' },
		{ href: 'mailto:rzzzzru@gmail.com', blank: false, name: 'Email' },
		{ href: 'https://github.com/rzru/rzru', blank: true, name: 'Page Repo' }
	];

	let selectedLinkIdx = 0;
</script>

<nav class="container">
	<ul>
		{#each links as { href, blank, name }, i}
			<li on:mouseenter={() => (selectedLinkIdx = i)}>
				{#if i === selectedLinkIdx}
					<span>►</span>
				{/if}
				<a {href} target={blank ? '_blank' : '_self'}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.container {
		position: absolute;
		background-color: var(--dialogue-background);
		right: 4.5%;
		bottom: 28%;
		padding: 25px 40px;
		font-size: 32px;
		text-transform: uppercase;
		border: 10px solid var(--select-border);
		outline: 5px solid var(--select-outline);
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
		text-shadow: 3px 3px 0 var(--dialogue-text-shadow);
		width: 100%;
		display: inline-block;
	}

	span {
		color: var(--dialogue-text);
		text-shadow: 3px 3px 0 var(--dialogue-text-shadow);
		position: absolute;
		left: -35px;
		top: -5px;
		font-size: 32px;
	}
</style>
