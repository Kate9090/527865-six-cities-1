import React from "react";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import CitiesTopMenu from '../cities-top-menu/cities-top-menu.jsx';
import HeaderPlaces from '../header-places/header-places.jsx';
import PlaceCard from '../place-card/place-card.jsx';
import Map from '../map/map.jsx';

import withActiveCard from '../../hocs/with-active-card/with-active-card';
const WrappedPlaceCard = withActiveCard(PlaceCard);

const MainScreen = (props) => {
  const {
    offer,
  } = props;

  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="cities tabs">
      <section className="locations container">
        <CitiesTopMenu />
      </section>
    </div>

    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <HeaderPlaces />
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>

            <select className="places__sorting-type" id="places-sorting" defaultValue={`popular`}>
              <option className="places__option" value={`popular`}>Popular</option>
              <option className="places__option" value={`to-high`}>Price: low to high</option>
              <option className="places__option" value={`to-low`}>Price: high to low</option>
              <option className="places__option" value={`top-rated`}>Top rated first</option>
            </select>

          </form>
          <div className="cities__places-list places__list tabs__content">
            {offer.map((it, i) => (
              <WrappedPlaceCard
                key={i}
                offer={it}
              />
            )
            )}
          </div>
        </section>
        <div className="cities__right-section">
          <Map offer={offer} />
        </div>
      </div>
    </div>

  </main>;
};

MainScreen.propTypes = {
  offer: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string,
    offerCoord: PropTypes.array.isRequired,
  })).isRequired,
};

export {MainScreen};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offer: state.offerInCity,
  activeCity: state.city,
});

export default connect(
    mapStateToProps
)(MainScreen);
