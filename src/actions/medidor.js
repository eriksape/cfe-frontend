export const MEDIDOR_REQUEST = 'MEDIDOR_REQUEST';
export const MEDIDOR_SUCCESS = 'MEDIDOR_SUCCESS';
export const MEDIDOR_FAILURE = 'MEDIDOR_FAILURE';
export const MEDIDOR_SELECTED = 'MEDIDOR_SELECTED';
export const MEDIDOR_DELTA = 'MEDIDOR_INCREASE';
export const MEDIDOR_DECREASE = 'MEDIDOR_DECREASE';
export const MEDIDOR_INCREASE = 'MEDIDOR_INCREASE';

const action = (type, payload = {}) => ({type, payload})

export const medidor_actions = {
  request: () => action(MEDIDOR_REQUEST),
  success: response => action(MEDIDOR_SUCCESS, {response}),
  failure: response => action(MEDIDOR_FAILURE, {response}),
  selected: value => action(MEDIDOR_SELECTED, value),
  increase: position => action(MEDIDOR_INCREASE, position),
  decrease: position => action(MEDIDOR_DECREASE, position)
}