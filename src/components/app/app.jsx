import React from "react";
import PropTypes from 'prop-types';

import {Switch, Route} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import {connect} from 'react-redux';
import {getStatusAuthorization} from '../../reducer/user/selectors';

const App = (props) => {
  const {authorized} = props;

  return <Switch>
    <Route path="/">
      <MainScreen />;
    </Route>

    <Route path="/login">
    </Route>
  </Switch>;
  // if (authorized) {
  //   return <MainScreen />;
  // }
  // return <SignIn />;
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
