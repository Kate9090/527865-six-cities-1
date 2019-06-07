import React, {PureComponent} from 'react';


const withFavouriteCard = (WrappedComponent) => {
  class WithFavouriteCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: false,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._setUnActiveItem = this._setUnActiveItem.bind(this);
    }

    _setActiveItem() {

      this.setState({
        isFavorite: true,
      });
    }

    _setUnActiveItem() {

      this.setState({
        isFavorite: false,
      });
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          onCardClick={this._setActiveItem}
        />
      );
    }

  }

  return WithFavouriteCard;
};

export default withFavouriteCard;
