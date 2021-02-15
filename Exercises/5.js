/**
 * In the function, you receive and array
 * You should return a promise that resolves with a new array that contains
 * the strings from the previous array but capitalized
 * If there is an item in the array which is not a string, the promise should reject
 * with the string "All items in the array should be of type string"
 * @param {string[]} arrayOfStrings
 */
function makeAllCapsAsync(arrayOfStrings) {
  // Your code
  return new Promise((resolve, reject) => {
    const newArray = [];
    for (let word of arrayOfStrings) {
      if (typeof word !== "string") {
        reject("All items in the array should be of type string");
        return;
      } else {
        newArray.push(word.toUpperCase());
      }
    }
    resolve(newArray);
  });
}

export default makeAllCapsAsync;
