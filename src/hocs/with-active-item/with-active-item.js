import React, {PureComponent} from 'react';

const withActiveItem = (WrappedComponent, i) => {
  return class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        current: i,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(card) {
      this.setState({
        current: card,
      });
    }

    _setUnActiveItem() {
      this.setState({
        current: null,
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onClick={this._setActiveItem}
          onMouseEnter={this._setActiveItem}
          onMouseLeave={this._setUnActiveItem} />
      );
    }
  };
};

export default withActiveItem;
