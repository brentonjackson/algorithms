// fizzbuzz
function fizzbuzz(n) {
	let numbers = [];
	for (let i = 1; i < n+1; i++) {
		numbers.push(i);
		
		if ((numbers[i-1] % 3 == 0) && (numbers[i-1] % 5 == 0)) { 
			console.log('FizzBuzz')
		}
		else if (numbers[i-1] % 3 == 0) { 
			console.log('Fizz')
		}
		else if (numbers[i-1] % 5 == 0) {
			console.log('Buzz')
		}
		else {
			console.log(numbers[i-1])
		}
	}
}
