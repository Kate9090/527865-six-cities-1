import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const withActiveCard = (WrappedComponent) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: false,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._setUnActiveItem = this._setUnActiveItem.bind(this);
    }

    _setActiveItem() {

      this.setState({
        active: true,
      });

    }

    _setUnActiveItem() {

      this.setState({
        active: false,
      });
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          onCardClick={this._setActiveItem}
          onCardMouseEnter={this._setActiveItem}
          onCardMouseOut={this._setUnActiveItem}
          className={this.state.active === true ? `active` : ``} />
      );
    }

  }

  WithActiveCard.propTypes = {
    offer: PropTypes.object,
  };

  return WithActiveCard;
};

export default withActiveCard;
