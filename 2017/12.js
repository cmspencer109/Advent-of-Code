// Day 6 - Part 2, Puzzle 12

const fs = require('fs')

fs.readFile('11.txt', function(err, data) {  
	if (err) throw err
	
	const array = data.toString().split('\t').map(s => parseInt(s))
	
	console.log(checkMemoryBanks(array))
});

function checkMemoryBanks(array) {
	let redistributionCycles = 0,
		loopCycles = 0,
		memory = {}
	
	while (true) {
		redistributionCycles++
		
		// find the largets number in array
		// assign that value to distribution var
		let distribution = Math.max.apply(Math, array) // find largest in array
		let index = array.indexOf(distribution) // get index of largest
		// assign that index to 0
		array[index] = 0;
				
		// move to next index and start looping through array
		while (distribution > 0) {
			index++ // move to next array position
			array[index % array.length]++ // increment value
			distribution-- // decrement distribution
		}
		
		let picture = array.join()
		
		// if memory has a value that matches picture
		if (memory.hasOwnProperty(picture)) {
			return redistributionCycles - memory[picture]
		} else {
			memory[picture] = redistributionCycles // save cycle number with picture
		}
	}
}
