// occurences using hash map in javascript
const str = 'Hello World';
let occurrences = {};
for (let i = 0; i < str.length; i++) {
    occurrences[str[i]] = 0;
}
for (let j = 0; j < str.length; j++) {
    occurrences[str[j]]++;
}
const set1 = new Set(str)
// console.log(set1)
// console.log(occurrences)
let filtered = occurrences;
// let filtered = {};
for (let i = 0; i < str.length; i++) {
    if (occurrences[str[i]] < 2) {
        delete filtered[str[i]];
        // filtered[str[i]] = occurrences[str[i]];
    }
}

// console.log(filtered)

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

// ***************************** Finding number of matching pairs in array of integers and determining how many there are *************//
function sockMerchant(n, ar) {
    let sockSet = {};
    ar.forEach(element => {
        sockSet[element] = 0;
    });
    ar.forEach(element => {
        sockSet[element]++
    });
    let pairs = 0;
    let keys = Object.keys(sockSet);
    for (let i = 0; i < keys.length; i++) {
        pairs += Math.floor(sockSet[keys[i]] / 2);
    }

    // console.log(pairs);
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// ******** Is one string a permutation of the other ********************//
function isPermutation(str1, str2) {
    let obj1 = {}, arr2 = [];
    if (str1.length != str2.length) {
        console.log(false)
        return false
    } else {

        for (let i = 0; i < str1.length; i++) {
            obj1[str1[i]] = 0;
            arr2.push(str2[i])
        }
        for (let i = 0; i < str1.length; i++) {
            if (obj1[str2[i]] == undefined) {
                console.log(false)
                return false
                break;
            }
        }
        console.log(true)
        return true      
    }

    
}
// isPermutation('racecar', 'racerac')

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
  console.log(mergeArrays([1, 5, 13], [4, 5, 6, 35]))