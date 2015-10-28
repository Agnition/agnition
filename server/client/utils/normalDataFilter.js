var _ = require('lodash');

function getNested (data, key, ids) {
  var result = {};
  _.each(ids, function (id) {
    var obj = {};
    obj[id] = data[key][id];
    obj[id]._id = id;
    _.extend(result, obj);
  });
  return result;
}

module.exports = function filterData(data, key, id) {
  var result = { experiments:{} };
  if (key === 'experiments') {
    var exp = data[key][id];
    result.experiments[id] = data[key][id];
    result.experiments[id]._id = id;
    result.depVars = getNested(data, 'depVars', exp.depVars);
    // get all of the ids for the measures from all of the depVars on this experiment
    var measureIds = _.reduce(result.depVars, function (concatted, depVar) {
      return concatted.concat(depVar.measures);
    }, []);

    result.measures = getNested(data, 'measures', measureIds);
    result.indVars = getNested(data, 'indVars', exp.indVars);
    // var requestIds = _.reduce(result.depVars, function (concatted, depVar) {
    //   return concatted.concat(depVar.requests);
    // }, []);
    // result.requests = getNested(data, 'requests', exp.requests);
    // get all of the ids for the reminders from all of the indVars on this experiment
    // var reminderIds = _.reduce(result.indVars, function (concatted, indVar) {
    //   return concatted.concat(indVar.reminders);
    // });
    // result.reminders = getNested(data, 'reminders', reminderIds);
  } else {
    console.log('this filters out only for the experiment');
  }
  return result;
};
