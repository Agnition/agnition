module.exports.setDepVars = function(depVars) {
  return {
    type: 'SET_DEP_VAR',
    depVars: depVars
  };
};