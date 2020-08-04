export {};

function concatenate(firstWord, secondWord, thirdWord): string {
  return firstWord.concat(' ').concat(secondWord).concat(' ').concat(thirdWord)
  // Write the body of this function to concatenate three words together with space between them\
  //return firstWord + ' ' + secondWord + ' ' + thirdWord
  return `${firstWord} ${secondWord} ${thirdWord}` // biežāis lietotais
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
