// Day 6 - Part 1, Puzzle 11

const fs = require('fs')

fs.readFile('11.txt', function(err, data) {  
	if (err) throw err
	
	const array = data.toString().split('\t').map(s => parseInt(s))
	
//	console.log(array.join())
	
	checkMemoryBanks(array)
});

function checkMemoryBanks(array) {
	let redistributionCycles = 0,
		memory = []
	
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
		
		// if array picture is equal to a picture in our memory array
		if (memory.includes(picture)) {
		   break
		} else {
			memory.push(picture) // save picture of array to memory array.
		}
	}
	
	console.log(redistributionCycles + ' redistribution cycles')
}
