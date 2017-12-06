// Day 5, Puzzle 9

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
			
		let newPosition = position + parseInt(array[position]) // move to new position
			
		array[position]++ // increment old position
		
		position = newPosition // assign new position to old position
		
	//	console.log(position, array[position])
	}
	
	console.log('Escaped in ' + steps + ' steps')
}
