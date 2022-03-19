class Round {
	constructor() {
		this.rollButton = document.getElementById("roll");
		this.display = document.getElementById("display");
		this.rollTimes = document.getElementById("roll-times");
	}

	vallidateInput() {
		if (isNaN(this.rollTimes.value) || this.rollTimes.value.length === 0) {
			alert("請輸入數字格式。");
			this.clearInput();
			throw Error("Not a valid number.");
		}
		if (parseInt(this.rollTimes.value) < 1) {
			alert("數值小於1，請重新輸入");
			this.clearInput();
			throw Error("Number is less than one.");
		}
	}

	rollDice() {
		this.clearResult();
		this.vallidateInput();
		const times = parseInt(this.rollTimes.value);

		for (let i = 0; i < times; i++) {
			let result = document.createElement("div");
			result.innerHTML = `第${i + 1}次 擲出結果: ${roll()}`;
			result.id = i;
			this.displayResult(result);
		}
	}

	displayResult(content) {
		this.display.appendChild(content);
	}

	clearInput() {
		this.rollTimes.value = "";
	}

	clearResult() {
		while (this.display.firstChild) {
			this.display.removeChild(this.display.firstChild);
		}
	}
}

function roll() {
	return Math.floor(Math.random() * 6) + 1;
}

function app() {
	round = new Round();
}

app();
