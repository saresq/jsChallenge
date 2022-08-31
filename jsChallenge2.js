const sortedSquareArray = array => {
	let i
	let result = []
	
	for (i = 0; i < array.length; i++) {
		result[i] = array[i] ** 2
	}

	return result.sort( (a,b) => a - b)
}

console.log(sortedSquareArray([-2, -1]))