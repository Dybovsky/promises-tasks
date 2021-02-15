/**
 * Create a promise (created here), that resolves with the value "Hello World"
 */
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Hello World");
  } else {
    reject();
  }

  // Your code here
});

export default myPromise;
