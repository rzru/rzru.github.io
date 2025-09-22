<script lang="ts">
	import { browser } from '$app/env';
	import ExperienceTable from '$lib/components/experience-table.svelte';
	import { randomIntegerInRange } from '$lib/utils';

	interface Pokemon {
		id: number;
		gif: string;
		x: number;
		y: number;
		spintime: number;
		invertRotation: boolean;
	}

	const skills = [
		'JavaScript',
		'TypeScript',
		'Node.JS',
		'Rust',
		'React',
		'Vue',
		'Svelte',
		'VueX',
		'Redux',
		'MobX',
		'GraphQL',
		'HTML',
		'CSS',
		'SQL',
		'*NIX',
		'GIT',
		'CI/CD',
		'Tokio',
		'NPM',
		'Cargo'
	];

	const gifs = ['bulbasaur.gif', 'charmander.gif', 'eevee.gif', 'squirtle.gif', 'pikachu.gif'];

	const experience = [
		{
			dates: {
				start: '07/2025',
				end: 'To Date'
			},
			name: 'Parloa',
			place: 'Berlin, Germany',
			position: 'Senior Frontend (Platform) Engineer',
			website: 'https://www.parloa.com',
			achievements: [
				'Led the architectural proposal and the design for the next-generation conversational widget',
				"Drove significant improvements to the company's internal microfrontend infrastructure",
				"Advanced the internal server-driven UI platform by refining it's capabilities and expanding it's flexibility for product teams"
			]
		},
		{
			dates: {
				start: '07/2024',
				end: '06/2025'
			},
			name: 'HelloFresh',
			place: 'Berlin, Germany',
			position: 'Software Staff Engineer',
			website: 'https://www.hellofresh.com/',
			achievements: [
				'Participated in the development of the architecture of new product and technical initiatives',
				'Continuously involved in the RFC and ADR writing and review cycle',
				'Completely rewrote one of the crucial pages from scratch along the way getting rid of legacy code and implementing best practices',
				'Completed a POC and ultimately integrated GraphQL to the organisations technical stack',
				'Presented as a speaker at internal technical meetups, sharing insights and best practices',
				'Conducted coding and architectural interviews, mentored junior and mid-level developers'
			]
		},
		{
			dates: {
				start: '09/2022',
				end: '07/2024'
			},
			name: 'HelloFresh',
			place: 'Berlin, Germany',
			position: 'Senior Frontend Engineer',
			website: 'https://www.hellofresh.com/',
			achievements: [
				'Reduced web application load time by ~40% within the initial two months of working in the company',
				'Led the web implementation of key C-Level initiatives',
				'Led diverse technical initiatives including TypeScript migration, Design System migration, RTL migration and more',
				'Authored technical documentation, RFCs, and ADRs for all ongoing initiatives',
				'Was a part of the team that started the adoption of GraphQL throughout the organization',
				'Presented as a speaker at internal technical meetups, sharing insights and best practices',
				'Conducted coding and architectural interviews, mentored junior and mid-level developers'
			]
		},
		{
			dates: {
				start: '11/2021',
				end: '04/2022'
			},
			name: 'OZON Technologies',
			place: 'Moscow, Russia',
			position: 'Lead Frontend Engineer',
			website: 'https://www.ozon.ru/',
			achievements: [
				'Authored technical documentation, RFCs, and ADRs for all ongoing initiatives',
				'Moderated code review sessions and Agile project team meetings',
				'Presented as a speaker at internal technical meetups',
				'Conducted coding and architectural interviews, mentored junior and mid-level developers'
			]
		},
		{
			dates: {
				start: '06/2020',
				end: '11/2021'
			},
			name: 'OZON Technologies',
			place: 'Moscow, Russia',
			position: 'Senior Frontend Engineer',
			website: 'https://www.ozon.ru/',
			achievements: [
				'Engineered logistics systems using intricate graph algorithms to optimize efficiency',
				'Developed custom UI components within a proprietary UI-kit solution',
				'Identified and resolved intricate technical challenges through thorough analysis',
				'Optimized architecture and development stack to enhance efficiency and scalability'
			]
		},
		{
			dates: {
				start: '07/2018',
				end: '06/2020'
			},
			name: 'data3consulting',
			place: 'Moscow, Russia',
			position: 'Team Lead',
			website: 'https://data3.ru/',
			achievements: [
				'Directed and mentored a high-performing team of 5+ developers, fostering collaboration and code excellence',
				'Engineered a Web CMS utilizing Laravel and React.js, delivering robust and scalable solutions'
			]
		},
		{
			dates: {
				start: '06/2017',
				end: '07/2018'
			},
			name: 'LavkaLavka',
			place: 'Moscow, Russia',
			position: 'Full-Stack Web Engineer',
			website: 'https://vlavke.ru/',
			achievements: [
				'Engineered a dynamic Single Page Application (SPA) using Vue.js, delivering an immersive user experience',
				'Innovated user-friendly cryptocurrency projects including exchangers and market price analyzers, employing PHP and JavaScript for robust functionality',
				'Designed and implemented a Cryptocurrency exchange module to facilitate seamless transactions',
				'Created a comprehensive monitoring and analysis system for cryptocurrency exchanges, ensuring real-time insights into market trends'
			]
		}
	];
	const interval = 300;
	const gifHypotenuse = 85;

	let maxPokemon = 120;
	let pokemonList: Pokemon[] = [];
	let id = 1;

	if (browser) {
		setInterval(() => {
			if (pokemonList.length >= maxPokemon) {
				pokemonList.shift();
			}

			pokemonList = [
				...pokemonList,
				{
					id,
					gif: gifs[randomIntegerInRange(0, gifs.length - 1)],
					x: randomIntegerInRange(0, document.body.scrollWidth - gifHypotenuse),
					y: randomIntegerInRange(0, document.body.scrollHeight - gifHypotenuse),
					spintime: randomIntegerInRange(200, 2000),
					invertRotation: Math.random() < 0.5
				}
			];
			id = id === maxPokemon ? 1 : id + 1;
		}, interval);
	}

	$: isMobile = browser && 'ontouchstart' in window;
