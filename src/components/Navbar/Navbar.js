import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRefresh } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const { id } = props;
  return (
    <div className="bg-pink-500 shadow-lg">
      <nav>
        <div className="d-flex justify-content-between align-items-center p-3 mb-2">
          <button
            type="button"
            className="btn mt-2"
          >
            <NavLink to={id} className="link m-2 text-light">
              <FontAwesomeIcon icon={faHome} className="icon" />
            </NavLink>
          </button>
          <h1 className="header">AirNow</h1>
          <NavLink to="/" className="link text-light">
            <FontAwesomeIcon icon={faRefresh} className="icon" text="reload" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
