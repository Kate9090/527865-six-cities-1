import React from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

// console.log(leaflet);

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  render() {
    return <section className="cities__map" id="map">
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

  componentDidMount() {
    const {offer} = this.props;

    // console.log(offer);

    this.city = [52.38333, 4.9];

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

    const offerCords = [52.3709553943508, 4.89309666406198];

    this._handleAddPinOnMap(offerCords);

    for (let i = 0; i < offer.length; i++) {
      this._handleAddPinOnMap(offer[i].offerCoord);
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

};

export default Map;
