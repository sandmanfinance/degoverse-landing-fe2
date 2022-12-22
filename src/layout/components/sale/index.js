import React, { useState } from 'react';
import { faAngleLeft, faAngleRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const players = new Array(36).fill('Player');

const Sale = () => {
  const [player, setPlayer] = useState(0);

  const selectPlayer = (evt) => {
    evt.preventDefault();
    const { target } = evt;
    setPlayer(Number(target.dataset.player));
  }

  const prevPlayer = () => {
    setPlayer(prevState => prevState > 1 ? prevState - 1 : players.length);
  }

  const nextPlayer = () => {
    setPlayer(prevState => prevState < players.length ? prevState + 1 : 1);
  }

  return (
    <>
      <section className="section is-medium has-background-light is-clipped">
        <div className="container">
          <div className="columns is-desktop is-variable is-8 is-align-items-center">
            <div className="column">
              <div className="content is-large">
                <article className="message is-success">
                  <div className="message-body">
                    <a href="https://opensea.io/collection/degoverse-world-cup" target="_blank" rel="noreferrer" className="is-italic">Visit our Collection of World Cup Players!</a>
                  </div>
                </article>
                <h2 className="has-text-primary is-family-secondary">SMART NFT Player</h2>
                <ul style={{ listStyleImage: 'url(/images/logo-small.png)' }}>
                  <li>Bet for your favorite teams and against others and earn prizes!</li>
                  <li>Only 10K unique NFTs! Collect your favorite teams!</li>
                  <li>Train them and enhance them.</li>
                  <li>Smart NFT players creation powered by Chainlink True-Randomness.</li>
                  <li>Vote on project governance DAO-Style.</li>
                </ul>
              </div>
              <div className="buttons mb-6">
                <a href="https://docs.degoverse.bet/fundamentals/smart-nfts-player" target="_blank" rel="noreferrer" className="button is-text">
                  <span className="icon-text">
                    <span>Read more</span>
                    <span className="icon">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </span>
                </a>
                <a href="https://opensea.io/collection/degoverse-world-cup" target="_blank" rel="noreferrer" className="button is-text">
                  <span className="icon-text">
                    <span>Visit collection</span>
                    <span className="icon">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="columns is-mobile is-variable is-1 is-multiline is-relative">
                <div className="box has-background-primary" style={{ position: 'absolute', top: '3rem', left: '3rem', width: '100%', height: '100%' }} />
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
                {players.map((player, id) => (
                  <div key={`player-${id}`} className="column py-1 is-2">
                    <figure className="image is-3by4">
                      <img  src={`/images/players/${id + 1}-thumb.png`} className="is-clickable" alt={`Player ${id + 1}`} data-player={id + 1} onClick={selectPlayer} />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`modal ${player > 0 ? 'is-active' : ''}`}>
        <div className="modal-background" data-player="0" onClick={selectPlayer} />
        <div className="modal-content is-relative" style={{ maxWidth: '480px' }}>
          <figure className="image is-3by4">
            <img src={`/images/players/${player}.png`} alt={`Player ${player}`} />
          </figure>
          <button type="button" className="button is-large is-success is-outlined" style={{ position: 'absolute', top: '50%', left: '1rem' }} onClick={prevPlayer}>
            <span className="icon is-large">
              <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </span>
          </button>
          <button type="button" className="button is-large is-success is-outlined" style={{ position: 'absolute', top: '50%', right: '1rem' }} onClick={nextPlayer}>
            <span className="icon is-large">
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </span>
          </button>
        </div>
        <button className="modal-close is-large" aria-label="close" data-player="0" onClick={selectPlayer} />
      </div>
    </>
  );
}

export default Sale;
