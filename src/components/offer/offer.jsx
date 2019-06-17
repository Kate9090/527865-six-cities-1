import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getActiveOffer, getFavouritesList, getSelectCity} from '../../reducer/user/selectors';

import {ActionCreator} from '../../reducer/user/user';

import {getHotels, getCities} from '../../reducer/data/selectors';

import {getStatusAuthorization, getSelectCityNumber} from '../../reducer/user/selectors';

import Header from '../header/header.jsx';
import ReviewList from '../reviews-list/review-list.jsx';
import {Map} from '../map/map.jsx';

import {PlaceCard} from '../place-card/place-card.jsx';

const offerParameters = {
  MAX_IMAGES: 6,
  MAX_NEIGHBOURS: 3,
};

const Offer = (props) => {

  const {offers, favouriteOffers, checkAuthorization, nameCityOnMap,
    offer, onSendOfferToFavourite, offerCities} = props;

  let neighbourOffer = [];

  neighbourOffer = offers.filter((it) => it.city.name === offer.city.name && it.id !== offer.id)
    .slice(0, offerParameters.MAX_NEIGHBOURS);
  neighbourOffer[offerParameters.MAX_NEIGHBOURS] = offer;

  const _handleCardClick = () => {
    if (favouriteOffers && offer) {
      let i = favouriteOffers.length;
      onSendOfferToFavourite(favouriteOffers, offer, i);
    }
  };

  const _renderMap = () => {


    return <Map
      {...props}
      offer={neighbourOffer}
      offerCities={offerCities}
      nameCityOnMap={nameCityOnMap}
      activeCard = {offer}
      className="offer-map" />;
  };

  const _renderPlaceCardList = () => {
    return <>
      {neighbourOffer.map((it, num) => <PlaceCard {...props} checkAuthorization={checkAuthorization} offer={it} key={`nearPlace-${num}`}/>).slice(0, 3)}
    </>;
  };

  return <>
    <Header />
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((it, i) => (
              <div className="property__image-wrapper" key={`images-${i}`}>
                <img className="property__image" src={it} alt="Photo studio" />
              </div>
            )).slice(0, offerParameters.MAX_IMAGES)}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{offer.isPremium ? `Premium` : ``}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button onClick={_handleCardClick} className="property__bookmark-button button" type="button" style={{backgroundImage: `url('/img/icon-bookmark.svg')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `96%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods.map((it, i) => (
                  <li className="property__inside-item" key={`goods-${i}`}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={`/${offer.host.avatar_url}`} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.isPro ? `Pro` : ``}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <ReviewList />
          </div>
        </div>
        {_renderMap()}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {_renderPlaceCardList()}
          </div>
        </section>
      </div>
    </main>
  </>;
};

Offer.propTypes = {
  offer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
    city: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    id: PropTypes.number,
    isPremium: PropTypes.bool.isRequired,
    isPro: PropTypes.bool,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    maxAdults: PropTypes.number,
    bedrooms: PropTypes.number,
    host: PropTypes.object,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
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
    city: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    id: PropTypes.number,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    maxAdults: PropTypes.number,
    bedrooms: PropTypes.number,
  })).isRequired,
  favouriteOffers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }),
    type: PropTypes.string.isRequired,
  })).isRequired,
  onSendOfferToFavourite: PropTypes.func.isRequired,
  checkAuthorization: PropTypes.bool.isRequired,
  nameCityOnMap: PropTypes.string.isRequired,
  offerCities: PropTypes.arrayOf(PropTypes.string),
};

export {Offer};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offer: getActiveOffer(state),
  favouriteOffers: getFavouritesList(state),
  offers: getHotels(state),
  checkAuthorization: getStatusAuthorization(state),
  cityOnMap: getSelectCityNumber(state),
  nameCityOnMap: getSelectCity(state),
  offerCities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendOfferToFavourite: (favouriteOffers, offer, i) => {
    dispatch(ActionCreator.addCardToFavourite(favouriteOffers, offer, i));
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Offer);
