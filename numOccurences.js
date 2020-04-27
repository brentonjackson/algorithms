// module to count the number of occurrences of a val in an array, and 


const numOccurrences = (arr, val) => {
	let count = 0;
	let pos = arr.indexOf(val);
	while (pos !== -1) {
		count++;
		pos = arr.indexOf(val, pos + 1)
	}
	return count;
}

// using a hash map
const numOccurrencesHash = (arr, val) => {
	let occurrences = {};
	// fill hashmap
	for (let i = 0; i < arr.length; i++) {
		occurrences[arr[i]] = 0;
	}
	// count keys from array
	for (let j = 0; j < arr.length; j++) {
		occurrences[arr[j]]++;
	}
	return occurrences[val]
}

// occurences of letter in string using hash map in javascript
function numOccurrenceString(str, letter) {
    let occurrences = {};
    for (let i = 0; i < str.length; i++) {
        occurrences[str[i]] = 0;
    }
    for (let j = 0; j < str.length; j++) {
        occurrences[str[j]]++;
    }
    return occurrences[letter]
    
    // // only output values that meet filter
    // let filtered = occurrences;
    // for (let i = 0; i < str.length; i++) {
    //     if (occurrences[str[i]] < 2) {
    //         delete filtered[str[i]];
    //         // filtered[str[i]] = occurrences[str[i]];
    //     }
    // }
    // // console.log(filtered)
}

const occurrencesOverX = (arr, x) => {
	let filteredArr = arr.filter((val,index,array) => (numOccurrences(array, val) > x));
	let uniqueFilteredArr = Array.from(new Set(filteredArr));
	
	return uniqueFilteredArr;
}
console.time('Array')
console.log(numOccurrences('hello', 'l'))
console.timeEnd('Array')
console.time('HashMap')
console.log(numOccurrencesHash('hello', 'l'))
console.timeEnd('HashMap')
console.time('Hash')
console.log(numOccurrenceString('hello', 'l'))
console.timeEnd('Hash')


module.exports = numOccurrences;