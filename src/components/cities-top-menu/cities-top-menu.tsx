import * as React from 'react';

import {connect} from 'react-redux';

import City from '../city/city';
import {getCities} from '../../reducer/data/selectors';

interface Props {
  cities: string[],
  onCardMouseOut: () => void,
  onCardClick: () => void,
  current: string,
};

const CitiesTopMenu: React.FunctionComponent<Props> = (props) => {
  const {cities, onCardClick, onCardMouseOut, current} = props;

  const _renderCitiesTopMenu = () => {

    return <ul className="locations__list tabs__list">
      {cities.map((it, i) => (
        <City cities={cities} onCardClick={onCardClick} current={current} onCardMouseOut={onCardMouseOut} key={`city-${i}`} city={it} idx={i} />
      )
      )}
    </ul>;
  };

  return <>
  {_renderCitiesTopMenu()}
  </>;
};

export {CitiesTopMenu};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: getCities(state),
});

export default connect(
    mapStateToProps
)(CitiesTopMenu);
