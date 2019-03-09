/* eslint-disable import/prefer-default-export */

export const validateFlightSearchForm = (values) => {
  console.log('values', values);
  const errors = {};
  if (!values.origin) {
    errors.origin = 'Please select departure city';
  }

  if (!values.destination) {
    errors.destination = 'Please select arrival city';
  }

  if (!values.date) {
    errors.date = 'Please select departure date';
  }

  if (!values.return_date) {
    errors.return_date = 'Please select return date';
  }

  console.log('errors--->', errors);

  return errors;
};
