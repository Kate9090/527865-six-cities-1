import React from "react";
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import {connect} from 'react-redux';
import {getStatusAuthorization} from '../../reducer/user/selectors';

const App = (props) => {
  const {authorized} = props;

  console.log(`authorized`);
  console.log(authorized);

  if (authorized) {
    return <MainScreen />;
  }
  return <SignIn />;
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
