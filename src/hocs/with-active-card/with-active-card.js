import React, {PureComponent} from 'react';

const withActiveCard = (WrappedComponent) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: false,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._setUnActiveItem = this._setUnActiveItem.bind(this);
      this._renderOffers = this._renderOffers.bind(this);
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

    _renderOffers() {
      return <WrappedComponent
        onCardClick={this._setActiveItem()}
        onCardMouseEnter={() => {
          this._setActiveItem();
        }}
        onCardMouseOut={this._setUnActiveItem()}
      />;
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          renderOffers={this._renderOffers}
          className={this.state.active === true ? `active` : ``} />
      );
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
