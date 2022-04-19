import React from 'react';
import Header from '../Navbar/Navbar';
import Region from '../Detailspage/Region';
import World from '../../Design/World_map.png';

const Regions = () => {
  const regionList = [
    { region: 'Africa', country: 59 },
    { region: 'Americas', country: 56 },
    { region: 'Europe', country: 53 },
    { region: 'Asia', country: 50 },
    { region: 'Oceania', country: 27 },
    { region: 'Antarctic', country: 5 }];
  return (
    <div>
      <Header id="/" />
      <div className="world-container">
        <img src={World} alt="" className="world-map" />
        <div className="centered">
          <h3>Get Air Quality Data Where You Live.</h3>
          <h5> Central Reporting Area.</h5>
        </div>
      </div>
      <div className="row m-4">
        {
            regionList.map((element) => (
              <Region
                key={element.region}
                region={element.region}
                regionCountry={element.country}
              />
            ))
        }
      </div>
    </div>
  );
};

export default Regions;
