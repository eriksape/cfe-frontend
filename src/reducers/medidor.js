import { Record, List, fromJS } from 'immutable';
import {
  MEDIDOR_REQUEST,
  MEDIDOR_SUCCESS,
  MEDIDOR_FAILURE,
  MEDIDOR_SELECTED,
  MEDIDOR_INCREASE,
  MEDIDOR_DECREASE,
}  from './../actions'

const InitialState = Record({
  selected: null,
  isLoading:false,
  error: false,
  data:List(),
  value:0,
});
export default (state = new InitialState(), action) => {

  const { type, payload } = action

  switch (type) {
    case MEDIDOR_REQUEST:
      return state
        .set('isLoading',true)
        .set('error', false);
    case MEDIDOR_SUCCESS:
      return state
        .set('isLoading',false)
        .set('error', false)
        .set('data', fromJS(payload.response));
    case MEDIDOR_FAILURE:
      return state
        .set('isLoading',false)
        .set('error', true);
    case MEDIDOR_INCREASE:
      return state.update('value', value => value + payload);
    case MEDIDOR_DECREASE:
      return state.update('value', value => value - payload);
    case MEDIDOR_SELECTED:
      return state
        .set('selected', payload)
        .set('value', state.get('data')
          .find(data => data.get('id') === payload)
          .get('ultima_captura')
        );
    default:
      return state;
  }

}
