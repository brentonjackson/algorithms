/******************************** Inflight Entertainment *********************************
Write a function that takes an integer flightLength (in minutes) 
and an array of integers movieLengths (in minutes) 
and returns a boolean indicating whether there are 
two numbers in movieLengths whose sum equals flightLength.
*/

function canTwoMoviesFillFlight(movieLengths, flightLength) {
    // Determine if two movie runtimes add up to the flight length
    if ((movieLengths == undefined) || (movieLengths.length < 2)) {
      return false;
    }
    let movieSet = new Set()
    for (let i = 0; i < movieLengths.length; i++) {
      movieSet.add(movieLengths[i]);
    }
    for (let i = 0; i < movieLengths.length; i++) {
      if ( movieSet.has(flightLength - movieLengths[i])) {
        return true;
      }
    }
    return false;
}

function canTwoMoviesFillFlight_them(movieLengths, flightLength) {

    // Movie lengths we've seen so far
    const movieLengthsSeen = new Set();
  
    for (let i = 0; i < movieLengths.length; i++) {
      const firstMovieLength = movieLengths[i];
  
      const matchingSecondMovieLength = flightLength - firstMovieLength;
      if (movieLengthsSeen.has(matchingSecondMovieLength)) {
        return true;
      }
  
      movieLengthsSeen.add(firstMovieLength);
    }
  
    // We never found a match, so return false
    return false;
}

console.time('Mine')
console.log(canTwoMoviesFillFlight([3, 8, 3], 6))
console.timeEnd('Mine')
console.time('Theirs')
console.log(canTwoMoviesFillFlight_them([3, 8, 3], 6))
console.timeEnd('Theirs')