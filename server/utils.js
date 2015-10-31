module.exports.expPopArray = 
  [
  'indVars',
  'indVars.reminders',
  'depVars',
  'depVars.requests',
  'depVars.measures',
  'depVars.measures.samples'
  ];

module.exports.userPopArray = 
  [
  'exps', 
  'exps.indVars',
  'exps.indVars.reminders',
  'exps.depVars',
  'exps.depVars.requests',
  'exps.depVars.measures',
  'exps.depVars.measures.samples'
  ];

module.exports.ensureIsNumber = function (value) {
  //prevents nubmers being saved as strings in db...
  //but preserves our mixed type ability for categorical data
  if(isNaN(Number(value))) {
    return value;
  } else {
    return Number(value);
  }
};
