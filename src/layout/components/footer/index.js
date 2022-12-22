import React from 'react';

const Footer = () => {
  return (
    <footer className="footer has-background-primary">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column">
              <div className="is-flex is-align-items-center">
                <figure className="image is-48x48 m-0 mr-3">
                  <img src="/images/logo-secondary.png" alt="DegoVerse" />
                </figure>
                <p className="title is-size-3 has-text-success is-family-sans-serif">
                  DegoVerse
                </p>
              </div>
            </div>
            <div className="column">
              <h4 className="has-text-light">About</h4>
              <ul style={{ listStyleImage: 'url(/images/logo-secondary-small.png)' }}>
                <li>
                  <a href="https://docs.degoverse.bet/" target="_blank" rel="noreferrer" className="has-text-light">Documentation</a>
                </li>
                <li>
                  <a href="https://github.com/DegoVerseBet/Docs/blob/main/DegoVerseWhitePaper.pdf" target="_blank" rel="noreferrer" className="has-text-light">White paper</a>
                </li>
                <li>
                  <a href="https://docs.degoverse.bet/extras/tokenomics" target="_blank" rel="noreferrer" className="has-text-light">Tokenomics</a>
                </li>
                <li>
                  <a href="https://opensea.io/DegoVerse?tab=created" target="_blank" rel="noreferrer" className="has-text-light">Collections</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4 className="has-text-light">Community</h4>
              <ul style={{ listStyleImage: 'url(/images/logo-secondary-small.png)' }}>
                <li>
                  <a href="https://t.me/DegoVerse" target="_blank" rel="noreferrer" className="has-text-light">Telegram</a>
                </li>
                <li>
                  <a href="https://twitter.com/degoverse" target="_blank" rel="noreferrer" className="has-text-light">Twitter</a>
                </li>
                <li>
                  <a href="https://discord.gg/bMfP5HezBW" target="_blank" rel="noreferrer" className="has-text-light">Discord</a>
                </li>
                <li>
                  <a href="https://medium.com/@DegoVerse" target="_blank" rel="noreferrer" className="has-text-light">Medium</a>
                </li>
                <li>
                  <a href="https://github.com/DegoVerseBet" target="_blank" rel="noreferrer" className="has-text-light">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
