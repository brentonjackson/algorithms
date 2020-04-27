/*************************** Apple Stocks **********************
Write an efficient function that takes stockPrices and returns 
the best profit I could have made from one purchase and one sale 
of one share of Apple stock yesterday.
The indices are the time (in minutes) past trade opening time, 
which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.

Ex:
  const stockPrices = [10, 7, 5, 8, 11, 9];
  getMaxProfit(stockPrices);
  // Returns 6 (buying for $5 and selling for $11)

*/

function getMaxProfit(stockPrices) {
    // Calculate the max profit
    let maxProfit, buyIndex = 0;
    let buyPrice = stockPrices[0];
    let sellPrice = stockPrices[stockPrices.length - 1];
    for (let i = 1; i < stockPrices.length - 1; i++) {
      if (stockPrices[i] < buyPrice) {
        buyPrice = stockPrices[i];
        buyIndex = i;
      }
    }
    for (let i=buyIndex + 1; i<stockPrices.length; i++) {
      if (stockPrices[i] > sellPrice) {
        sellPrice = stockPrices[i];
      }
    }
    maxProfit = sellPrice - buyPrice;
    return maxProfit;
}

function getMaxProfit_them(stockPrices) {
    if (stockPrices.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
    }
  
    // We'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];
  
    // Start at the second (index 1) time
    // We can't sell at the first time, since we must buy first,
    // and we can't buy and sell at the same time!
    // If we started at index 0, we'd try to buy *and* sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // maxProfit is supposed to be *negative*--we'd return 0.
    for (let i = 1; i < stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
  
      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = currentPrice - minPrice;
  
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
  
      // Update minPrice so it's always
      // the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);
    }
  
    return maxProfit;
  }

console.time('Mine')
console.log(getMaxProfit([1, 5, 3, 2]))
console.timeEnd('Mine')
console.time('Theirs')
console.log(getMaxProfit_them([1, 5, 3, 2]))
console.timeEnd('Theirs')

/**
 * Tests
 */
// let desc = 'price goes up then down';
// let actual = getMaxProfit([1, 5, 3, 2]);
// let expected = 4;
// assertEqual(actual, expected, desc);

// desc = 'price goes down then up';
// actual = getMaxProfit([7, 2, 8, 9]);
// expected = 7;
// assertEqual(actual, expected, desc);

// desc = 'price goes up all day';
// actual = getMaxProfit([1, 6, 7, 9]);
// expected = 8;
// assertEqual(actual, expected, desc);

// desc = 'price goes down all day';
// actual = getMaxProfit([9, 7, 4, 1]);
// expected = -2;
// assertEqual(actual, expected, desc);

// desc = 'price stays the same all day';
// actual = getMaxProfit([1, 1, 1, 1]);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'error with empty prices';
// const emptyArray = () => (getMaxProfit([]));
// assertThrowsError(emptyArray, desc);

// desc = 'error with one price';
// const onePrice = () => (getMaxProfit([1]));
// assertThrowsError(onePrice, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }

// function assertThrowsError(func, desc) {
//   try {
//     func();
//     console.log(`${desc} ... FAIL`);
//   } catch (e) {
//     console.log(`${desc} ... PASS`);
//   }
// }