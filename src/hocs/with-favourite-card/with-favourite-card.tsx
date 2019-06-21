import * as React from 'react';

interface State {
  isFavorite: boolean,
}

const withFavouriteCard = (WrappedComponent) => {
  class WithFavouriteCard extends React.Component<React.ComponentProps<typeof React.Component>, State> {
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