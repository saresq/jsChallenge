const runLengthEncoding = (string) => {
	let i
	let currentCharacter
	let prevChar = string.charAt(0)
	let count = 0
	let result = ''

	for (i=0; i < string.length; i++ ) {
		currentCharacter = string.charAt(i)
		if (prevChar === currentCharacter && count < 9){
			count += 1
		} else {
			result += `${count}${prevChar}`
			prevChar = currentCharacter
			count = 1
		}
	}
	result += `${count}${prevChar}`
	
	
	return result
}

console.log(runLengthEncoding('AAAAAAAAAABB444$$'))