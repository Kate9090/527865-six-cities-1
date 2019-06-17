import React from 'react';
import PropTypes from 'prop-types';

import withRedirect from '../../hocs/with-redirect/with-redirect';

import MainScreen from '../main-screen/main-screen.jsx';

import {connect} from 'react-redux';
import {getStatusAuthorization} from '../../reducer/user/selectors';

const WrappedMainScreen = withRedirect(MainScreen);

const App = (props) => {
  const {authorized} = props;

  return <WrappedMainScreen notNeedToAuthrized={authorized}/>;
};

App.propTypes = {
  authorized: PropTypes.bool.isRequired,
};

export {App};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  authorized: getStatusAuthorization(state),
});

export default connect(
    mapStateToProps
)(App);
