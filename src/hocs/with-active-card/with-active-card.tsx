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

      this._onSetActiveItem = this._onSetActiveItem.bind(this);
      this._onSetUnActiveItem = this._onSetUnActiveItem.bind(this);
    }

    _onSetActiveItem(card) {
      this.setState({
        active: true,
        current: card,
      });
    }

    _onSetUnActiveItem() {
      this.setState({
        active: false,
        current: null,
      });
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          onCardClick={this._onSetActiveItem}
          onCardMouseEnter={this._onSetActiveItem}
          onCardMouseOut={this._onSetUnActiveItem}
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
