const { PerformanceObserver, performance } = require('perf_hooks');

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
//   console.log(mergeArrays([1, 5, 13], [4, 5, 6, 35]))

// ********  
// ******** 
/** Cafe Order Checker
Given all three arrays, write a function to check that my service is first-come, first-served.
All food should come out in the same order customers requested it.
*/

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served
    if (takeOutOrders.length + dineInOrders.length != servedOrders.length) {
      return false;
    }
    while (servedOrders.length > 0) {
      if (servedOrders[0] == takeOutOrders[0] ) {
        takeOutOrders.shift();
        servedOrders.shift();
      } else if (servedOrders[0] == dineInOrders[0]) {
        dineInOrders.shift();
        servedOrders.shift();
      } else {
        return false;
      }
    }
    return true
  }

  function isFirstComeFirstServed_theirs1(takeOutOrders, dineInOrders, servedOrders) {

    // base case
    if (servedOrders.length === 0) {
        return true;
    }

    // if the first order in servedOrders is the same as the
    // first order in takeOutOrders
    // (making sure first that we have an order in takeOutOrders)
    if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {

        // take the first order off takeOutOrders and servedOrders and recurse
        return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1));

    // if the first order in servedOrders is the same as the first
    // in dineInOrders
    } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {

        // take the first order off dineInOrders and servedOrders and recurse
        return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1));

    // first order in servedOrders doesn't match the first in
    // takeOutOrders or dineInOrders, so we know it's not first-come, first-served
    } else {
        return false;
    }
}

  function isFirstComeFirstServed_theirs(takeOutOrders, dineInOrders, servedOrders, servedOrdersIndex, takeOutOrdersIndex, dineInOrdersIndex) {
    servedOrdersIndex = (typeof servedOrdersIndex !== 'undefined') ? servedOrdersIndex : 0;
    takeOutOrdersIndex = (typeof takeOutOrdersIndex !== 'undefined') ? takeOutOrdersIndex : 0;
    dineInOrdersIndex = (typeof dineInOrdersIndex !== 'undefined') ? dineInOrdersIndex : 0;

    if (servedOrdersIndex === servedOrders.length) {
        return true;
    }

    if ((takeOutOrdersIndex < takeOutOrders.length) &&
            (takeOutOrders[takeOutOrdersIndex] === servedOrders[servedOrdersIndex])) {
        takeOutOrdersIndex++;
    } else if ((dineInOrdersIndex < dineInOrders.length) &&
            (dineInOrders[dineInOrdersIndex] === servedOrders[servedOrdersIndex])) {
        dineInOrdersIndex++;
    } else {
        return false;
    }
    servedOrdersIndex++;
    return isFirstComeFirstServed_theirs(takeOutOrders, dineInOrders, servedOrders, servedOrdersIndex, takeOutOrdersIndex, dineInOrdersIndex);
}

  function isFirstComeFirstServed_best(takeOutOrders, dineInOrders, servedOrders) {
    var takeOutOrdersIndex = 0;
    var dineInOrdersIndex = 0;
    var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
    var dineInOrdersMaxIndex = dineInOrders.length - 1;

    for (var i = 0; i < servedOrders.length; i++) {
        var order = servedOrders[i];
        if (takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
                order === takeOutOrders[takeOutOrdersIndex]) {
            takeOutOrdersIndex++;
        } else if (dineInOrdersIndex <= dineInOrdersMaxIndex &&
                order === dineInOrders[dineInOrdersIndex]) {
            dineInOrdersIndex++;
        } else {
            return false;
        }
    }
    if (dineInOrdersIndex != dineInOrders.length ||
           takeOutOrdersIndex != takeOutOrders.length) {
        return false;
    }
    return true;
  }


// Tests

console.time('My algorithm');
console.log(isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]))
console.timeEnd('My algorithm');

console.time('Their recursive algorithm');
console.log(isFirstComeFirstServed_theirs1([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]))
console.timeEnd('Their recursive algorithm');

console.time('Their best recursive algorithm');
console.log(isFirstComeFirstServed_theirs([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]))
console.timeEnd('Their best recursive algorithm');

console.time('Their best iterative algorithm');
console.log(isFirstComeFirstServed_best([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]))
console.timeEnd('Their best iterative algorithm');

let a = performance.now();
isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
let b = performance.now();
console.log('Mine using performance time: ' + (b-a) + 'ms')