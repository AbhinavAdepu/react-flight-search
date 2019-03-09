import actionTypes from './actionTypes';

export function fetchFlights() {
  return {
    type: actionTypes.FETCH_FLIGHTS,
  };
}

export function filterFlights(payload) {
  return {
    type: actionTypes.FILTER_FLIGHTS,
    payload,
  };
}
