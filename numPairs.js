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