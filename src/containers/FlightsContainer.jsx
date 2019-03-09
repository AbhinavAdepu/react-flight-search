import React from 'react';
import { connect } from 'react-redux';
import {
	TripTabs,
	FlightSearchForm,
	TopSingleFlightDetail,
	SingleFlightRow,
} from '../components';

import { fetchFlights, filterFlights } from '../actions/FlightActions';

class FlightsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isRoundTrip: false,
		};
		this.changeTripType = this.changeTripType.bind(this);
	}

	componentDidMount() {
		this.props.fetchFlights();
	}

	changeTripType(test) {
		this.setState({
			isRoundTrip: test,
		})
	}

	handleSubmit = (formValues) => {
    this.props.filterFlights(formValues);
  }

	render() {
		const { cities, passengers, oneWayFlights, returnFlights, oneWayFlightDetail, returnFlightDetail } = this.props;
		const { isRoundTrip } = this.state;
		return(
			<div className="row">
				<div className={`left-form-holder ${isRoundTrip ? 'col-md-12 col-lg-2 split-view' : 'col-lg-3'}`}>
					<TripTabs changeTripType={this.changeTripType} isRoundTrip={isRoundTrip} />
					<FlightSearchForm cities={cities} passengers={passengers} isRoundTrip={isRoundTrip} onSubmit={this.handleSubmit} />
				</div>
				<div className={`right-data-holder ${isRoundTrip ? 'col-md-6 col-lg-5 split-view' : 'col-lg-9'}`}>
					{
						(oneWayFlights.length) ? (
							<div>
								<TopSingleFlightDetail flight={oneWayFlightDetail} flightCount={oneWayFlights.length} />
								{
									oneWayFlights.map((flight, index) => (
										<SingleFlightRow flight={flight} key={index} />
									))
								}
							</div>
						) :
						(
							<div className="text-center hurry-now-container">
								<i className="fa fa-4x fa-plane" aria-hidden="true"></i>
								<div>Modify your search to avail best offers. Hurry now !</div>
							</div>
						)
					}
				</div>
				{
					(isRoundTrip) && (
							<div className="right-data-holder col-md-6 col-lg-5 split-view return-journey">
								{
									(returnFlights.length) ? (
										<div>
											<TopSingleFlightDetail flight={returnFlightDetail} flightCount={returnFlights.length} />
											{
												returnFlights.map((flight, index) => (
													<SingleFlightRow flight={flight} key={index} />
												))
											}
										</div>
									) :
									(
										<div className="text-center hurry-now-container">
											<i className="fa fa-4x fa-plane" aria-hidden="true"></i>
											<div>Modify your search to avail best offers. Hurry now !</div>
										</div>
									)
								}
							</div>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
      flights: state.flight.flights,
      oneWayFlights: state.flight.oneWayFlights,
      returnFlights: state.flight.returnFlights,
      oneWayFlightDetail: state.flight.oneWayFlightDetail,
      returnFlightDetail: state.flight.returnFlightDetail,
      cities: state.flight.cities,
      passengers: state.flight.passengers,
    }
};

const mapDispatchToProps = dispatch => ({
   fetchFlights: () => {
      dispatch(fetchFlights());
    },
    filterFlights: (payload) => {
      dispatch(filterFlights(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer);
