const { PerformanceObserver, performance } = require('perf_hooks');

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
console.time('Hash')
console.log(numOccurrenceString('hello', 'l'))
console.timeEnd('Hash')



// ***************** Finding number in number array ***********************************//
let isItHere = (arr, k) => {
   if(arr.includes(k)) {
       console.log("YES")
   } else {
       console.log("NO");
   }
}

let nums = new Array(5).fill(5);
// console.log(nums)
// isItHere(nums, 5);


// ******** Merge two sorted arrays of numbers ********************//
function mergeArrays(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    let merged = [];
    let longerArray = [];
    let shorterArray = [];

    if (myArray.length >= alicesArray.length) {
        longerArray = myArray;
        shorterArray = alicesArray;
    } else {
        longerArray = alicesArray;
        shorterArray = myArray;
    }
    
    
    let shorterCounter = 0;
    if ((myArray.length > 0) && (alicesArray.length > 0)) {
        
      for (let i = 0; i < longerArray.length; i++) {
        while ((shorterCounter < shorterArray.length) && 
                (shorterArray[shorterCounter] < longerArray[i])) {
                  merged.push(shorterArray[shorterCounter]);
                  shorterCounter++;
                }
        merged.push(longerArray[i]);
      }
      if (shorterArray[shorterCounter] > longerArray[longerArray.length - 1]){
        merged.push(shorterArray[shorterArray.length - 1])
        }
    }
    
    if (myArray.length == 0){
      merged = alicesArray;
    } else if (alicesArray.length == 0) {
      merged = myArray;
    }
    
    return merged;
  }
//   console.log(mergeArrays([1, 5, 13], [4, 5, 6, 35]))