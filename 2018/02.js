// Puzzle 2

const fs = require('fs')

const data = fs.readFileSync('02.txt', 'utf8')

//console.log('Solution:', problem1(data))

function problem1(data) {
	let boxIds = data.toString().split('\n')
	let has2 = 0
	let has3 = 0
		
	for (id of boxIds) {
		let lookup = []
		done3 = false
		done2 = false
		
		for (c of id.split('')) {
			let obj = lookup.find(x => x.key === c)
			
			if (obj) {
				let index = lookup.indexOf(obj)
				lookup.fill(obj.value++, index, index++)
//				console.log('updating: ', obj)
			} else {
				lookup.push({
					key:   c,
					value: 1
				})
//				console.log('adding: ', c)
			}
		}
		
		for (const c of lookup) {
			if (c.value === 3 && !done3) {
				has3++
				done3 = true
			} else if (c.value === 2 && !done2) {
				has2++
				done2 = true
			}
		}
	}
	
	return has2 * has3
}

const example = fs.readFileSync('example.txt', 'utf8')
console.log('Solution:', problem2(example))
console.log('Solution:', problem2(data))

function problem2(data) {
	let boxIds = data.toString().split('\n')
	let boxIdsClone = boxIds.slice()
		
	for (let [index, id] of boxIds.entries()) {
		let remainingIds = boxIds.slice(index + 1)
		let targetChars = id.split('')
		
		for (id of remainingIds) {
			let unmatchedCharCount = 0
			let unmatchedCharPosition
			let idChars = id.split('')
			
			for (let [index, value] of targetChars.entries()) {
				if (value != idChars[index]) {
					unmatchedCharCount++
					unmatchedCharPosition = index
				}
			}
			
			if (unmatchedCharCount == 1) {
				idChars.splice(unmatchedCharPosition, 1)
				return idChars.join('')
			}
		}
	}
}
