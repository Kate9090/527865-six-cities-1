import * as React from 'react';
import { FavouriteOfferType } from '../../types';

interface State {
  active: boolean,
  current: FavouriteOfferType,
}

const withActiveCard = (WrappedComponent) => {
  class WithActiveCard extends React.PureComponent<React.ComponentProps<typeof React.PureComponent>, State> {
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

  return WithActiveCard;
};

export default withActiveCard;
