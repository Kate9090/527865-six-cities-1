import React from "react";
// import PropTypes from 'prop-types';


import {connect} from 'react-redux';
// import {addCardToFavourites} from '../../reducer/user/selectors';

import Header from '../header/header.jsx';


const Favourites = (props) => {
  // const {favouriteOffers} = props;

  console.log(`favouriteOffers`);
  console.log(favouriteOffers);
  return <>
    <Header />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favouriteOffers.length > 0 ? <>
              <li className="favorites__locations-items">
                {/* <div className="favorites__locations locations locations--current"> */}
                {/* <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>  */}
                <div className="favorites__places">
                  <article className="favorites__card place-card">
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image" />
                      </a>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;180</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: `100%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">Nice, cozy, warm big bed apartment</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>


                </div>
              </li>
              </> : <>
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
              </>
            }
          </ul>
        </section>
      </div>
    </main>
  </>;
};

// _getCardsByCities() {
//   return Object.entries(this.props.offers.filter((it) => it.isFavorite).reduce((obj, it) => {
//     const cityName = it.city.name;

//     if (!obj[cityName]) {
//       obj[cityName] = [];
//     }

//     obj[cityName].push(it);

//     return obj;
//   }, {}));
// };

// Favourites.propTypes = {
//   favouriteOffers: PropTypes.array.isRequired,
// };

export {Favourites};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // favouriteOffers: addCardToFavourites(state),
});

export default connect(
    mapStateToProps
)(Favourites);

