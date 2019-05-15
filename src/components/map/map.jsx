import React from "react";
import leaflet from "leaflet";
// import PropTypes from 'prop-types';


class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    // this._mapRef = React.createRef();

  }
  componentDidMount() {
    this.city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.zooms = 12;
    this.map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zooms,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.city, this.zooms);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    const offerCords = [52.3709553943508, 4.89309666406198];

    leaflet
      .marker(offerCords, {icon})
      .addTo(this.map);
  }

  render() {
    return <section className="cities__map map">
      <div id="map"></div>
    </section>;
  }
}

// Map.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     coord: PropTypes.shape({
//       width: PropTypes.number.isRequired,
//       height: PropTypes.number.isRequired,
//     }),
//     offerCord: PropTypes.array.isRequired,
//   })).isRequired,

// };

export default Map;
