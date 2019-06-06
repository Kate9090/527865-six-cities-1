import React from "react";
import PropTypes from 'prop-types';

import {Switch, Route, Redirect} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import {connect} from 'react-redux';
import {getStatusAuthorization} from '../../reducer/user/selectors';

const App = (props) => {
  const {authorized} = props;

  return <Switch>
    <Route exact path="/" render={() => {
      if (authorized) {
        return <MainScreen />;
      }
      return <Redirect to="/login" />;
    }}>
    </Route>

    <Route path="/login" render={() => {

      if (authorized) {
        return <Redirect to="/" />;
      }

      return <SignIn />;
    }}>
    </Route>
  </Switch>;
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
