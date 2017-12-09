// Puzzle 6
// http://adventofcode.com/2017/day/3

// Example spiral grid

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...

// 147  142  133  122   59
// 304    5    4    2   57
// 330   10    1    1   54
// 351   11   23   25   26
// 362  747  806--->   ...

const grid = {}

grid[[0, 0]] = 1

console.log(grid)

const input = 277678

function solveSpiral(input) {
	const distance = Math.ceil((Math.sqrt(input) - 1) / 2)
	
	if (distance === 0) {
		return 0
	}
	
	const width = 1 + (distance * 2)
	
	const max = Math.pow(width, 2)
	
	const min = Math.pow(width - 2, 2) + 1
	
	const center = min + (width - 3) / 2
	
	const offset = Math.abs(input - center) % (width - 1)
	
	return distance + offset
}

console.log(solveSpiral(input))
