console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 5000);

setTimeout(() => {
  console.log('Second Timeout');
}, 0);

console.log('Finishing up');