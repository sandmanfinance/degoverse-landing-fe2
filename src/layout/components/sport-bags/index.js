import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SportBags = () => {
  return (
    <>
      <section className="section is-medium has-background-light is-clipped">
        <div className="container">
          <div className="columns is-variable is-desktop">
            <div className="column">
              <div className="content is-large">
                <article className="message is-success">
                  <div className="message-body">
                    <span className="is-italic">
                      Enhance your Smart NFT Players. 
                      <a href="https://opensea.io/collection/degoverse-sportnft" target="_blank" rel="noreferrer" className="ml-1">
                        Visit Collection
                      </a>
                    </span>
                  </div>
                </article>
                <h2 className="has-text-primary is-family-secondary">Sports NFTs</h2>
                <ul style={{ listStyleImage: 'url(/images/logo-small.png)' }}>
                  <li>Get these Sports NFTS and Earn bigger prizes.</li>
                  <li>Rare and collectible NTFs.</li>
                  <li>You own them, you can sell them.</li>
                  <li>Loot-boxes powered by Chainlink True-Randomness.</li>
                </ul>
              </div>
              <div className="mb-5">
                <div className="buttons">
                  <a href="https://docs.degoverse.bet/fundamentals/sport-nfts" target="_blank" rel="noreferrer" className="button is-text">
                    <span className="icon-text">
                      <span>Read more</span>
                      <span className="icon">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </span>
                    </span>
                  </a>
                  <a href="https://opensea.io/collection/degoverse-sportnft" target="_blank" rel="noreferrer" className="button is-text">
                    <span className="icon-text">
                      <span>Visit Collection</span>
                      <span className="icon">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-4-desktop">
              <div className="is-relative">
                <div className="box has-background-success" style={{ position: 'absolute', top: '3rem', left: '3rem', width: '100%', height: '100%' }} />
                <svg
                  className="has-text-muted"
                  style={{ position: 'absolute', top: '-3rem', left: '-3rem' }}
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
                    <iframe
                      title="The Soccer Player"
                      className="has-ratio"
                      width="640"
                      height="360"
                      frameBorder="0"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      // src="https://sketchfab.com/models/6afa0a2822a3461384a5993de248949b/embed"
                      src="https://sketchfab.com/models/a5a44544d60543eaad5855f7c98fc2b3/embed"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-desktop is-align-items-center">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <iframe
                      title="Argentina's vintage jersey"
                      className="has-ratio"
                      width="640"
                      height="360"
                      frameBorder="0"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      src="https://sketchfab.com/models/c7c5e191062a46138f045667f60087f2/embed"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <iframe
                      title="AL RIHLA Official Ball Qatar 2022"
                      className="has-ratio"
                      width="640"
                      height="360"
                      frameBorder="0"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      src="https://sketchfab.com/models/329c20f9be69455f8903cc78152932dd/embed"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <iframe
                      title="Fifa World Cup Trophy"
                      className="has-ratio"
                      width="640"
                      height="360"
                      frameBorder="0"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      src="https://sketchfab.com/models/dad5c4110ab34b3f9b6e05eeb3023655/embed"
                    />
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

export default SportBags;
