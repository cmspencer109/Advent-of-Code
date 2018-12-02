// Puzzle 1

const fs = require('fs')

const data = fs.readFileSync('01.txt', 'utf8')

//example(problem1, '+1, -2, +3, +1', 3)
//console.log('Solution:', problem1(data))
console.log('Solution:', problem2(data))

function example(problem, input, output) {
	const solution = problem(input)
	
	let inputJSON = JSON.stringify(input)
	
	if (inputJSON.length > 20) {
		inputJSON = '...'
	}
	
	if (solution == output) {
		console.log(`✔ ${problem.name}(${inputJSON}) → ${JSON.stringify(solution)}`)
	} else {
		console.log(`✘ ${problem.name}(${inputJSON}) → ${JSON.stringify(solution)} != ${JSON.stringify(output)}`)
	}
}

function problem1(data) {
	let array = data.toString().split('\n');
	let result = 0;
		
	for (i of array) {
		console.log(i);
		result += parseInt(i);
	}
	
	return result
}

function problem2(data) {
	let array = data.toString().split('\n');
	let result = 0;
	let hasBeenSeenBefore = new Set()
		
	while (true) {
		for (i of array) {
			result += parseInt(i);
			if (hasBeenSeenBefore.has(result)) {
				return result
			}
			hasBeenSeenBefore.add(result);
		}
	}
}