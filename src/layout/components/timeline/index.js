import React from 'react';
import { faArrowUpRightDots, faShop, faShoppingBag, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = () => {
  return (
    <section className="section is-medium has-background-white">
      <div className="container">
        <div className="content is-large">
          <h2 className="has-text-primary is-family-secondary">Timeline</h2>
        </div>
        <ul className="steps has-content-centered has-gaps is-large">
          <li className="steps-segment">
            <span className="steps-marker">
              <span className="icon">
                <FontAwesomeIcon icon={faShop} />
              </span>
            </span>
            <div className="steps-content">
              <p className="is-size-5 is-family-secondary">NFTs Sale</p>
            </div>
          </li>
          <li className="steps-segment">
            <span className="steps-marker">
              <span className="icon">
                <FontAwesomeIcon icon={faShoppingBag} />
              </span>
            </span>
            <div className="steps-content">
              <p className="is-size-5 is-family-secondary">Game Items Sale</p>
            </div>
          </li>
          <li className="steps-segment">
            <span className="steps-marker">
              <span className="icon">
                <FontAwesomeIcon icon={faArrowUpRightDots} />
              </span>
            </span>
            <div className="steps-content">
              <p className="is-size-5 is-family-secondary">Training</p>
            </div>
          </li>
          <li className="steps-segment">
            <span className="steps-marker">
              <span className="icon">
                <FontAwesomeIcon icon={faTrophy} />
              </span>
            </span>
            <div className="steps-content">
              <p className="is-size-5 is-family-secondary">World Cup Gambling</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
