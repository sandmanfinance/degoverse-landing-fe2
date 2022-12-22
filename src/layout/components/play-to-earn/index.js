import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PlayToEarn = () => {
  return (
    <section className="section is-medium has-background-light is-clipped">
      <div className="container">
        <div className="columns is-desktop is-variable is-8 is-align-items-center">
          <div className="column">
            <div className="content is-large">
              <article className="message is-success">
                <div className="message-body">
                  <span className="is-italic">Play-to-Own</span>
                </div>
              </article>
              <h2 className="has-text-primary is-family-secondary">World Cup Gambling</h2>
              <ul style={{ listStyleImage: 'url(/images/logo-small.png)' }}>
                <li>Bet on World Cup results and earn prizes!</li>
                <li>Earn exciting and rare nft for your collection</li>
                <li>Display your knowledge using “Bragging rights” NFTs.</li>
                <li>Play-to-own by completing Single or Cooperative goals on each match.</li>
              </ul>
            </div>
            <p className="mb-6">
              <a href="https://docs.degoverse.bet/fundamentals/world-cup-gambling" target="_blank" rel="noreferrer" className="button is-text">
                <span className="icon-text">
                  <span>Read more</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </span>
              </a>
            </p>
          </div>
          <div className="column">
            <div className="is-relative">
              <svg
                className="has-text-muted"
                style={{ position: 'absolute', top: '-3rem', left: '-3rem',  }}
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
              <div className="notification is-primary" style={{ position: 'absolute', top: '3rem', right: '-3rem', width: '100%', height: '100%' }} />
              <div>
                <div className="is-relative py-3 mx-6-tablet mb-6 has-background-white" style={{ borderRadius: '50rem' }}>
                  <figure className="image is-96x96 mx-auto" style={{ position: 'absolute', top: '50%', left: 0, transform: 'translate(-25%, -50%)' }}>
                    <img className="is-rounded" src="/images/flags/2.png" style={{ height: '100%', objectFit: 'cover', border: '6px solid #fff' }} alt="Qatar" />
                  </figure>
                  <figure className="image is-96x96 mx-auto" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translate(25%, -50%)' }}>
                    <img className="is-rounded" src="/images/flags/3.png" style={{ height: '100%', objectFit: 'cover', border: '6px solid #fff' }} alt="Qatar" />
                  </figure>
                  <div className="content has-text-centered" style={{ lineHeight: '1' }}>
                    <div><small>Nov 21, 22 - 13:00 UTC</small></div>
                    <div className="has-background-light mt-4 mb-2 pt-2">
                      <strong className="is-family-secondary has-text-primary is-size-2">0 : 0</strong>
                    </div>
                    <div>
                      <strong className="is-family-secondary has-text-primary is-size-4">QAT</strong>
                      <small className="mx-6">MATCH 1</small>
                      <strong className="is-family-secondary has-text-primary is-size-4">ECU</strong>
                    </div>
                  </div>
                </div>
                <div className="has-text-centered">
                  <button type="button" className="button is-success is-rounded">Place your BET!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayToEarn;
