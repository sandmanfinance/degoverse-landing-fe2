import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Training = () => {
  return (
    <>
      <section className="section is-medium has-background-white is-clipped">
        <div className="container">
          <div className="columns is-variable is-8 is-desktop">
            <div className="column">
              <div className="is-relative mb-6">
                <div className="box has-background-success" style={{ position: 'absolute', top: '3rem', left: '-3rem', width: '100%', height: '100%' }} />
                <div className="is-relative">
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
                    <figure className="image is-16by9">
                      <img src="/images/estadios-qatar.png" alt="Stadiums" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content is-large">
                <article className="message is-success">
                  <div className="message-body">
                    <span className="is-italic">Train and enhance</span>
                  </div>
                </article>
                <h2 className="has-text-primary is-family-secondary">Training Centers</h2>
                <ul style={{ listStyleImage: 'url(/images/logo-small.png)' }}>
                  <li>Train your team, like the pros.</li>
                  <li>Enhance your NFTs here.</li>
                  <li>Get better training results with higher levels.</li>
                  <li>Earn collectible NFTs too!</li>
                </ul>
              </div>
              <p className="mb-5">
                <a href="https://docs.degoverse.bet/fundamentals/training-centers" target="_blank" rel="noreferrer" className="button is-text">
                  <span className="icon-text">
                    <span>Read more</span>
                    <span className="icon">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="columns is-desktop is-align-items-center">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <iframe
                      title="Khalifa Training"
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
                      src="https://sketchfab.com/models/9d9e939b5872442d8af6766b58d7bc5d/embed"
                    />
                  </figure>
                </div>
                <div className="card-content content has-background-light">
                  <h3 className="is-familiy-secondary has-text-primary">Khalifa Training</h3>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <iframe
                      title="Al Bayt Stadium"
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
                      src="https://sketchfab.com/models/7c9a1aa9e08145a0ae2031a313a715fe/embed"
                    />
                  </figure>
                </div>
                <div className="card-content content has-background-light">
                  <h3 className="is-familiy-secondary has-text-primary">Al Bayt Training</h3>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <iframe
                      title="Lusail Stadium"
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
                      src="https://sketchfab.com/models/d3c3788d1dbf44bcbab1fc22be94265d/embed"
                    />
                  </figure>
                </div>
                <div className="card-content content has-background-light">
                  <h3 className="is-familiy-secondary has-text-primary">Lusail Training</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Training;
