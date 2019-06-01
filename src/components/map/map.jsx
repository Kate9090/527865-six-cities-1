import React from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  render() {
    return <section className="cities__map">
      <div id="map" ref={this.mapRef} style={{height: `800px`}}></div>
    </section>;
  }

  _handleAddPinOnMap(offerCityCords) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [22, 30]
    });
    leaflet
      .marker(offerCityCords, {icon}).addTo(this.map);
  }

  componentDidUpdate() {
    const {offer, cityOnMap, offerCities
    } = this.props;

    this.city = offerCities[cityOnMap].offerCoord;
    this.map.setView(this.city, this.zooms);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        detectRetina: true,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }).addTo(this.map);

    const offerCords = offerCities[cityOnMap].offerCoord;

    this._handleAddPinOnMap(offerCords);

    for (let i = 0; i < offer.length; i++) {
      this._handleAddPinOnMap(offer[i].offerCoord);
    }
  }

  componentDidMount() {
    if (this.mapRef.current) {
      const {offer, cityOnMap, offerCities
      } = this.props;

      this.city = offerCities[cityOnMap].offerCoord;

      this.zooms = 12;
      this.map = leaflet.map(this.mapRef.current, {
        center: this.city,
        zoom: this.zooms,
        zoomControl: false,
        marker: true
      });

      this.map.setView(this.city, this.zooms);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          detectRetina: true,
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }).addTo(this.map);

      const offerCords = offerCities[cityOnMap].offerCoord;

      this._handleAddPinOnMap(offerCords);

      for (let i = 0; i < offer.length; i++) {
        this._handleAddPinOnMap(offer[i].offerCoord);
      }
    }
  }
}

Map.propTypes = {
  offer: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string,
    offerCoord: PropTypes.array.isRequired,
  })).isRequired,
  cityOnMap: PropTypes.number.isRequired,
  offerCities: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })),
};

export {Map};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offerCities: state.cityListArray,
  cityOnMap: state.cityNumber,
});

export default connect(
    mapStateToProps
)(Map);
