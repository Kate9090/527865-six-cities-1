import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ActionCreator} from '../../reducer/user/user';

import {getStatusAuthorization} from '../../reducer/user/selectors';

import {OfferType, Review, FavouriteOfferType} from '../../types';

interface Props {
  offer: FavouriteOfferType,
  onCardClick: (offer: FavouriteOfferType) => void,
  onCardMouseEnter: () => void,
  onCardMouseOut: () => void,
  checkAuthorization: boolean,
}

const PlaceCard: React.FunctionComponent<Props> = (props) => {

  const {offer, onCardClick, onCardMouseEnter, onCardMouseOut, checkAuthorization} = props;

  const _handleClick = () => {
    onCardClick(offer)
  }
  return <article className="cities__place-card place-card">
    <div className="place-card__mark">
      <span>
        Premium
      </span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#"
        onClick = {_handleClick}
        onMouseOver={onCardMouseEnter}
        onMouseOut={onCardMouseOut}
        className="cities__image-link"
      >
        <img
          className={`place-card__image`}
          src={offer.src} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-defaultValue">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `93%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        {!checkAuthorization ?
          <Link to="/login" className="header__login">Sign in</Link>
          : <Link to={`/offer/${offer.id}`} className="header__user-name user__name">{offer.title}</Link>
        }
      </h2>
      <p className="place-card__type">{offer.name}</p>
    </div>
  </article>;

};


PlaceCard.propTypes = {

};

export {PlaceCard};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  checkAuthorization: getStatusAuthorization(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick: (offer) => {
    dispatch(ActionCreator.showActiveOffer(offer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
