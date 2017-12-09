// Day 7 - Part 1, Puzzle 13

const fs = require('fs')

fs.readFile('sample.txt', 'utf8', (err, data) => { //, 'utf8'
	if (err) throw err
	
	let array = data.split('\n')
	
	for (const line of array) {
		let name, weight, childrenString
		if (line.includes('->')) {
			[, name, weight, childrenString] = line.match(/(\w+)\s\((\d+)\)\s->\s(.*)/)
		} else {
			[, name, weight] = line.match(/(\w+)\s\((\d+)\)/)
		}
		const children = childrenString && childrenString.split(', ') || []
		console.log(name, weight, children)
	}
	
	sortProgramTower(array)
});

function sortProgramTower(array) {
	
	// search entire list of information
	// group numbers with same weight, and assign them a parrent
	// parent is found by finding an item with childrens that matches their names
}
