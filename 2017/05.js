// Puzzle 5
// http://adventofcode.com/2017/day/3

// Example spiral grid

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...

const input = 277678

function findRing(input) {
//	center = 1 item, 1
//	first ring = 8 items, 2-9
//	second ring = 16 items, 10-25
//	third ring = 24 items, 26-49
//	forth ring = 32 items, 50-81
//
//	add 8 numbers per ring

	let ringCounter = 1, // The ring we are currently on
		ringMin = 2, // The smallest number in the current ring
		ringMax = 9, // The largest number in the current ring
		ringHeight = 3, // The height (or width, as it is the same) of the current ring
		ringSize = 8, // How many numbers in the current ring
		location = 0, // Location of number on side of spiral grid
		solved = false
	
	while (!solved) {
		
		for (i = ringMin; i <= ringMax; i++) {
			location++
			
			if (location >= ringSize / 4) {
				location = 0;
			}
			
			if (i == input) {
				solved = true
				
				let ringCenter = Math.floor(ringHeight / 2)
				let stepsOffCenter = Math.abs(location - (ringCenter))
				
				let answer = stepsOffCenter + ringCounter // steps on the side + steps away
				
				console.log(answer)
			}
		}

		ringMin += ringCounter * 8
		ringMax += (ringCounter + 1) * 8
		
		ringCounter++
		ringHeight += 2
		
		ringSize = ringCounter * 8
	}
}

findRing(input)
