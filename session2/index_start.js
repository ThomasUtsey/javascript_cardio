// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  const longArr = sen
    .toLowerCase()
    .match(/[a-z0-9]+/g)
    .sort((a, b) => b.length - a.length);

  longestWord = longArr.filter(word => word.length >= longArr[0].length);

  return longestWord.length === 1 ? longestWord[0] : longestWord;
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // const chunk = []
  // let i = 0
  // while(i < arr.length){
  //   chunk
  //     .push(arr
  //       .slice(i,len + i))
  //   i = i+len
  // }
  // return chunk

  const chunk = [];

  arr.forEach(e => {
    const last = chunk[chunk.length - 1];
    !last || last.length === len ? chunk.push([e]) : last.push(e);
  });
  return chunk;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // return arrays
  //   .reduce((a,b)=> a.concat(b),'')

  //------------------------------------------

  // return []
  // .concat
  // .apply([],arrays)

  //---------------------------------------

  // return []
  // .concat
  // .apply([],arrays)

  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

isAnagram = (str1, str2) => formatStr(str1) === formatStr(str2);

formatStr = str =>
  str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str
    .toLowerCase()
    .replace(/[a-z]/gi, char => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String
        .fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/[a|e|i|o|u]/g,(char) => char.toUpperCase())

  return newStr;
}

// Call Function

const array = [[1, 2], [3, 4], [5, 6], [7]];
const output = letterChanges("wrtwertddsgheert");

console.log(output);
