// Day 5 - part 2, Puzzle 10

const fs = require('fs')

fs.readFile('09.txt', function(err, data) {  
	if (err) throw err
	
	const array = data.toString().split('\n')
	
	escapeArray(array)
});

function escapeArray(array) {
	let position = 0,
		steps = 0
	
	while (array[position] !== undefined) {
		steps++
		
		let positionValue = parseInt(array[position])
			
		let newPosition = position + positionValue // move to new position
			
		if (positionValue >= 3) {
			array[position]-- // decrement old position
		} else {
			array[position]++ // increment old position
		}
		
		position = newPosition // assign new position to old position
		
		//	console.log(position, array[position])
	}
	
	console.log('Escaped in ' + steps + ' steps')
}
