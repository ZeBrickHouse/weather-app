var getUser = (id, DOB, callback) => {
  var user = {
    id: id,
    name: 'John',
    DOB: DOB
  };

  setTimeout(() => {
        callback(user);
  }, 3000);
};

getUser(31, '11/14/89', (user) => {
  console.log(user);
});
