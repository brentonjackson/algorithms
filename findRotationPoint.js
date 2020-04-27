/******************************** Find Rotation Point *****************************************
Write a function for finding the index of the "rotation point," given an array that is sorted but
starts in the middle, goes to end, then starts from the beginning.
*/


const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

function findRotationPoint(words) {

  // Find the rotation point in the vector
  let refNum = words[0];
  // guess point halfway to start
  let current = Math.floor(words.length/2);
  // keep track of how many times I check
  let tryNum = 0;
  // while the word before is alphabetically before the current word, keep trying
  while (words[current] > words[current - 1]) {
    if (words[current] < refNum) {
      // look at left side of current
      current = Math.floor(current/2);
    } else {
      // look at right side of current
      current = Math.floor(current + current/2);
    }
    // keep track of how many times I check
    tryNum++
  }
//   console.log(`This is try number ${tryNum}`)
  return current;
}

function findRotationPoint_them(words) {
    const firstWord = words[0];
  
    let floorIndex = 0;
    let ceilingIndex = words.length - 1;
  
    while (floorIndex < ceilingIndex) {
  
      // Guess a point halfway between floor and ceiling
      const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));
  
      // If guess comes after first word or is the first word
      if (words[guessIndex] >= firstWord) {
  
        // Go right
        floorIndex = guessIndex;
      } else {
  
        // Go left
        ceilingIndex = guessIndex;
      }
  
      // If floor and ceiling have converged
      if (floorIndex + 1 === ceilingIndex) {
  
        // Between floor and ceiling is where we flipped to the beginning
        // so ceiling is alphabetically first
        break;
      }
    }
  
    return ceilingIndex;
}

console.time('Mine')
console.log(findRotationPoint(words))
console.timeEnd('Mine')
console.time('Theirs')
console.log(findRotationPoint_them(words))
console.timeEnd('Theirs')