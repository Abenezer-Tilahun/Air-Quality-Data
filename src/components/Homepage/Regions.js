import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import Header from '../Navbar/Navbar';
import Region from '../Detailspage/Region';
import World from '../../Design/World_map.png';
import style from './Regions.module.css';

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
        <div className={style.filtersContainer}>
          <p>Arrange the Continents By Order</p>
          <button
            type="button"
            className="btn mt-2"
            onClick={() => {

            }}
            to="/sort"
          >
            <NavLink to="/sort" className="link m-2 text-light">
              <FontAwesomeIcon icon={faAdjust} className="icon" />
            </NavLink>
          </button>
        </div>
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
