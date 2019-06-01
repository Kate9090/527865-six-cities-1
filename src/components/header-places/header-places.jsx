import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const HeaderPlaces = (props) => {
  const {activeCity} = props;

  return <>
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">312 places to stay in {activeCity}</b>
  </>;
};

HeaderPlaces.propTypes = {
  activeCity: PropTypes.string.isRequired,
};

export {HeaderPlaces};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: state.city,
});

export default connect(
    mapStateToProps
)(HeaderPlaces);
