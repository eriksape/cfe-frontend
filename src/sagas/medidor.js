import { call, put, takeEvery } from 'redux-saga/effects'
import { callServiceMedidor } from './../services'
import {
  MEDIDOR_REQUEST,
  MEDIDOR_SUCCESS,
  MEDIDOR_FAILURE//,
} from './../actions'


function *request(action){
  const medidor = yield call(callServiceMedidor.bind(null,action.payload))
  if(medidor.success){
    yield put({type: MEDIDOR_SUCCESS, payload: medidor});
  } else {
    yield put({type: MEDIDOR_FAILURE, payload: medidor});
  }
}

function *watch() {
  yield takeEvery(MEDIDOR_REQUEST, request)
}

export default watch
