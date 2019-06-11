import React from "react";
import PropTypes from 'prop-types';
import {getReviews} from '../../reducer/user/selectors';

import {connect} from 'react-redux';

const Review = (props) => {

  const {review} = props;
  console.log(review);

  return <li className="reviews__item">
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
        {review[review.length - 1]}</p>
      <time className="reviews__time" dateTime={review.date}>{
        // moment(review.date).format(`MMMM YYYY`)
      }</time>
    </div>
  </li>;
};

export {Review};

Review.propTypes = {
  review: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  review: getReviews(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   onCardClick: (offer) => {
//     dispatch(ActionCreator.showActiveOffer(offer));
//   },
//   newColor: (color) => {
//     dispatch(ActionCreator.addNewPinColor(color));
//   },
// });

export default connect(mapStateToProps)(Review);
