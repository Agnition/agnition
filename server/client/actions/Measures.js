module.exports.setMeasures = function(measures) {
  return {
    type: 'SET_MEASURES',
    measures: measures
  };
};

module.exports.createMeasure = function (measureId) {
  return {
    type: 'CREATE_MEASURE',
    measureId: measureId
  };
};

module.exports.setKind = function (kind, measureId) {
  return {
    type: 'SET_KIND',
    kind: kind,
    measureId: measureId
  };
};

module.exports.setUnit = function (unit, measureId) {
  return {
    type: 'SET_UNIT',
    unit: unit,
    measureId: measureId
  };
};


module.exports.setScale = function (scale, measureId) {
  return {
    type: 'SET_SCALE',
    scale: scale,
    measureId: measureId
  };
};

module.exports.setScaleDescriptionMin = function (description, measureId) {
  return {
    type: 'SET_SCALE_DESCRIPTION_MIN',
    description: description,
    measureId: measureId
  };
};

module.exports.setScaleDescriptionMiddle = function (description, measureId) {
  return {
    type: 'SET_SCALE_DESCRIPTION_MIDDLE',
    description: description,
    measureId: measureId
  };
};

module.exports.setScaleDescriptionMax = function (description, measureId) {
  return {
    type: 'SET_SCALE_DESCRIPTION_MAX',
    description: description,
    measureId: measureId
  };
};

module.exports.addSample = function (sampleId, measureId) {
  return {
    type: 'ADD_SAMPLE',
    sampleId: sampleId,
    measureId: measureId
  };
};

module.exports.addListItem = function (item, measureId) {
  return {
    type: 'ADD_LIST_ITEM',
    item: item,
    measureId: measureId
  };
};

module.exports.removeListItem = function (item, measureId) {
  return {
    type: 'REMOVE_LIST_ITEM',
    item: item,
    measureId: measureId
  };
};

module.exports.setMeasureName = function (name, measureId) {
  return {
    type: 'SET_MEASURE_NAME',
    name: name,
    measureId: measureId
  };
};
