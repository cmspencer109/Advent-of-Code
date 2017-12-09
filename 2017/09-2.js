// Day 9 part 2

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
	let garbage = false,
		garbageCount = 0
	
	for (var i = 0; i < stream.length; i++) {
		let character = stream.charAt(i)
		
		// check for ignored character
		if (character === '!') {
			stream = stream.slice(0, i) + stream.slice(i+1) // remove current character
			stream = stream.slice(0, i) + stream.slice(i+1) // remove next character
			i--
			continue
		}
		
		if (character === '>') {
			garbage = false
			continue
		}
		
		if (garbage == true) {
			garbageCount++
			continue
		}
		
		// check for garbage
		if (character === '<') {
			garbage = true
			continue
		}
	}
	
	return garbageCount
}

console.log(getScore('<random characters>')) // 17
console.log(getScore('<<<<>')) // 3
console.log(getScore('<!!!>>')) // 0
console.log(getScore('<{!>}>')) // 2
console.log(getScore('<{o"i!a,<{i<a>')) // 10
