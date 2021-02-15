/**
 * Create a promise (created here), that resolves after a timeout of 1.5 seconds
 */
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setInterval(resolve, 1500);
  } else {
    reject();
  }

  // Your code here
});

export default myPromise;
