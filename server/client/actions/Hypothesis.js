 
export function setHypothesis(hypothesis) {
  return {
    type: 'SET_HYPOTHESIS',
    hypothesis: hypothesis
  };
}

export function setInVar(inVar) {
  return { 
    type: 'SET_CAUSE',
    inVar: inVar
  };
}

export function setDepVar(depVar) {
  return {
    type: 'SET_EFFECT',
    depVar: depVar
  };
}