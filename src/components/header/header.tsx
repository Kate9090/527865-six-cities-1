import React from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {UserData} from '../../types';
import {getUser, getStatusAuthorization} from '../../reducer/user/selectors';

interface Props {
  user: UserData,
  checkAuthorization: boolean,
}

const Header: React.FunctionComponent<Props> = (props) => {
  const {user, checkAuthorization} = props;

  return <>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link" href="main.html">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {!checkAuthorization ?
                <Link to="/login" className="header__login">Sign in</Link>
                : <>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <Link to="/favorites" className="header__user-name user__name">{user.email}</Link>
                  </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </>;
};

export {Header};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
  checkAuthorization: getStatusAuthorization(state),
});

export default connect(
    mapStateToProps
)(Header);
