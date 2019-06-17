import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {getUser, getStatusAuthorization} from '../../reducer/user/selectors';


const Header = (props) => {
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

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
  }),
  checkAuthorization: PropTypes.bool.isRequired,
};

export {Header};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
  checkAuthorization: getStatusAuthorization(state),
});

export default connect(
    mapStateToProps
)(Header);
