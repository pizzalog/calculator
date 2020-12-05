const Calculator = require('./Calculator')

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const calc = new Calculator();
const recursiveAsyncReadLine = function () {
  rl.question('Calculator Input: ', function (answer) {
  	let currentInputs;
  	switch(answer) {
  		case 'exit':
  			return rl.close();
		case 'c':
			currentInputs = calc.clear();
			console.log('current inputs: ', currentInputs);
			break;
		case '=':
			const result = calc.calculate();
			console.log('result: ', result);
			break;
		case '+':
			currentInputs = calc.takeInput('+');
			console.log('current inputs: ', currentInputs);
			break;
		case '-':
			currentInputs = calc.takeInput('-');
			console.log('current inputs: ', currentInputs);
			break;
		case '0':
			currentInputs = calc.takeInput(0);
			console.log('current inputs: ', currentInputs);
			break;
		case '1':
			currentInputs = calc.takeInput(1);
			console.log('current inputs: ', currentInputs);
			break;
		case '2':
			currentInputs = calc.takeInput(2);
			console.log('current inputs: ', currentInputs);
			break;
		case '3':
			currentInputs = calc.takeInput(3);
			console.log('current inputs: ', currentInputs);
			break;
		case '4':
			currentInputs = calc.takeInput(4);
			console.log('current inputs: ', currentInputs);
			break;
		case '5':
			currentInputs = calc.takeInput(5);
			console.log('current inputs: ', currentInputs);
			break;
		case '6':
			currentInputs = calc.takeInput(6);
			console.log('current inputs: ', currentInputs);
			break;
		case '7':
			currentInputs = calc.takeInput(7);
			console.log('current inputs: ', currentInputs);
			break;
		case '8':
			currentInputs = calc.takeInput(8);
			console.log('current inputs: ', currentInputs);
			break;
		case '9':
			currentInputs = calc.takeInput(9);
			console.log('current inputs: ', currentInputs);
			break;
		default:
			break;
  	}
    
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine();