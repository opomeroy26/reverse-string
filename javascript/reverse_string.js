function reverseString(str) {
  // type your code here
  // set an empty string, get the last letter and return it as the first

  let reversed = ""

  for (let i = str.length - 1; i > -1; --i ) {
    reversed = reversed + str[i] ;
  }

  return reversed;
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
