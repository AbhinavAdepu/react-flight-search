import React from 'react';
import moment from 'moment';

class SingleFlightRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.calculateFlightDuration = this.calculateFlightDuration.bind(this);
	}

	calculateFlightDuration(departureTime, arrivalTime) {
		const a = moment.duration(departureTime, 'hours minutes');
		const b = moment.duration(arrivalTime, 'hours minutes');
		const displayDuration = b.subtract(a);
		return displayDuration.hours() + 'h ' + displayDuration.minutes() + 'm';
	}

	render() {
		const { flight } =  this.props;
		return(
			<div className="flight-detail margin-auto margin-top-30 background-white row">
				<div className="col-md-1 logo-holder">
					<i className="fa fa-2x fa-plane text-theme-red" aria-hidden="true"></i>
				</div>
				<div className="col-md-1 flight-name-holder">
					<p className="margin-0 flight-name margin-top-3">{flight.name}</p>
					<p className="flight-detail-bottom">{flight.flightNo}</p>
				</div>
				<div className="col-md-2">
					<p className="margin-0 flight-detail-top">{flight.departureTime}</p>
					<p className="flight-detail-bottom">{flight.origin}</p>
				</div>
				<div className="col-md-2">
					<p className="margin-0 flight-detail-top">{flight.arrivalTime}</p>
					<p className="flight-detail-bottom">{flight.destination}</p>
				</div>
				<div className="col-md-2">
					<p className="margin-0 flight-detail-top">
						{this.calculateFlightDuration(flight.departureTime, flight.arrivalTime)}
					</p>
					<p className="flight-detail-bottom">Non stop</p>
				</div>
				<div className="col-md-2">
					<p className={`${flight.totalprice ? 'flight-price-top' : 'flight-price'} margin-0`}>
						<i className="fa fa-inr" aria-hidden="true"></i>
						{flight.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</p>
					{
						(flight.totalprice) && (
							<div>
								<p className="margin-0 text-black">Total:</p>
								<p className="flight-price margin-0">
									<i className="fa fa-inr" aria-hidden="true"></i>
									{flight.totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
								</p>
							</div>
						)
					}
				</div>
				<div className="col-md-2 text-right">
					<button className="btn btn-primary">Book</button>
				</div>
      </div>
		)
	}
}

export default SingleFlightRow;