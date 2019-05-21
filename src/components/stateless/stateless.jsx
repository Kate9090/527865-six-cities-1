import React, {Component} from "react";
// import leaflet from "leaflet";
import PropTypes from 'prop-types';

import CityList from '../city-list/city-list.jsx';
import PlaceCard from '../place-card/place-card.jsx';
import Map from '../map/map.jsx';

class Stateless extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const {
      offer,
      offerscity,
      onTitleClick,
      // onImageClick,
    } = this.props;


    return <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <section className="locations container">
          <CityList offersCity={offerscity} />
        </section>
      </div>

      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>

              <select className="places__sorting-type" id="places-sorting" defaultValue={`popular`}>
                <option className="places__option" value={`popular`}>Popular</option>
                <option className="places__option" value={`to-high`}>Price: low to high</option>
                <option className="places__option" value={`to-low`}>Price: high to low</option>
                <option className="places__option" value={`top-rated`}>Top rated first</option>
              </select>

            </form>
            <div className="cities__places-list places__list tabs__content">
              {offer.map((it, i) => (
                <PlaceCard
                  key={i}
                  offer={it}
                  offerCoord={it.offerCoord}
                  onChoice={onTitleClick}
                  onImageChoice={() => {
                    this.setState({
                      active: true
                    });
                  }}
                  // onAddHotel={() => {
                  //   this.setState({
                  //     hotels: this.state.hotels + 1
                  //   });
                  // }}
                  // add={
                  //   this._handleAddHotelOnMap()
                  // }
                />
              )
              // this._handleAddHotelOnMap(it.offerCords)
              )}
            </div>
          </section>
          <div className="cities__right-section">
            <Map offer={offer}/>
          </div>
        </div>
      </div>

    </main>;
  }
}

Stateless.propTypes = {
  onChoice: PropTypes.func,
  offer: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string,
    offerCoord: PropTypes.array.isRequired,
  })).isRequired,
  onTitleClick: PropTypes.func,
  onImageClick: PropTypes.func,
  offerscity: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
};

export default Stateless;
