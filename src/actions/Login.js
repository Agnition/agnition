module.exports.login = function (loggedIn) {
  return {
    type: 'LOGIN',
    loggedIn: loggedIn
  };
};