import React from 'react';
import moment from 'moment';

class TopSingleFlightDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		const { flight, flightCount } = this.props;
		return(
			<div className="flight-detail margin-bottom-30">
				<div className="d-table flight-detail-heading">
					<span className="d-table-cell"><i className="fa fa-plane" aria-hidden="true"></i></span>
	        <p className="d-table-cell text-black margin-0">{flight.origin} to {flight.destination}</p>
        </div>
        <p className="text-grey margin-0">
        	<span>{flightCount} flight(s) found,</span>
        	<span>{moment(flight.date).format("ddd, Do MMMM")}</span>
        </p>
      </div>
		)
	}
}

export default TopSingleFlightDetail;