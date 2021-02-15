/**
 * Create a promise (created here), that resolves with another promise,
 * that resolves with the string value "Nested promise value"
 */
const myPromise = new Promise((resolve, reject) => {
  // Your code here
  const nestedPromise = new Promise((resolve, reject) => {
    resolve("Nested promise value");
  });
  resolve(nestedPromise);
});

export default myPromise;
