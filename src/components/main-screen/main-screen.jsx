import React from "react";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import CitiesTopMenu from '../cities-top-menu/cities-top-menu.jsx';
import HeaderPlaces from '../header-places/header-places.jsx';
import PlaceCard from '../place-card/place-card.jsx';
import Map from '../map/map.jsx';

import {getHotels} from "../../reducer/data/selectors";
import {getSelectCity} from "../../reducer/user/selectors";
import {getUser, getStatusAuthorization} from "../../reducer/user/selectors";

import withActiveCard from '../../hocs/with-active-card/with-active-card';
const WrappedPlaceCard = withActiveCard(PlaceCard);

const MainScreen = (props) => {
  const {
    offers, onCardClick, user, checkAuthorization
  } = props;

  const _renderPlaceCard = () => {

    return <>
    {offers.map((it, i) => (
      <WrappedPlaceCard
        key={i}
        offer={it}
        onCardClick={onCardClick}
      />
    )
    )}
    </>;
  };

  return <>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {!checkAuthorization ?
                <Link to="/login" className="header__login">Sign in</Link>
                : <>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <Link to="/favorites" className="header__user-name user__name">{user.email}</Link>
                  </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main className="page__main page__main--index">
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
              {_renderPlaceCard()}
            </div>
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>

    </main>
  </>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  onCardClick: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
  }),
  checkAuthorization: PropTypes.bool.isRequired,
};

export {MainScreen};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: getHotels(state),
  activeCity: getSelectCity(state),
  user: getUser(state),
  checkAuthorization: getStatusAuthorization(state),
});

export default connect(
    mapStateToProps
)(MainScreen);
