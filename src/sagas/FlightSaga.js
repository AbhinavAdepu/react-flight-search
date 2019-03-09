import {
  take,
  fork,
  put,
  call,
} from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import api from '../api';

/**
 * fetch flights
 */
function* fetchFlights() {
  while (true) {
    yield take(actionTypes.FETCH_FLIGHTS);
    yield put({
      type: actionTypes.FETCH_START,
    });
    const response = yield call(api.get);
    if (response.status >= 400) {
      yield put({
        type: actionTypes.FETCH_API_FAIL,
        error: response.data.message,
      });
    } else {
      yield put({
        type: actionTypes.FETCH_FLIGHTS_SUCCESS,
        ...response,
      });
      yield put({
        type: actionTypes.FETCH_END,
      });
    }
  }
}

export default function* () {
  yield fork(fetchFlights);
}
