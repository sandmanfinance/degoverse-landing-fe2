import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons is-justify-content-end">
              {/* <a href="https://app.degoverse.bet/sale" className="button is-danger is-rounded is-outlined">
                <span className="is-hidden-mobile mr-1">Buy</span> Players
              </a> */}
              {/* <a href="https://app.degoverse.bet/sport-sale" className="button is-danger is-rounded is-outlined">
                <span className="is-hidden-mobile mr-1">Buy</span> Sports
              </a> */}
              {/* <a href="https://app.degoverse.bet/game-card-sale" className="button is-danger is-rounded is-outlined">
                <span className="is-hidden-mobile mr-1">Buy</span> Game Cards
              </a> */}

              <a href="https://v1.degoverse.bet" className="button is-success is-rounded is-outlined">
                <span className="icon">
                  <FontAwesomeIcon icon={faRocket} />
                </span>
                <span>V1</span>
              </a>
              <a href="https://opensea.io/DegoVerse?tab=created" target="_blank" rel="noreferrer" className="button is-success is-rounded is-outlined">
                <span>COLLECTIONS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
