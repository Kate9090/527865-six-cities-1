import React from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getCities} from "../../reducer/data/selectors";
import {getSelectCity, getActiveOffer, getPinColor} from "../../reducer/user/selectors";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [22, 30]
});
const activeIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();

    this._init();
  }

  componentDidMount() {
    try {
      if (this.map) {
        this.map.remove();
      }

      this.forceUpdate();
      this._init();
    } catch (err) {
      return true;
    }

    return true;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.offer.length !== this.props.offer.length) {
      this._init();
    }
    return true;
  }


  shouldComponentUpdate() {
    if (this.map) {
      this.map.remove();
    }

    this._init();
    return true;
  }

  _init() {
    const {offer, nameCityOnMap, offerCities, activeCard
    } = this.props;
    if (offer && offerCities && activeCard && nameCityOnMap) {
      if (offerCities.length > 0) {

        if (this.mapRef.current) {

          if (nameCityOnMap !== ``) {
            let coordOffer = offer.filter((it) => it.city.name === nameCityOnMap).slice(0, 1);

            const offerCoordCity = [coordOffer[0].location.latitude, coordOffer[0].location.longitude];
            this.city = offerCoordCity;
          } else {
            let coordOffer = offer.filter((it) => it.city.name === offerCities[0]).slice(0, 1);

            const offerCoordCity = [coordOffer[0].city.location.latitude, coordOffer[0].city.location.longitude];
            this.city = offerCoordCity;
          }
          this.center = this.city;


          this.zooms = 12;
          this.map = leaflet.map(this.mapRef.current, {
            center: this.center,
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

          leaflet
            .marker(this.city, {icon}).addTo(this.map);


          for (let i = 0; i < offer.length; i++) {
            if (activeCard) {
              leaflet
                .marker([offer[i].location.latitude, offer[i].location.longitude],
                    {
                      icon: offer[i].id === activeCard.id ?
                        activeIcon
                        : icon
                    }).addTo(this.map);
            } else {
              leaflet
                .marker([offer[i].location.latitude, offer[i].location.longitude], {icon}).addTo(this.map);
            }
          }
        }
      }
    }
  }

  render() {
    const {offer} = this.props;

    return <section
      className={offer.length > 3 ? `cities__map` : `property__map`} id="map" ref={this.mapRef}
    >
    </section>;
  }

}

Map.propTypes = {
  offer: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }),
  })).isRequired,
  nameCityOnMap: PropTypes.string.isRequired,
  offerCities: PropTypes.arrayOf(PropTypes.string),
  activeCard: PropTypes.object,
  color: PropTypes.string,
};

export {Map};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offerCities: getCities(state),
  nameCityOnMap: getSelectCity(state),
  activeCard: getActiveOffer(state),
  color: getPinColor(state),
});

export default connect(
    mapStateToProps
)(Map);
