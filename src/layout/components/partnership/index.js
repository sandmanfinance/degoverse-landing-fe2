import React from 'react';

const Timeline = () => {
  return (
    <section className="section is-medium has-background-light">
      <div className="container">
        <div className="columns is-centered is-multiline is-variable is-8">
          <div className="column is-3 mb-6">
            <a href="https://opensea.io/DegoVerse?tab=created" target="_blank" rel="noreferrer" className="is-flex is-align-items-center is-justify-content-center">
              <figure className="image is-48x48 mr-1">
                <img src="/images/partners/opensea.svg" alt="Opensea" />
              </figure>
              <h5 className="title mb-0 is-size-4">OPENSEA</h5>
            </a>
          </div>
          <div className="column is-3 mb-6">
            <a href="https://raritysniper.com/nft-drops-calendar?blockchain=polygon&salePrice=90:100&supply=:10000&saleDate=2022-09-04" target="_blank" rel="noreferrer" className="is-flex is-align-items-center is-justify-content-center">
              <figure className="image is-48x48 mr-1">
                <img src="/images/partners/rarity_sniper.png" alt="Rarity Sniper" />
              </figure>
              <h5 className="title mb-0 is-size-4">RARITY SNIPER</h5>
            </a>
          </div>
          <div className="column is-3 mb-6">
            <a href="https://nftartpedia.com/collections/degoverse" target="_blank" rel="noreferrer" className="is-flex is-align-items-center is-justify-content-center">
              <figure className="image is-48x48 mr-1">
                <img src="/images/partners/nftartpedia.svg" alt="NFTARTPEDIA" />
              </figure>
              <h5 className="title mb-0 is-size-4">NFTARTPEDIA</h5>
            </a>
          </div>
          <div className="column is-3 mb-6 is-flex is-align-items-center is-justify-content-center">
            <a href="https://www.maticnews.com/pages/degoverse" target="_blank" rel="noreferrer" className="title mb-0 is-size-4 has-text-centered matic-news">MATICNEWS</a>
          </div>
          <div className="column is-3 mb-6">
            <a href="https://www.apeoclock.com/launch/degoverse-qatar-2022-world-cup-edition-mint/" target="_blank" rel="noreferrer">
              <figure className="image mx-5">
                <img src="/images/partners/ape-oclock.png" alt="APE OCLOCK" />
              </figure>
            </a>
          </div>
          <div className="column is-3 mb-6">
            <a href="https://medium.com/@DegoVerse/degoverse-integrates-chainlink-vrf-to-help-power-fair-nft-distribution-and-trait-generation-f958091a527a" target="_blank" rel="noreferrer">
              <figure className="image mx-5">
                <img src="/images/partners/chainlink.svg" alt="Chainlink" />
              </figure>
            </a>
          </div>
          <div className="column is-3 mb-6">
            <div className="has-background-dark py-1" style={{ borderRadius: '6px' }}>
              <a href="https://rugdoc.io/project/dego-verse/" target="_blank" rel="noreferrer">
                <figure className="image mx-5">
                  <img src="/images/partners/rugdoc-main-logo.svg" alt="RugDoc" />
                </figure>
              </a>
            </div>
          </div>
          <div className="column is-3 mb-6">
            <a href="https://thegraph.com/" target="_blank" rel="noreferrer" className="is-flex is-align-items-center is-justify-content-center">
              <figure className="image is-48x48 mr-2">
                <img
                  src="/images/partners/thegraph.jpeg"
                  alt="THEGRAPH"
                  className="is-rounded"
                />
              </figure>
              <h5 className="title mb-0 is-size-4">THEGRAPH</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
