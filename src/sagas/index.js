import {
  fork,
} from 'redux-saga/effects';

import Flight from './FlightSaga';

export default function* root() {
  yield fork(Flight);
}
