'use strict';

module.exports.setUser = function(username, name) {
  return {
    type: 'SET_USER',
    username: username,
    name: name
  };
};
