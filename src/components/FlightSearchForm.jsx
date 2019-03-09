import React from 'react';
import {
  Field, reduxForm,
} from 'redux-form';
import renderTypeAhead from './Typeahead';
import renderSelectField from './Select';
import { TextInput } from './TextInput';
import { validateFlightSearchForm } from '../helper/FlightSearchFormValidate';

class FlightSearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      date: '',
		};
    this.dateChange = this.dateChange.bind(this);
	}

  dateChange() {

  }

	render() {
		const {
      handleSubmit, onSubmit, isRoundTrip, cities, passengers, invalid,
    } = this.props;
    const { date } = this.state;
		return(
			<form onSubmit={handleSubmit(onSubmit)} className="search-form">
        <div className="form-group">
          <Field
            name="origin"
            component={renderTypeAhead}
            placeholder="From"
            options={cities}
            emptyLabel={false}
            id={1}
            menuId={1}
          />
        </div>
        <div className="form-group">
          <Field
            name="destination"
            component={renderTypeAhead}
            placeholder="To"
            options={cities}
            emptyLabel={false}
            id={2}
            menuId={2}
          />
        </div>
        <div className="form-group position-relative date-field">
          <Field
            name="date"
            type="date"
            component={TextInput}
            placeholder="Departure Date"
            onChange={this.dateChange}
          />
          <i className="fa fa-calendar" aria-hidden="true"></i>
        </div>
        {
          (isRoundTrip) && (
            <div className="form-group position-relative date-field">
              <Field
                name="return_date"
                type="date"
                component={TextInput}
                placeholder="Return Date"
              />
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </div>
          )
        }
        <div className="form-group">
          <Field
            name="passengers"
            component={renderSelectField}
            options={passengers}
            placeholder="Passengers"
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
		)
	}
}

FlightSearchForm = reduxForm({
  form: 'search_flight', // a unique identifier for this form
  validate: validateFlightSearchForm,
})(FlightSearchForm);

export default FlightSearchForm;