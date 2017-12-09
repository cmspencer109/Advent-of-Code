// Day 9 part 1

const fs = require('fs')

fs.readFile('09-1.txt', 'utf8', function(err, data) {  
	if (err) throw err
	
	console.log(getScore(data))
});

let sample = "{}" // 1
let sample2 = "{{{}}}" // 6
let sample3 = "{{{},{},{{}}}}" // 16 
let sample4 = "{{<ab>},{<ab>},{<ab>},{<ab>}}" // 9
let sample5 = "{{<!!>},{<!!>},{<!!>},{<!!>}}" // 9
let sample6 = "{{<a!>},{<a!>},{<a!>},{<ab>}}" // 3

function getScore(stream) {
	let score = 0,
		groupLevel = 0,
		garbage = false
	
	for (var i = 0; i < stream.length; i++) {
		let character = stream.charAt(i)
		
		// check for ignored character
		if (character === '!') {
			i++
			continue
		}
		
		// check for garbage
		if (character === '<') {
			garbage = true
			continue
		}
		if (character === '>') {
			garbage = false
			continue
		}
		
		if (garbage == true) {
			continue
		}
		
		// check for group
		if (character === '{') {
			groupLevel++
			score += groupLevel
		}
		if (character === '}') {
			groupLevel--
		}
	}
	
	return score
}

console.log(getScore(sample))
console.log(getScore(sample2))
console.log(getScore(sample3))
console.log(getScore(sample4))
console.log(getScore(sample5))
console.log(getScore(sample6))