</script>

<svelte:head>
	<title>CV | Vladimir Polovtsev</title>
</svelte:head>

<div class="layout">
	<div class="container">
		<div class="header">
			<div class="header-text">
				{#if !isMobile}
					<h3>
						<div class="download" on:click={() => window.print()}>Print CV / Download as PDF</div>
					</h3>
				{/if}
				<h1>Vladimir Polovtsev (rzru)</h1>
				<h2>Staff Frontend Engineer</h2>
				<h3><b>Location:</b> Berlin, Germany</h3>
				<h3><b>Languages:</b> English: C1, German: B2, Japanese: N4, Russian: C2</h3>
				<h3><b>Education:</b> Tertiary, College of Culture And Arts, Arkhangelsk, Russia, 2017</h3>
				<h3>
					<b>Contacts:</b> E-mail: <a href="mailto:rzzzzru@gmail.com">rzzzzru@gmail.com</a>,
					Telegram: <a href="https://t.me/soryulangley" target="_blank">@soryulangley</a>
				</h3>
			</div>
			<img class="me" src="images/me.jpg" alt="it's me with a cat!" />
		</div>
		<div class="body">
			<div class="block">
				<b class="block-header">Summary:</b>
				<div class="profile">
					<p>
						I'm a developer with a solid grasp of the entire web stack and a deep understanding of
						computer science. I love tackling unique challenges and crafting intricate, engaging
						interfaces.
					</p>

					<p>
						I've gained a lot of experience in areas like optimization, animation, architecture,
						testing, microfrontends, and library development — along with some extras like cooking
						and video games. I also mentor junior devs, conduct interviews, report, give talks, and,
						above all, communicate — a lot. I have a background in theater, so soft skills and
						connecting with people come naturally to me. Oh, and I can write backend code (Node /
						Rust) and speak SQL like it's my native tongue!
					</p>
				</div>
			</div>
			<div class="block">
				<b class="block-header">Skills:</b>
				<div class="skills">
					{#each skills as skill}
						<div class="skill">{skill}</div>
					{/each}
				</div>
			</div>
			<div class="block">
				<b class="block-header">Work experience:</b>
				<ExperienceTable {experience} />
			</div>
		</div>
	</div>
	<div>
		{#each pokemonList as { gif, x, y, spintime, id, invertRotation } (id)}
			<img
				class="pokemon"
				src="gifs/{gif}"
				style="
                    position: absolute; 
                    top: {y}px; 
                    left: {x}px;
                    animation-duration: {spintime}ms; 
                    animation-direction: {invertRotation ? 'reverse' : 'normal'}
                "
				alt={gif}
			/>
		{/each}
	</div>
</div>

<style>
	:global(body) {
		background-color: var(--dialogue-border);
	}

	.layout {
		width: 100%;
		height: 100%;
		background-color: var(--dialogue-border);
		font-family: 'Roboto', sans-serif;
		color: var(--select-outline);
		display: flex;
		justify-content: center;
	}

	.container {
		margin: 5px;
		width: 100%;
		background-color: var(--dialogue-background);
		padding: 25px;
		font-size: 32px;
		border: 10px solid var(--select-border);
		border-radius: 5px;
		z-index: 1;
		font-family: 'Roboto', sans-serif;
		color: var(--select-outline);
	}

	.header {
		display: flex;
		flex-direction: column-reverse;
		gap: 20px;
	}

	.me {
		object-fit: cover;
		width: 180px;
		height: 180px;
	}

	.header-text {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	h1,
	h2,
	h3 {
		margin: 0;
		font-weight: normal;
	}

	h1 {
		font-size: 22px;
	}

	h2 {
		font-size: 18px;
	}

	h3 {
		font-size: 14px;
	}

	a {
		color: var(--select-outline);
	}

	.block {
		padding-top: 15px;
		font-size: 14px;
	}

	.block-header {
		font-size: 18px;
		display: block;
		width: 100%;
		border-bottom: 1px solid var(--select-outline);
		padding-bottom: 5px;
		margin-bottom: 10px;
	}

	p {
		margin: 0;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.skill {
		display: inline-block;
		font-size: 14px;
		border-radius: 3px;
		background-color: var(--select-border);
		color: var(--dialogue-background);
		padding: 2px 5px;
	}

	.profile {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	img {
		animation: spin linear infinite;
	}

	.download {
		text-decoration: underline;
		cursor: pointer;
		margin-bottom: 10px;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	@media (min-width: 600px) {
		.container {
			margin: 2%;
			width: 80%;
		}

		.header {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}

	@media (min-width: 1200px) {
		.container {
			width: 50%;
		}
	}

	@media print {
		.layout {
			background-color: white;
		}

		.container {
			border: none;
			background-color: white;
			padding: 0;
			margin: 0;
			width: 100%;

			color: var(--media-text);
		}

		.pokemon {
			display: none;
		}

		.header {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.download {
			display: none;
		}

		h1 {
			font-size: 20px;
		}

		h2 {
			font-size: 16px;
		}

		h3 {
			font-size: 12px;
		}

		.block {
			font-size: 12px;
		}

		.block-header {
			font-size: 16px;
		}

		.skill {
			font-size: 12px;
			background-color: var(--white);
			color: var(--media-text);
			padding: 0;
		}

		.me {
			width: 150px;
			height: 150px;
		}
	}
</style>
