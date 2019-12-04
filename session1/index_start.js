// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  //  return str
  //   .split('')
  //   .reverse()
  //   .join('')
  return str
    .split('')
    .reduce((revStr,char) => revStr = char + revStr,'')
  }
  
  
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {
  return str === str
  .split('')
  .reverse()
  .join('')
  }
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
    return parseInt(int
      .toString()
      .split('')
      .reverse()
      .join('')) 
      * Math.sign(int)
    }
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {
    // let newString = ''
    //   for(word of str.split(' ')){
    //     newString =newString +
    //      ' ' 
    //      + word
    //         .substring(0,1)
    //         .toUpperCase()
    //      + word
    //         .substring(1)
    //   }    
    //   return newString
  
    return str.replace(/\b[a-z 0-9]/gi, char => char.toUpperCase())
      }
  
  
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {
    const chrMap = {}
    let maxNum = 0
    let maxChr = ''
    for(chr of str){
      chrMap[chr]
      ?chrMap[chr]++
      :chrMap[chr] = 1
      
    
    if(chrMap[chr] > maxNum){
      maxNum = chrMap[chr]
      maxChr = chr
    }
  }
    return maxChr
  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
    const fizzBuzz = []
   for(i = 0; i<=100; i++){
     i > 0 && i % 3 === 0 && i % 5 === 0
      ? fizzBuzz.push(`${i}: FizzBuzz`)
      : i > 0 && i % 3 === 0
        ? fizzBuzz.push(`${i}: Fizz`)
        : i > 0 && i % 5 === 0
          ? fizzBuzz.push(`${i}:Buzz`)
          : fizzBuzz.push(i)
   }
  
  return fizzBuzz
  
  }
  
  // Call Function
  const output = capitalizeLetters('test thids function');
  
  console.log(output);
  