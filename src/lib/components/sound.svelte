<script lang="ts">
	export let volumeOn: boolean;
	export let onClick: (event: MouseEvent) => void;
	export let filter: string;

	$: src = volumeOn ? 'icons/volume-up.svg' : 'icons/volume-mute.svg';
	$: alt = volumeOn ? 'Sound On' : 'Sound Off';
</script>

<img on:click={onClick} {src} {alt} style="filter: {filter};" />

<style>
	img {
		height: 32px;
		width: 32px;
		position: absolute;
		top: 8px;
		right: 15px;
		cursor: pointer;
		user-select: none;
	}
</style>
