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

    _setActiveItem(current) {
      this.setState({
        current,
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          active={this.state.active}
          setActiveItem={this._setActiveItem} />
      );
    }
  };
};

export default withActiveItem;
