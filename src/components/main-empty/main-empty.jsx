import React from "react";

import Header from '../header/header.jsx';
import CitiesTopMenu from '../cities-top-menu/cities-top-menu.jsx';

const MainEmpty = () => {

  return <>
    <Header />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <section className="locations container">
          <CitiesTopMenu />
        </section>
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property availbale at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section">
          </div>
        </div>
      </div>


    </main>
  </>;
};


export default MainEmpty;

