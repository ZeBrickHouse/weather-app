var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numeric');
      }
    }, 1500);
  });
};

asyncAdd(5, 7).then((res) => {
  console.log('Success:', res);
  return asyncAdd(res, 2);
}).then((res) => {
  console.log('Should be 14;', res);
}).catch((errorMessage) => {
  console.log('Error:', errorMessage)
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey.  It worked!');
//     reject('Unable to fulfill Promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });
