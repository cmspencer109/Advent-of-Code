// Day 4, Puzzle 8

const fs = require('fs');

let numberOfValidPassphrases = 0;

fs.readFile('07.txt', function(err, data) {  
	if (err) throw err;
	
	let array = data.toString().split('\n');
	
	for (i in array) {
		let passphrase = array[i]
		
		if (passphraseIsValid(passphrase)) {
			numberOfValidPassphrases++
		}
	}
	
	console.log(numberOfValidPassphrases)
});

function passphraseIsValid(input) {
	const words = input.split(' ')
	let isValid = true

	for (let i = 0; i < words.length; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (alphabetize(words[i]) == alphabetize(words[j])) {
				isValid = false;
			}
		}
	}

	return isValid
}

function alphabetize(word) {
	return word.split('').sort().join('');
}
