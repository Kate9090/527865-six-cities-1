import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const withActiveCard = (WrappedComponent) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: false,
        current: undefined,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._setUnActiveItem = this._setUnActiveItem.bind(this);
    }

    _setActiveItem(card) {
      this.setState({
        active: true,
        current: card,
      });
    }

    _setUnActiveItem() {
      this.setState({
        active: false,
        current: null,
      });
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          onCardClick={this._setActiveItem}
          onCardMouseEnter={this._setActiveItem}
          onCardMouseOut={this._setUnActiveItem}
          current = {this.state.current}
          classForLink={this.state.active === true ? `active` : ``} />
      );
    }

  }

  WithActiveCard.propTypes = {
    offer: PropTypes.object,
  };

  return WithActiveCard;
};

export default withActiveCard;
