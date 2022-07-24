<div class="arrow-down" />
<div class="arrow-down-mask" />

<style>
	.arrow-down {
		width: 0;
		height: 0;
		border-left: 32px solid transparent;
		border-right: 32px solid transparent;

		border-top: 32px solid var(--arrow);
		position: absolute;
		top: 0;
		right: -94px;
		animation: jumps 400ms linear infinite alternate;
		z-index: 1;
	}

	.arrow-down-mask {
		width: 0;
		height: 0;
		border-left: 36px solid transparent;
		border-right: 36px solid transparent;
		border-top: 36px solid var(--dialogue-text-shadow);
		position: absolute;
		top: 10px;
		right: -99px;
		animation: jumps 400ms linear infinite alternate;
		margin-top: 2px;
	}

	@keyframes jumps {
		from {
			top: 10px;
		}
		to {
			top: 30px;
		}
	}
</style>
