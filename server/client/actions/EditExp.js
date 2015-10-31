module.exports.renameDepVar = function (depVar, index) {
  return {
    type: 'RENAME_DEP_VAR',
    changeDepVar: depVar,
    key : index
  };
};

module.exports.viewExperiments = function () {
  return {
    type: 'VIEW_EXPERIMENTS'
  };
};
