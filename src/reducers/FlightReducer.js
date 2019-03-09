import moment from 'moment';
import actionTypes from '../actions/actionTypes';

const initialState = {
  cities: ['Pune (PNQ)', 'Mumbai (BOM)', 'Bengaluru (BLR)', 'Delhi (DEL)'],
  passengers: [
    {
      label: 1,
      value: '1',
    },
    {
      label: 2,
      value: '2',
    },
    {
      label: 3,
      value: '3',
    }],
  flights: [],
  oneWayFlights: [],
  returnFlights: [],
  oneWayFlightDetail: {},
  returnFlightDetail: {},
};

export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: action.data,
      };

    case actionTypes.FILTER_FLIGHTS: {
      let returnFlights = [];
      let returnFlightDetail = {};
      const flights = state.flights.filter(flight => (flight.origin === action.payload.origin[0] && flight.destination === action.payload.destination[0] && flight.date === moment(action.payload.date).format('YYYY/MM/DD')));
      if (action.payload.return_date) {
        returnFlights = state.flights.filter(flight => (flight.origin === action.payload.destination[0] && flight.destination === action.payload.origin[0] && flight.date === moment(action.payload.return_date).format('YYYY/MM/DD')));
        returnFlightDetail = {
          origin: action.payload.destination[0],
          destination: action.payload.origin[0],
          date: action.payload.return_date,
        };
        /* eslint-disable no-param-reassign */
        /* eslint-disable no-return-assign */
        if (action.payload.passengers) {
          returnFlights.map(flight => flight.totalprice = flight.price * parseInt(action.payload.passengers.value, 10));
        }
      }
      if (action.payload.passengers) {
        flights.map(flight => flight.totalprice = flight.price * parseInt(action.payload.passengers.value, 10));
      }
      return {
        ...state,
        oneWayFlights: flights,
        oneWayFlightDetail: {
          origin: action.payload.origin[0],
          destination: action.payload.destination[0],
          date: action.payload.date,
        },
        returnFlights,
        returnFlightDetail,
      };
    }
    default:
      return state;
  }
}
