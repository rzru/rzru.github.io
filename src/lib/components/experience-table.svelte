<script lang="ts">
	interface Dates {
		start: string;
		end: string;
	}

	interface ExperienceRow {
		dates: Dates;
		name: string;
		place: string;
		position: string;
		website: string;
		achievements: string[];
	}

	export let experience: ExperienceRow[];
</script>

<div class="experience">
	{#each experience as { dates, name, place, position, website, achievements }}
		<div class="row">
			<div class="dates">{dates.start} - {dates.end}</div>
			<div class="info">
				<div class="lead">
					<div>
						<b class="lead-text">
							{name} / <a href={website} target="_blank">{website}</a>
						</b>
						<b class="lead-text">{position}</b>
					</div>
					<div>{place}</div>
				</div>
				<ul class="achievements">
					{#each achievements as achievement}
						<li>{achievement}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>

<style>
	.experience {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.achievements {
		margin: 0;
		padding: 5px 16px;
	}

	.row {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.lead-text {
		display: block;
		margin-bottom: 2px;
	}

	.lead {
		display: flex;
		flex-direction: column;
	}

	a {
		color: var(--select-outline);
	}

	@media (min-width: 600px), print {
		.row {
			flex-direction: row;
		}

		.dates {
			width: 11%;
		}

		.info {
			width: 89%;
		}

		.lead {
			flex-direction: row;
			justify-content: space-between;
		}

		.achievements {
			width: 82%;
		}
	}
</style>
