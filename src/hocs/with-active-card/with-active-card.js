import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const withActiveCard = (WrappedComponent) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: false,
        // activeCard: null,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._setUnActiveItem = this._setUnActiveItem.bind(this);
    }

    _setActiveItem() {

      this.setState({
        active: true,
      });


      // console.log(`wrapped`);
      // console.log(this.state.activeCard);
    }

    _setUnActiveItem() {

      this.setState({
        active: false,
        // activeCard: null,
      });
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          // activeCard={this.state.activeCard}
          onCardClick={this._setActiveItem}
          onCardMouseEnter={this._setActiveItem}
          onCardMouseOut={this._setUnActiveItem}
          className={this.state.active === true ? `active` : ``} />
      );
    }

  }

  WithActiveCard.propTypes = {
    // activeCard: PropTypes.string,
    offer: PropTypes.object,
  };

  return WithActiveCard;
};

export default withActiveCard;
