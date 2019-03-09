import React from 'react';

class TripTabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
    const { changeTripType, isRoundTrip } = this.props;
		return(
			<ul className="lfh-tabs">
        <li className={`${isRoundTrip ? '' : 'active'}`} onClick={() => changeTripType(false)}>One way</li>
        <li className={`${isRoundTrip ? 'active' : ''}`} onClick={() => changeTripType(true)}>Round trip</li>
      </ul>
		)
	}
}

export default TripTabs;