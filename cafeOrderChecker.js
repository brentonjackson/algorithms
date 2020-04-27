/******************************** Cafe Order Checker *****************************************
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