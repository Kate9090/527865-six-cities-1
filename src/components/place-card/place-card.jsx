import React, {Component} from "react";
import PropTypes from 'prop-types';

class PlaceCard extends Component {
  constructor(props) {
    super(props);

    // this.setActiveItem = this.setActiveItem.bind(this);
  }

  render() {
    const {offer} = this.props;

    return <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>
          Premium
        </span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            onClick= {this.setActiveItem}
            onMouseEnter={this.setActiveItem}
            onMouseLeave={this.setUnActiveItem}
            className={`place-card__image`}
            //  {index === current ? `place-card__image--current` : ``}
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
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.name}</p>
      </div>
    </article>;
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string,
    offerCoord: PropTypes.array.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default PlaceCard;
