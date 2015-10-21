module.exports.setUser = function(username, id) {
  return {
    type: 'SET_USER',
    username: username,
    id: id
  };
};

module.exports.logout = function() {
  return {
    type: 'LOG_OUT_USER'
  };
};
