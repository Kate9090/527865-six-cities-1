import React from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

const city = [52.38333, 4.9];
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const zooms = 12;
const map = leaflet.map(`map`, {
  center: city,
  zoom: zooms,
  zoomControl: false,
  marker: true
});
map.setView(city, zooms);

leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(map);

const offerCords = [52.3709553943508, 4.89309666406198];
leaflet
  .marker(offerCords, {icon})
  .addTo(map);

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };

    this._mapRef = React.createRef();
  }

  render() {
    const {data} = this.props;
    const {offerCord} = data;
    return <section className="cities__map map">
      <div id="map" ref={this._mapRef} coordPin={offerCord}></div>
    </section>;
  }
}

Map.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    coord: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    offerCord: PropTypes.array.isRequired,
  })).isRequired,

};

export default Map;
