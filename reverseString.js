/*************************** Reverse String in Place **********************
Write a function that takes an array of characters 
and reverses the letters in place.
*/

function reverse(arr) {

    // Reverse the input array of characters in place
    for (let i=0; i< Math.floor(arr.length / 2) + 1; i++) {
      let last = arr.length - i - 1;
      if (arr[i] != arr[last]) {
        let placeholder = arr[last]
        arr[last] = arr[i]
        arr[i] = placeholder
      }
    }
    return arr
}

function reverse_them(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap characters
      const temp = arrayOfChars[leftIndex];
      arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
      arrayOfChars[rightIndex] = temp;
  
      // Move towards middle
      leftIndex++;
      rightIndex--;
    }
    return arrayOfChars
}

console.time('Mine')
console.log(reverse('ABCDE'.split('')))
console.timeEnd('Mine')
console.time('Theirs')
console.log(reverse_them('ABCDE'.split('')))
console.timeEnd('Theirs')

/**
Tests
 */

// let desc = 'empty string';
// let input = ''.split('');
// reverse(input);
// let actual = input.join('');
// let expected = '';
// assertEqual(actual, expected, desc);

// desc = 'single character string';
// input = 'A'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'A';
// assertEqual(actual, expected, desc);

// desc = 'longer string';
// input = 'ABCDE'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'EDCBA';
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }