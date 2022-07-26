<script lang="ts">
	import { browser } from '$app/env';
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
	const interval = 300;
	const onScroll = () => {
		const delta = container.scrollTop - lastScrollTop;
		let newPokemonList = pokemonList.map((pokemon) => {
			let y = pokemon.y + delta / 2;

			while (y < 0) {
				y += document.body.offsetHeight;
			}

			while (y > document.body.offsetHeight) {
				y -= document.body.offsetHeight;
			}

			return {
				...pokemon,
				y
			};
		});
		requestAnimationFrame(() => {
			pokemonList = newPokemonList;
		});
		lastScrollTop = container.scrollTop;
	};

	let maxPokemon = 120;
	let pokemonList: Pokemon[] = [];
	let container: HTMLDivElement;
	let lastScrollTop = 0;
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
					x: randomIntegerInRange(0, document.body.offsetWidth),
					y: randomIntegerInRange(0, document.body.offsetHeight),
					spintime: randomIntegerInRange(200, 2000),
					invertRotation: Math.random() < 0.5
				}
			];
			id = id === maxPokemon ? 1 : id + 1;
		}, interval);
	}
</script>

<div class="layout">
	<div bind:this={container} class="container" on:scroll={onScroll}>
		<div class="header">
			<div class="header-text">
				<h1>Vladimir Polovtsev (rzru)</h1>
				<h2>Lead Frontend Developer / Middle Rust Developer</h2>
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
			<b>Summary:</b>
			<div class="profile">
				<p>
					Developer with fundamental knowledge of the entire web stack and computer science in
					general. My passion is solving unusual puzzles and designing complex interfaces.
				</p>
				<p>
					I have a lot of experience in optimization, animation, <s>reincarnation</s>, architecture,
					testing, microfrontends, library writing, cooking and video games. I interview, report,
					mentor junior developers, perform as a speaker, communicate, communicate and communicate
					again. I have a background in theater, so no problem with soft skills and communication. I
					can write backend if needed and speak SQL as if it were my native language.
				</p>
			</div>
			<b>Skills:</b>
			<div class="skills">
				{#each skills as skill}
					<div class="skill">{skill}</div>
				{/each}
			</div>
			<b>Work experience:</b>
			<table class="experience">
				<tr>
					<td class="dates subheader">11/2021 - 04/2022</td>
					<td>
						<div class="subheader">
							OZON Technologies / <a href="ozon.ru" target="_blank">ozon.ru</a>
						</div>
						<div class="subheader">Lead Frontend Developer</div>
						<ul class="achievements">
							<li>Conducted technical interviews</li>
							<li>Performed as a speaker on internal technical meetups</li>
							<li>Led a team of junior and middle level developers</li>
							<li>
								Conducted code review and Agile project team meetings, ensured strict code quality
								control on production level
							</li>
							<li>Improved architecture and developments stack</li>
						</ul>
					</td>
					<td class="place subheader">Moscow, Russia</td>
				</tr>
				<tr>
					<td class="dates subheader">06/2020 - 11/2021</td>
					<td>
						<div class="subheader">
							OZON Technologies / <a href="ozon.ru" target="_blank">ozon.ru</a>
						</div>
						<div class="subheader">Senior Frontend Developer</div>
						<ul class="achievements">
							<li>Developed modern logistics systems with complex graph algorithms</li>
							<li>Developed UI components in own ui-kit solution</li>
							<li>Analyzed hidden issues</li>
							<li>
								Conducted code review and Agile project team meetings, ensured strict code quality
								control on production level
							</li>
							<li>Improved architecture and developments stack</li>
						</ul>
					</td>
					<td class="place subheader">Moscow, Russia</td>
				</tr>
				<tr>
					<td class="dates subheader">06/2020 - 01/2022</td>
					<td>
						<div class="subheader">
							data3consulting / <a href="https://data3.ru/" target="_blank">data3.ru</a>
						</div>
						<div class="subheader">IT-Consultant</div>
						<ul class="achievements">
							<li>Wrote documentation about performed algorithmic features</li>
							<li>Coached junior- and middle-level developers</li>
							<li>Conducted technical interviews</li>
							<li>Performed team-meetings and IT seminars</li>
						</ul>
					</td>
					<td class="place subheader">Moscow, Russia</td>
				</tr>
				<tr>
					<td class="dates subheader">07/2018 - 06/2020</td>
					<td>
						<div class="subheader">
							data3consulting / <a href="https://data3.ru/" target="_blank">data3.ru</a>
						</div>
						<div class="subheader">Team Lead</div>
						<ul class="achievements">
							<li>Managed a team of 5+ developers</li>
							<li>Developed modern Web CMS with both Laravel/React.js</li>
							<li>Ensured teamwork, work on code development</li>
							<li>
								Developed modern mobile/web application for Moscow District Gas Industry: remote
								team management.
							</li>
							<li>Performed integration with many remote services such as SAP, 1C etc.</li>
						</ul>
					</td>
					<td class="place subheader">Moscow, Russia</td>
				</tr>
				<tr>
					<td class="dates subheader">06/2017 - 06/2018</td>
					<td>
						<div class="subheader">
							LavkaLavka / <a href="https://vlavke.ru/" target="_blank">vlavke.ru</a>
						</div>
						<div class="subheader">Fullstack Web Developer</div>
						<ul class="achievements">
							<li>Developed SPA with Vue.JS</li>
							<li>
								Developed user-friendly cryptocurrency projects such as exchangers and market price
								analyzers in PHP и JavaScript
							</li>
							<li>Developed Cryptocurrency exchange module</li>
							<li>Developed monitoring and analysis system for cryptocurrency exchange</li>
							<li>
								Developed Cryptocurrency bonus system for Evotor cash registers - React Native,
								developed mobile applications with React Native
							</li>
							<li>Ensured teamwork, provided daily reports on scope of work.</li>
						</ul>
					</td>
					<td class="place subheader">Moscow, Russia</td>
				</tr>
			</table>
		</div>
	</div>
	{#each pokemonList as { gif, x, y, spintime, id, invertRotation } (id)}
		<img
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

<style>
	.layout {
		width: 100%;
		height: 100vh;
		background-color: var(--dialogue-border);
		display: flex;
		justify-content: center;
		gap: 20px;
		overflow: hidden;
	}

	.container {
		margin: 2% 0;
		width: 45%;
		background-color: var(--dialogue-background);
		padding: 25px;
		font-size: 32px;
		border: 10px solid var(--select-border);
		outline: 5px solid var(--select-outline);
		border-radius: 5px;
		overflow-y: auto;
		z-index: 1;
		font-family: 'Roboto', sans-serif;
		color: var(--select-outline);
	}

	img {
		animation: spin linear infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	h1 {
		font-size: 28px;
		margin: 0;
		font-weight: normal;
	}

	h2 {
		font-size: 18px;
		margin: 0;
		font-weight: normal;
	}

	h3 {
		font-size: 14px;
		margin: 0;
		font-weight: normal;
	}

	.header {
		display: flex;
		justify-content: space-between;
		padding-bottom: 15px;
	}

	.me {
		width: 150px;
		height: 150px;
		object-fit: cover;
	}

	.header-text {
		display: flex;
		flex-direction: column;
		gap: 5px;
		justify-content: center;
	}

	.profile {
		font-size: 14px;
		padding-top: 15px;
		padding-bottom: 15px;
		display: flex;
		flex-direction: column;
		gap: 5px;
		border-top: 1px solid var(--select-border);
	}

	p {
		margin: 0;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		padding-bottom: 15px;
		padding-top: 15px;
		border-top: 1px solid var(--select-border);
	}

	.skill {
		display: inline-block;
		font-size: 14px;
		border-radius: 3px;
		background-color: var(--select-border);
		color: var(--dialogue-background);
		padding: 2px 5px;
	}

	a {
		color: var(--select-outline);
	}

	.body b {
		font-size: 16px;
	}

	.experience {
		width: 100%;
		font-size: 14px;
		padding-bottom: 15px;
		padding-top: 15px;
		border-top: 1px solid var(--select-border);
	}

	.experience .dates,
	.place {
		width: 25%;
	}

	.place {
		text-align: right;
	}

	td {
		vertical-align: baseline;
	}

	.experience .achievements {
		margin: 5px 0;
		padding-inline-start: 15px;
		padding-bottom: 5px;
	}

	.subheader {
		font-weight: 500;
	}
</style>
