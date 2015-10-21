module.exports.setUser = function(username, id) {
  return {
    type: 'SET_USER',
    username: username,
    id: id
  };
};
