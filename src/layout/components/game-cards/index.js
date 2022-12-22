import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameCards = () => {
  return (
    <>
      <section className="section is-medium has-background-white is-clipped">
        <div className="container">
          <div className="columns is-variable is-desktop is-justify-content-space-between">
            <div className="column is-4-desktop">
              <div className="is-relative mb-6">
                <div className="box has-background-success" style={{ position: 'absolute', top: '3rem', left: '-3rem', width: '100%', height: '100%' }} />
                <svg
                  className="has-text-muted is-hidden-mobile"
                  style={{ position: 'absolute', top: '-3rem', right: '-3rem' }}
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="has-text-muted" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </svg>
                <div className="card">
                  <figure className="image is-4by3">
                    <img src="/images/lucky-cards.gif" alt="Lucky Cards" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="content is-large">
                <article className="message is-success">
                  <div className="message-body">
                    <p className="is-italic">
                      Enhance your Gaming Strategies! <a href="https://opensea.io/collection/degoverse-gamecards" target="_blank" rel="noreferrer" className="ml-1">Visit collection</a>
                    </p>
                  </div>
                </article>
                <h2 className="has-text-primary is-family-secondary">Game Items</h2>
                <p>Take advantage of this feature to create different strategies and tactics to improve your betting results.</p>
                <ul style={{ listStyleImage: 'url(/images/logo-small.png)' }}>
                  <li>Improve your Smart NFT Players.</li>
                  <li>Improve your Team Smart NFT Players.</li>
                  <li>Reduce your opposite Smart NFT Players.</li>
                  <li>Reduce your opposite team Smart NFT Players.</li>
                </ul>
              </div>
              <p className="mb-5">
                <div className="buttons">
                  <a href="https://docs.degoverse.bet/fundamentals/game-cards" target="_blank" rel="noreferrer" className="button is-text">
                    <span className="icon-text">
                      <span>Read more</span>
                      <span className="icon">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </span>
                    </span>
                  </a>
                  <a href="https://opensea.io/collection/degoverse-gamecards" target="_blank" rel="noreferrer" className="button is-text">
                    <span className="icon-text">
                      <span>Visit collection</span>
                      <span className="icon">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </span>
                    </span>
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="columns is-desktop is-align-items-center">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/3.png" alt="Lucky Cards" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/4.png" alt="Lucky Cards" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/5.png" alt="Lucky Cards" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GameCards;
