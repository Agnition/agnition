module.exports.setSamples = function(samples) {
  return {
    type: 'SET_SAMPLES',
    samples: samples
  };
};

module.exports.setIndVarOptionOnSample = function(sampleId, indVarId, optionValue) {
  return {
    type: 'SET_IND_VAR_OPTION_ON_SAMPLE',
    sampleId: sampleId,
    indVarId: indVarId,
    optionValue: optionValue
  };
};

module.exports.insertSample = function(sample) {
  return {
    type: 'INSERT_SAMPLE',
    sample: sample
  };
};

module.exports.createSample = function(sampleId) {
  return {
    type: 'CREATE_SAMPLE',
    sampleId: sampleId
  };
};

