/******************************** Find Repeat, Space Edition *********************************
Write a function which finds an integer that appears more than once in our array. 
(If there are multiple duplicates, you only need to find one of them.)
We have an array of integers, where:

The integers are in the range 1..n1..n
The array has a length of n+1n+1
*/


function findRepeat(numbers) {
  // Find a number that appears more than once
  // finds first one
    if ((numbers === undefined) || (numbers.length === 0)) {
        return `Not a valid input`
    }
    let dupSet = new Set();
    for (let i=0; i<numbers.length; i++) {
        if (dupSet.has(numbers[i])) {
        return numbers[i]
        } else {
        dupSet.add(numbers[i])
        }
    }
    return `No duplicates in array`
}

function findRepeat_them(numbers) {
    let floor = 1;
    let ceiling = numbers.length - 1;
  
    while (floor < ceiling) {
      const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
      const lowerRangeFloor = floor;
      const lowerRangeCeiling = midpoint;
      const upperRangeFloor = midpoint + 1;
      const upperRangeCeiling = ceiling;
      const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
      let itemsInLowerRange = 0;
      numbers.forEach(item => {
        if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
          itemsInLowerRange += 1;
        }
      });
  
      if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
        floor = lowerRangeFloor;
        ceiling = lowerRangeCeiling;
      } else {
        floor = upperRangeFloor;
        ceiling = upperRangeCeiling;
      }
    }
    return floor;
  }

console.time('Mine')
console.log(findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]))
console.timeEnd('Mine')
console.time('Theirs')
console.log(findRepeat_them([4, 1, 4, 8, 3, 2, 7, 6, 5]))
console.timeEnd('Theirs')