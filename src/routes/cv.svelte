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
				start: '09/2022',
				end: 'To Date'
			},
			name: 'HelloFresh',
			place: 'Berlin, Germany',
			position: 'Senior Frontend Developer',
			website: 'https://www.hellofresh.com/',
			achievements: []
		},
		{
			dates: {
				start: '11/2021',
				end: '04/2022'
			},
			name: 'OZON Technologies',
			place: 'Moscow, Russia',
			position: 'Lead Frontend Developer',
			website: 'https://www.ozon.ru/',
			achievements: [
				'Conducted technical interviews',
				'Performed as a speaker on internal technical meetups',
				'Led a team of junior and middle level developers',
				'Conducted code review and Agile project team meetings, ensured strict code quality control on production level',
				'Improved architecture and developments stack'
			]
		},
		{
			dates: {
				start: '06/2020',
				end: '11/2021'
			},
			name: 'OZON Technologies',
			place: 'Moscow, Russia',
			position: 'Senior Frontend Developer',
			website: 'https://www.ozon.ru/',
			achievements: [
				'Developed modern logistics systems with complex graph algorithms',
				'Developed UI components in own ui-kit solution',
				'Analyzed hidden issues',
				'Conducted code review and Agile project team meetings, ensured strict code quality control on production level',
				'Improved architecture and developments stack'
			]
		},
		{
			dates: {
				start: '06/2020',
				end: '01/2022'
			},
			name: 'data3consulting',
			place: 'Moscow, Russia',
			position: 'IT-Consultant',
			website: 'https://data3.ru/',
			achievements: [
				'Wrote documentation about performed algorithmic features',
				'Coached junior- and middle-level developers',
				'Conducted technical interviews',
				'Performed team-meetings and IT seminars'
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
				'Managed a team of 5+ developers',
				'Developed modern Web CMS with both Laravel/React.js',
				'Ensured teamwork, work on code development',
				'Developed modern mobile/web application for Moscow District Gas Industry: remote team management.',
				'Performed integration with many remote services such as SAP, 1C etc.'
			]
		},
		{
			dates: {
				start: '06/2017',
				end: '07/2018'
			},
			name: 'LavkaLavka',
			place: 'Moscow, Russia',
			position: 'Full-Stack Web Developer',
			website: 'https://vlavke.ru/',
			achievements: [
				'Developed SPA with Vue.JS',
				'Developed user-friendly cryptocurrency projects such as exchangers and market price analyzers in PHP and JavaScript',
				'Developed Cryptocurrency exchange module',
				'Developed monitoring and analysis system for cryptocurrency exchange',
				'Developed Cryptocurrency bonus system for Evotor cash registers - React Native, developed mobile applications with React Native',
				'Ensured teamwork, provided daily reports on scope of work.'
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
				<h2>Lead Frontend Developer / Middle Rust Developer</h2>
				<h3><b>Location:</b> Berlin, Germany</h3>
				<h3><b>Languages:</b> English: B2, German: A1, Russian: C2</h3>
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
						Developer with fundamental knowledge of the entire web stack and computer science in
						general. My passion is solving unusual puzzles and designing complex interfaces.
					</p>
					<p>
						I have a lot of experience in optimization, animation, <s>reincarnation</s>,
						architecture, testing, microfrontends, library writing, cooking and video games. I
						interview, report, mentor junior developers, perform as a speaker, communicate,
						communicate and communicate again. I have a background in theater, so no problem with
						soft skills and communication. I can write backend if needed and speak SQL as if it were
						my native language.
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
		.container {
			border: none;
			background-color: white;
			padding: 0;
			margin: 0;
			width: 100%;
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
	}
</style>
