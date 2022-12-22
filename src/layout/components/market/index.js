import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Market = () => {
  return (
    <section className="section is-medium has-background-white is-clipped">
      <div className="container">
        <div className="columns is-variable is-8 is-align-items-center is-desktop">
          <div className="column">
            <div className="is-relative mb-6">
              <div className="box has-background-primary" style={{ position: 'absolute', top: '3rem', left: '-3rem', width: '100%', height: '100%' }} />
              <svg
                className="has-text-muted is-hidden-mobile"
                style={{ position: 'absolute', top: '-3rem', right: '-3rem',  }}
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
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src="/images/market.png" alt="Marketplace" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content is-large">
              <article className="message is-success">
                <div className="message-body">
                  <span className="is-italic">Buy, Sell and Trade like a real manager</span>
                </div>
              </article>
              <h2 className="has-text-primary is-family-secondary">NFTs Trade Market</h2>
              <ul style={{ listStyleImage: 'url(/images/logo-small.png)' }}>
                <li>Buy your Smart NFTs and Bet!</li>
                <li>Feel like a coach and Trade your NFTs.</li>
                <li>Sell your NFTs like an owner.</li>
                <li>Powered by OpenSea Gas-Free.</li>
              </ul>
            </div>
            <a href="https://docs.degoverse.bet/fundamentals/nfts-trade-place" target="_blank" rel="noreferrer" className="button is-text">
              <span className="icon-text">
                <span>Read more</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market;
