class GuessingGame {
	constructor() {
		this.min;
		this.max;
		this.actualNum;
	}

	setRange(min, max) {
		this.min = min;
		this.max = max;

	}

	guess() {
		let actualNum = Math.round((this.max + this.min) / 2);
		this.actualNum = actualNum;
		return this.actualNum;
	}

	lower() {
			this.max = this.actualNum;
	}

	greater() {
			this.min = this.actualNum;
	}
}

module.exports = GuessingGame;
