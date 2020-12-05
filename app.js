const Calculator = require('./Calculator')

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const calc = new Calculator();
const recursiveAsyncReadLine = function () {
  rl.question('Calculator Input: ', function (answer) {
  	switch(answer) {
  		case 'exit':
  			return r1.close();
		case 'c':
			calc.clear();
			break;
		case '=':
			calc.calculate();
			break;
		case '+':
			calc.takeInput('+');
			break;
		case '-':
			calc.takeInput('-');
			break;
		case 0:
			calc.takeInput(0);
			break;
		case 1:
			calc.takeInput(1);
			break;
		case 2:
			calc.takeInput(2);
			break;
		case 3:
			calc.takeInput(3);
			break;
		case 4:
			calc.takeInput(4);
			break;
		case 5:
			calc.takeInput(5);
			break;
		case 6:
			calc.takeInput(6);
			break;
		case 7:
			calc.takeInput(7);
			break;
		case 8:
			calc.takeInput(8);
			break;
		case 9:
			calc.takeInput(9);
			break;
		default:
			break;
  	}
    
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine();