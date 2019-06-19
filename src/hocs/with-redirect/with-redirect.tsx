import * as React from 'react';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainScreen from '../../components/main-screen/main-screen.jsx';
import SignIn from '../../components/sign-in/sign-in.jsx';
import Favorites from '../../components/favorites/favorites.jsx';
import Offer from '../../components/offer/offer.jsx';

import withFavouriteCard from '../with-favourite-card/with-favourite-card';
import { FavouriteOfferType } from '../../types';
const WrappedOffer = withFavouriteCard(Offer);

interface InjectedProps {
  onCardClick: (current: FavouriteOfferType) => void,
  notNeedToAuthrized: boolean,
}

const withRedirect = () => {
  const WithRedirect:React.FunctionComponent<InjectedProps> = (props) => {
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
          return <WrappedOffer/>;
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

  return WithRedirect;
};

export default withRedirect;
