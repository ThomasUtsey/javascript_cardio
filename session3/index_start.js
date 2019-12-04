// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll () {
//     let sum = 0
//     let args = Array.prototype.slice.call(arguments)
//  for(let i = 0; i < args.length; i++){
//      sum += args[i]
//  }
//     return sum
// }

// function addAll() {
//     let sum = 0
//     for(i = 0;i<arguments.length;i++){
//         sum = sum + arguments[i]
//     }
//     return sum
// }

// addAll = (...rest) => {
// let sum = 0
// rest.forEach(e =>{
//  sum += e
// })
// return sum
// }

addAll = (...rest) => rest.reduce((acc,num) => acc+=num)

console.log (addAll(2,4,6,7,8))

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
    let sum = 0;

    checkForPrime = num =>{
        for (let j = 2; j < num; j++) {
            if(num % j === 0){
                return false;
            }
        }
        return true
    }
    for(let i = 2; i <= num; i++){
        if(checkForPrime(i)){
        sum += i;
        }
    }
    return sum
}


console.log(sumAllPrimes(10))

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// function seekAndDestroy(arr) {
    // const newArr = []
    // arr.forEach((e) => {
    //     if (e !== num1 && e !== num2 ){
    //         newArr.push(e)
    //     }
    // });
    // return newArr
//------------------------------------------------------------------------------------------
    // const args = Array.from(arguments)

    // filterArr = (arr) =>{
    //     return args.indexOf(arr) === -1
    // }

    // return arr.filter(filterArr)

//------------------------------------------------------------------------------------------

// }

seekAndDestroy = (arr, ...rest) => arr.filter(e => !rest.includes(e))

console.log(seekAndDestroy([2,4,5,3,6,7,2],2,4))
// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
const a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
    const arr1=[]
    const arr2=[]

    a.forEach((e,i) => e === -1?arr1.push(i):arr2.push(e))

    const sortArr = arr2.sort((a,b) => a - b)

    arr1.forEach((e,i) => sortArr.splice(arr1[i],0,-1));

    return sortArr
}
console.log(sortByHeight(a))

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
    let compare = str.charCodeAt(0)
    let missing = ''
    str.split('').map((char,i) =>{
        str.charCodeAt(i) == compare
            ? ++compare
            : missing = String.fromCharCode(compare)

    })
    return missing

}
console.log(missingLetters("abce"))
// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    const newArr = [0,0]

    arr.forEach(e =>{
        e % 2 === 0
            ? newArr[0] += e
            : newArr[1] += e
    })
return newArr
}

console.log(evenOddSums([10,35,55,3,2,4,25,6,777,4]))
