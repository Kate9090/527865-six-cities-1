import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user';

import {getStatusAuthorization, getReviews} from "../../reducer/user/selectors";

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this._handlePrintComment = this._handlePrintComment.bind(this);
  }

  _handlePrintComment(e) {
    const {reviews} = this.props;
    e.preventDefault();
    let text = document.querySelector(`textarea`).value;
    this.props.onSendComment(text, reviews, reviews.length);
    document.querySelector(`textarea`).value = ``;
    this.forceUpdate();
  }

  componentWillUpdate(exProps) {
    if (exProps.reviews.length !== this.props.reviews.length) {
      return true;
    }
    return true;
  }

  _renderNewReview() {
    const {reviews} = this.props;
    return <>
    {reviews
      .map((it, i) =>
        <li key={`review-${i}`} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              Max
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `94%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="property__text">
              {it}</p>
            <time className="reviews__time">{
              new Date().toLocaleDateString(`en-US`, {month: `long`, year: `numeric`})
            }</time>
          </div>
        </li>
      )
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .slice(0, 10)
    }
    </>;
  }

  render() {
    const {checkAuthorization, reviews} = this.props;
    return <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {this._renderNewReview()}
      </ul>

      {checkAuthorization ?
        <form className="reviews__form form" action="#" method="post">
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
            <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
            <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
            <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
            <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="/icon-star"></use>
              </svg>
            </label>
          </div>
          <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button onClick={(e) => this._handlePrintComment(e)} className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
          </div>
        </form>
        : <></>
      }
    </section>;
  }
}

ReviewList.propTypes = {
  checkAuthorization: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSendComment: PropTypes.func.isRequired,
};

export {ReviewList};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  checkAuthorization: getStatusAuthorization(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendComment: (text, reviewArray, lengthOfArray) => {
    dispatch(ActionCreator.sendComment(text, reviewArray, lengthOfArray));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
