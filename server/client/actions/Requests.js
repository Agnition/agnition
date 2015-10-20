module.exports.setRequests = function(requests) {
  return {
    type: 'SET_REQUESTS',
    requests: requests
  };
};
