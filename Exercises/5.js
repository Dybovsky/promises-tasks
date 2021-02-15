/**
 * In the function, you receive and array
 * You should return a promise that resolves with a new array that contains
 * the strings from the previous array but capitalized
 * If there is an item in the array which is not a string, the promise should reject
 * with the string "All items in the array should be of type string"
 * @param {string[]} arrayOfStrings
 */

function makeAllCapsAsync(arrayOfStrings) {
  let myPromise = new Promise((resolve, reject) => {
    let newarr = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
      if (typeof arrayOfStrings[i] === "string") {
        newarr.push(arrayOfStrings[i].toUpperCase());
      } else {
        reject("All items in the array should be of type string");
      }
    }
    resolve(newarr);
  });

  return myPromise;
  // Your code
}

export default makeAllCapsAsync;
