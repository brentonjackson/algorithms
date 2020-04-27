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
isPermutation('racecar', 'racerac')