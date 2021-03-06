import React, {PureComponent} from 'react';


const withFavouriteCard = (WrappedComponent) => {
  class WithFavouriteCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: false,
      };

      this._onSetActiveItem = this._onSetActiveItem.bind(this);
      this._onSetUnActiveItem = this._onSetUnActiveItem.bind(this);
    }

    _onSetActiveItem() {
      this.setState({
        isFavorite: true,
      });
    }

    _onSetUnActiveItem() {
      this.setState({
        isFavorite: false,
      });
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          onCardClick={this._onSetActiveItem}
        />
      );
    }

  }

  return WithFavouriteCard;
};

export default withFavouriteCard;
