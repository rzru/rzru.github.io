<div class="arrow-down" />
<div class="arrow-down-mask" />

<style>
	.arrow-down {
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-top: 8px solid var(--arrow);
		position: absolute;
		animation: jumps 400ms linear infinite alternate;
		z-index: 1;
		right: -25px;
	}

	.arrow-down-mask {
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid var(--dialogue-text-shadow);
		position: absolute;
		animation: jumps 400ms linear infinite alternate;
		right: -27px;
		margin-top: 1px;
	}

	@keyframes jumps {
		from {
			top: 0px;
		}
		to {
			top: 10px;
		}
	}

	@media (min-width: 800px) {
		.arrow-down {
			border-left: 18px solid transparent;
			border-right: 18px solid transparent;
			border-top: 18px solid var(--arrow);
			top: 0;
			right: -50px;
		}

		.arrow-down-mask {
			border-left: 20px solid transparent;
			border-right: 20px solid transparent;
			border-top: 20px solid var(--dialogue-text-shadow);
			top: 10px;
			right: -52px;
			margin-top: 2px;
		}

		@keyframes jumps {
			from {
				top: 5px;
			}
			to {
				top: 25px;
			}
		}
	}

	@media (min-width: 1200px) {
		.arrow-down {
			border-left: 32px solid transparent;
			border-right: 32px solid transparent;
			border-top: 32px solid var(--arrow);
			top: 0;
			right: -94px;
		}

		.arrow-down-mask {
			border-left: 36px solid transparent;
			border-right: 36px solid transparent;
			border-top: 36px solid var(--dialogue-text-shadow);
			top: 10px;
			right: -99px;
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
	}
</style>
