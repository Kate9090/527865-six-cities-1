import React from 'react';
import PropTypes from 'prop-types';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainScreen from '../../components/main-screen/main-screen.jsx';
import SignIn from '../../components/sign-in/sign-in.jsx';
import Favorites from '../../components/favorites/favorites.jsx';
import Offer from '../../components/offer/offer.jsx';

const withRedirect = () => {
  const WithRedirect = (props) => {
    const {notNeedToAuthrized} = props;

    return <BrowserRouter><Switch>
      <Route exact path="/" render={() => {
        if (notNeedToAuthrized) {
          return <MainScreen
            {...props}
          />;
        }
        return <Redirect to="/login" />;
      }}
      >
      </Route>
      <Route path="/favorites" render={() => {
        if (notNeedToAuthrized) {
          return <Favorites />;
        }

        return <Redirect to="/login" />;
      }} />
      <Route path="/offer" render={() => {
        if (notNeedToAuthrized) {
          return <Offer />;
        }

        return <Redirect to="/login" />;
      }} />
      <Route path="/login" render={() => {

        if (notNeedToAuthrized) {
          return <Redirect to="/" />;
        }

        return <SignIn />;
      }}>
      </Route>
    </Switch>
    </BrowserRouter>;
  };

  WithRedirect.propTypes = {
    notNeedToAuthrized: PropTypes.bool.isRequired,
  };

  return WithRedirect;
};

export default withRedirect;
