import React from "react";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import CitiesTopMenu from '../cities-top-menu/cities-top-menu.jsx';
import HeaderPlaces from '../header-places/header-places.jsx';
import PlaceCard from '../place-card/place-card.jsx';
import Map from '../map/map.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';

import {ActionCreator} from '../../reducer/data/data';


import {getHotels, getSortHotels} from "../../reducer/data/selectors";
import {getSelectCity} from "../../reducer/user/selectors";
// import {sortOffers}

import withActiveCard from '../../hocs/with-active-card/with-active-card';
const WrappedPlaceCard = withActiveCard(PlaceCard);

const MainScreen = (props) => {
  const {
    offers, onCardClick, choseSort, sortHotels
  } = props;

  const _getActiveOffers = () => {
    const {activeCity} = props;
    if (sortHotels.length > 0) {
      return activeCity === `` ? sortHotels : sortHotels.filter((it) => it.city.name === activeCity);
    }
    return activeCity === `` ? offers : offers.filter((it) => it.city.name === activeCity);
  };

  const _renderPlaceCard = () => {

    if (sortHotels.length > 0) {
      return <>
        {_getActiveOffers(sortHotels).map((it, i) => (
          <WrappedPlaceCard
            key={i}
            offer={it}
            onCardClick={onCardClick}
          />
        )
        )}
      </>;
    }
    return <>
      {_getActiveOffers(offers).map((it, i) => (
        <WrappedPlaceCard
          key={i}
          offer={it}
          onCardClick={onCardClick}
        />
      )
      )}
    </>;
  };

  const _renderMap = () => {
    const {activeCity} = props;
    return <Map offer={offers}
      nameCityOnMap={activeCity}/>;
  };

  const selectSort = (e) => {
    const {activeCity} = props;
    let type = e.target.innerHTML;
    if (activeCity === ``) {
      choseSort(type, offers);
    } else {
      choseSort(type, offers.filter((it) => it.city.name === activeCity));
    }
    _renderPlaceCard();
  };

  return <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <section className="locations container">
            <CitiesTopMenu />
          </section>
        </div>
        {offers.length > 0 ?
          <>
            <div className="cities__places-wrapper">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <HeaderPlaces offers={offers} />
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex="0">
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li onClick={(e) => selectSort(e)} className="places__option places__option--active" tabIndex="0">Popular</li>
                      <li onClick={(e) => selectSort(e)} className="places__option" tabIndex="0">Price: low to high</li>
                      <li onClick={(e) => selectSort(e)} className="places__option" tabIndex="0">Price: high to low</li>
                      <li onClick={(e) => selectSort(e)} className="places__option" tabIndex="0">Top rated first</li>
                    </ul>

                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    {_renderPlaceCard()}
                  </div>
                </section>
                <div className="cities__right-section">
                  {_renderMap()}
                </div>
              </div>
            </div>
          </>
          : <MainEmpty />
        }
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
  sortHotels: PropTypes.arrayOf(PropTypes.shape({
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
  activeCity: PropTypes.string.isRequired,
  choseSort: PropTypes.func.isRequired,
};

export {MainScreen};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: getHotels(state),
  activeCity: getSelectCity(state),
  sortHotels: getSortHotels(state),
});

const mapDispatchToProps = (dispatch) => ({
  choseSort: (type, offers) => {
    dispatch(ActionCreator.sortOffers(type, offers));
  },
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(MainScreen);
