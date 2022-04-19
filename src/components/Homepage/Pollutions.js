import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Navbar/Navbar';
import Pollution from '../Detailspage/Pollution';

const Pollutions = () => {
  const pollutions = useSelector((state) => state.pollutionReducer);

  return (
    <div>
      <Header id="/countries" />
      <Pollution
        key={pollutions.id}
        id={pollutions.id}
        lat={pollutions.lat}
        lng={pollutions.lng}
        co={pollutions.co}
        no={pollutions.no}
        no2={pollutions.no2}
        flag={pollutions.flag}
        name={pollutions.name}
      />
    </div>
  );
};

export default Pollutions;
