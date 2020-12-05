
class Calculator {
	constructor() {
		this.inputs = [];
	}
	calculate() {
		let operation = '';
		const result = this.inputs.reduce((acc, currentInput) => {
			if(Number.isInteger(currentInput)) {
				if(operation === '+') {
					return acc + currentInput
				} else if(operation === '-') {
					return acc - currentInput
				} else {
					return currentInput;
				}
			} else {
				operation = currentInput;
				return acc;
			}
		}, 0);
		this.clear();
		return result;
	}
	clear() {
		this.inputs = [];
		return this.inputs;
	}
	takeInput(input) {
		this.inputs.push(input);
		return this.inputs;
	}
} 	

module.exports = Calculator;