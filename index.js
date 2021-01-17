//Create a moreZeros function which will receive a string for input,
//and return an array(or null terminated string in C) containing only
//the characters from that string whose binary representation of its ASCII
//value consists of more zeros than ones.

//You should remove any duplicate characters,
//keeping the first occurence of any such duplicates,
//so they are in the same order in the final array as
//they first appeared in the input string.

//Examples

//Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False

//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

//split the string in to characters array
//remove duplicate from the array
//convert charecters to their ascii value
//convery ascii value to binary
//take that binary and check wether we have more 0's than 1's
//teke the response and store it in to the array
function moreZeros(s) {
  let noDuplicate = s
    .split('')
    .filter(removeDuplicate)
    .map(convertToAscii)
    .map(convertToBinary)
    .filter(isMoreZeros)
    .map(convertToDecimal)
    .map(convertToChar);
  return noDuplicate;
}

function removeDuplicate(item, index, arr) {
  return arr.indexOf(item) === index;
}

function convertToAscii(c) {
  return c.charCodeAt(0);
}

function convertToBinary(number) {
  return number.toString(2);
}

function isMoreZeros(string) {
  const zeros = string.replace(/1/g, '').length;
  const ones = string.replace(/0/g, '').length;
  return zeros > ones;
}

function convertToDecimal(binary) {
  return parseInt(binary, 2);
}

function convertToChar(digit) {
  return String.fromCharCode(digit);
}
