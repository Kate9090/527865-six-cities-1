import * as React from 'react';

import withRedirect from '../../hocs/with-redirect/with-redirect';

import MainScreen from '../main-screen/main-screen.jsx';

import {connect} from 'react-redux';
import {getStatusAuthorization} from '../../reducer/user/selectors';

interface Props {
  authorized: boolean,
};

const App: React.FunctionComponent<Props> = (props) => {
  const {authorized} = props;
  const WrappedMainScreen = withRedirect(MainScreen);

  return <WrappedMainScreen notNeedToAuthrized={authorized}/>;
};

export {App};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  authorized: getStatusAuthorization(state),
});

export default connect(
    mapStateToProps
)(App);
