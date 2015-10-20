module.exports.setUser = function(username) {
  return {
    type: 'SET_USER',
    username: username
    // name: name
  };
};
