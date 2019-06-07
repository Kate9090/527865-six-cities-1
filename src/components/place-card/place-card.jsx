import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {ActionCreator} from '../../reducer/user/user';

import {getStatusAuthorization} from "../../reducer/user/selectors";


const PlaceCard = (props) => {

  const {offer, onCardClick, onCardMouseEnter, onCardMouseOut, checkAuthorization} = props;

  return <article className="cities__place-card place-card">
    <div className="place-card__mark">
      <span>
        Premium
      </span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#"
        onClick= {onCardClick(offer)}
        onMouseOver={onCardMouseEnter}
        onMouseOut={onCardMouseOut}
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
          : <Link to="/offer" className="header__user-name user__name">{offer.title}</Link>
        }
      </h2>
      <p className="place-card__type">{offer.name}</p>
    </div>
  </article>;
};


PlaceCard.propTypes = {
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
  }).isRequired,
  onCardClick: PropTypes.func,
  onCardMouseEnter: PropTypes.func,
  onCardMouseOut: PropTypes.func,
  checkAuthorization: PropTypes.bool.isRequired,
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
