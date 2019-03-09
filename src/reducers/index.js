import { combineReducers } from 'redux';

import {
  reducer as form,
} from 'redux-form';

import flight from './FlightReducer';

export default combineReducers({
  flight,
  form,
});
