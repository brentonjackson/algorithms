// module to count the number of occurences of a val in an array, and 


numOccurences = (arr, val) => {
	let count = 0;
	let pos = arr.indexOf(val);
	while (pos !== -1) {
		count++;
		pos = arr.indexOf(val, pos + 1)
	}
	return count;
}

const occurencesOverX = (arr, x) => {
	let filteredArr = arr.filter((val,index,array) => (numOccurences(array, val) > x));
	let uniqueFilteredArr = Array.from(new Set(filteredArr));
	
	return uniqueFilteredArr;
}

console.log(numOccurences(['l', 'l']))

module.exports = numOccurences;