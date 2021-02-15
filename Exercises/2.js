/**
 * Create a promise (created here), that resolves after a timeout of 1.5 seconds
 */
const myPromise = new Promise((resolve, reject) => {
  // Your code here
  setTimeout(() => {
    resolve();
  }, 1500);
});

export default myPromise;
