import React from 'react';
import {
  Header,
} from '../components';

import FlightsContainer from '../containers';

export default function HomePage() {
  return (
    <div className="background-page">
      <Header />
      <div className="page-content container-fluid">
        <FlightsContainer />
      </div>
    </div>
  );
}
