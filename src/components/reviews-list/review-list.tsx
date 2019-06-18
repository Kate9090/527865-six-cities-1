import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user';

import {getStatusAuthorization, getReviews} from '../../reducer/user/selectors';

const ReviewParams = {
  MAX_REVIEWS: 10,
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
  NUMBER_OF_STARS: 5,
};

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);

    this._reviewBtn = React.createRef();
    this._reviewField = React.createRef();
    this._reviewForm = React.createRef();
    this._ratingList = React.createRef();

    this.text = null;

    this._handlePrintComment = this._handlePrintComment.bind(this);
    this._handleFormChange = this._handleFormChange.bind(this);
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
                <span style={{width: it.rating / ReviewParams.NUMBER_OF_STARS * 100}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="property__text">
              {it.comment}</p>
            <time className="reviews__time">{
              new Date().toLocaleDateString(`en-US`, {month: `long`, year: `numeric`})
            }</time>
          </div>
        </li>
      )
      .sort((a, b) => b.key - a.key)
      .slice(0, ReviewParams.MAX_REVIEWS)
    }
    </>;
  }

  _handlePrintComment(evt) {
    const {reviews} = this.props;
    evt.preventDefault();


    this.text = this._reviewField.current.value;

    this.props.onSendComment({rating: +this.selectedRating, comment: this.text}, reviews, reviews.length);

    this._reviewField.current.value = ``;
    this._clearErrorForm();
    this._disabledFormReview();
    this.forceUpdate();
  }


  _handleFormChange() {
    if (!this._reviewField || !this._ratingList) {

      return;
    }

    this.text = this._reviewField.current.value;

    if (this.text.length < ReviewParams.MIN_LENGTH || this.text.length > ReviewParams.MAX_LENGTH || !this.selectedRating) {
      this._disabledButtonReview();
      if (this.text.length > ReviewParams.MAX_LENGTH) {
        this._setErrorForm();
      }
    } else {
      this._enabledButtonReview();
    }
  }

  _setErrorForm() {
    this._reviewField.current.style.border = `solid 1px red`;
  }

  _clearErrorForm() {
    this._reviewField.current.style.border = ``;
  }

  _disabledButtonReview() {
    this._reviewBtn.current.disabled = true;
  }

  _enabledButtonReview() {
    this._reviewBtn.current.disabled = false;
  }

  _disabledFormReview() {
    this._reviewBtn.current.disabled = true;
  }

  _enabledFormReview() {
    this._reviewBtn.current.disabled = false;
  }


  render() {
    const {checkAuthorization, reviews} = this.props;
    return <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {this._renderNewReview()}
      </ul>

      {checkAuthorization ?
        <form ref={this._reviewForm} onSubmit={this._handlePrintComment} className="reviews__form form" action="#" method="post">
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating" ref={this._ratingList}>
            {Array(ReviewParams.NUMBER_OF_STARS).fill(null).map((it, idx, arr) => {
              const rate = arr.length - idx;
              return <React.Fragment key = {idx}>
                <input
                  onClick={() => {
                    this.selectedRating = rate;
                  }}
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={rate}
                  id={`${rate}-stars`} type="radio" />
                <label htmlFor={`${rate}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>;

            })
            }
          </div>
          <textarea ref={this._reviewField} onChange={this._handleFormChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button ref={this._reviewBtn}
              disabled={true} className="reviews__submit form__submit button" type="submit">Submit</button>
          </div>
        </form>
        : <></>
      }
    </section>;
  }
}

ReviewList.propTypes = {
  checkAuthorization: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number
  })).isRequired,
  onSendComment: PropTypes.func.isRequired,
};

export {ReviewList};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  checkAuthorization: getStatusAuthorization(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendComment: ({rating: ratingNew, comment: commentNew}, reviewArray, lengthOfArray) => {
    dispatch(ActionCreator.sendComment({rating: ratingNew, comment: commentNew}, reviewArray, lengthOfArray));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
