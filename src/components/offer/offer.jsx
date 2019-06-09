import React from "react";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getActiveOffer} from '../../reducer/user/selectors';

import {ActionCreator} from '../../reducer/user/user';

import {getHotels} from "../../reducer/data/selectors";
import {getFavouritesList} from '../../reducer/user/selectors';

import Header from '../header/header.jsx';
import ReviewList from '../reviews-list/review-list.jsx';
import {PlaceCard} from "../place-card/place-card.jsx";

const Offer = (props) => {

  const {offers, favouriteOffers,
    offer, sendOfferToFavourite} = props;

  const onCardClick = () => {
    if (favouriteOffers && offer) {
      let i = favouriteOffers.length;
      sendOfferToFavourite(favouriteOffers, offer, i);
      console.log(`send`);
      console.log(offer);
    }
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
            )).slice(0, 6)}
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
              <button onClick={onCardClick} className="property__bookmark-button button" type="button" style={{backgroundImage: `url('/img/icon-bookmark.svg')`, backgroundRepeat: `no-repeat`}}>
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
                  <img className="property__avatar user__avatar" src={offer.host.avatar_url} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.is_pro ? `Pro` : ``}
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
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {offers.filter((it) => it.city.name === offer.name && it.id !== offer.id).map((i) => <PlaceCard offer={offers.i} key={`nearPlace-${i}`}/>).slice(0, 3)}
          </div>
        </section>
      </div>
    </main>
  </>;
};

Offer.propTypes = {
  offer: PropTypes.object,
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
  })).isRequired,
  sendOfferToFavourite: PropTypes.func.isRequired,
};

export {Offer};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offer: getActiveOffer(state),
  favouriteOffers: getFavouritesList(state),
  offers: getHotels(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOfferToFavourite: (favouriteOffers, offer, i) => {
    dispatch(ActionCreator.addCardToFavourite(favouriteOffers, offer, i));
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Offer);
