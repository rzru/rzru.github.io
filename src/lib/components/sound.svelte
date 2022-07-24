<script lang="ts">
	export let volumeOn: boolean;
	export let onClick: (event: MouseEvent) => void;
	export let filter: string;

	$: src = volumeOn ? 'volume-up.svg' : 'volume-mute.svg';
	$: alt = volumeOn ? 'Sound On' : 'Sound Off';
</script>

<img on:click={onClick} {src} {alt} style="filter: {filter};" />

<style>
	img {
		height: 48px;
		width: 48px;
		position: absolute;
		top: 15px;
		right: 20px;
		cursor: pointer;
		user-select: none;
	}
</style>
