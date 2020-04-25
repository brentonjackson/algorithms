// module calculating and returning array with number of occurences over some value x
const numOccurences = require('./numOccurences')

const occurencesOverX = (arr, x) => {
	let filteredArr = arr.filter((val,index,array) => (numOccurences(array, val) > x));
	let uniqueFilteredArr = Array.from(new Set(filteredArr));
	
	return uniqueFilteredArr;
}

module.exports = occurencesOverX;
