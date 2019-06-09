import React from 'react';
import PropTypes from 'prop-types';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainScreen from '../../components/main-screen/main-screen.jsx';
import SignIn from '../../components/sign-in/sign-in.jsx';
import Favorites from '../../components/favorites/favorites.jsx';
import Offer from '../../components/offer/offer.jsx';

import withFavouriteCard from '../with-favourite-card/with-favourite-card';
const WrappedOffer = withFavouriteCard(Offer);

const withRedirect = () => {
  const WithRedirect = (props) => {
    const {notNeedToAuthrized, onCardClick} = props;

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
          return <Favorites onCardClick={onCardClick}/>;

        }

        return <Redirect to="/login" />;
      }} />
      <Route path="/offer/:id" render={() => {
        if (notNeedToAuthrized) {
          return <WrappedOffer onCardClick={onCardClick}/>;
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
    onCardClick: PropTypes.func,
  };

  return WithRedirect;
};

export default withRedirect;
