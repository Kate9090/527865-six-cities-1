import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getSelectCity} from '../../reducer/user/selectors';
import {getDefaultCity} from '../../reducer/data/selectors';

const HeaderPlaces = (props) => {
  const {activeCity, defaultCity} = props;

  // console.log(`activeCity is  ` + activeCity);
  // console.log(`defaultCity is  ` + defaultCity);

  return <>
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">312 places to stay in {activeCity === `` ? defaultCity : activeCity}</b>
  </>;
};

HeaderPlaces.propTypes = {
  activeCity: PropTypes.string.isRequired,
  defaultCity: PropTypes.string.isRequired,
};

export {HeaderPlaces};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: getSelectCity(state),
  defaultCity: getDefaultCity(state),
});

export default connect(
    mapStateToProps
)(HeaderPlaces);
