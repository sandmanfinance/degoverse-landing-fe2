import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faMediumM, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faClock, faRocket } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  useEffect(() => {
    const appHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    }

    window.addEventListener('resize', appHeight);

    appHeight();

    return () => { window.removeEventListener('resize', appHeight) }
  });

  return (
    <section className="hero is-fullheight is-relative" style={{ backgroundImage: 'url(/images/hero.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="hero-ball is-hidden-touch" style={{ backgroundImage: 'url(/images/hero-ball.png)' }} />
      <div className="hero-body is-justify-content-center" style={{ zIndex: 1 }}>
        <div>
          <div className="hero-box has-text-centered" style={{ marginBottom: '4rem' }}>
            <p className="title is-size-2-touch is-size-1-desktop has-text-white is-family-sans-serif">
              DegoVerse
            </p>
            <p className="subtitle is-size-3-desktop has-text-white is-family-secondary">
              Soccer Prediction Game<br />
              Enhanced by <span className="has-text-success">SMART NFT</span> and <span className="has-text-success">Stable Coins</span>
            </p>
          </div>
          <div className="buttons is-justify-content-center">
            <a href="https://medium.com/@DegoVerse/what-happens-after-world-cup-2020-71ea6069367c" className="button is-success is-rounded is-large">
              {/* <span className="icon">
                <FontAwesomeIcon icon={faClock} />
              </span> */}
              <span>V2 IS COMMING</span>
            </a>
          </div>
          <div className="hero-box has-text-centered" style={{ marginBottom: '1rem' }}>
            <p className="is-size-3 mb-5 has-text-white has-text-weight-bold is-family-secondary">
              We are near to expand our metaverse<br />
              to European Futbol and American Soccer Leagues.<br />
              <span className="has-text-success">#StayTuned</span>
            </p>
            <p className="subtitle is-size-3-desktop has-text-white is-family-secondary">
              Powered by <span className="has-text-success">Polygon</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-foot pb-3" style={{ zIndex: 1 }}>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <a href="https://t.me/DegoVerse" target="_blank" rel="noreferrer" className="has-text-success">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </span>
          </a>
          <a href="https://twitter.com/degoverse" target="_blank" rel="noreferrer" className="has-text-success">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </span>
          </a>
          <a href="https://discord.gg/bMfP5HezBW" target="_blank" rel="noreferrer" className="has-text-success">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </span>
          </a>
          <a href="https://medium.com/@DegoVerse" target="_blank" rel="noreferrer" className="has-text-success">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faMediumM} size="2x" />
            </span>
          </a>
          <a href="https://github.com/DegoVerseBet" target="_blank" rel="noreferrer" className="has-text-success">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
