import React from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getCities, getHotels} from "../../reducer/data/selectors";
import {getSelectCityNumber, getActiveOffer, getPinColor} from "../../reducer/user/selectors";


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }


  shouldComponentUpdate() {
    if (this.map) {
      this.map.remove();
    }

    return true;
  }


  componentDidUpdate() {
    const {color} = this.props;
    console.log(`update`, color);
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [22, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });
    const {offer, cityOnMap, offerCities, activeCard
    } = this.props;

    if (offerCities.length > 1) {
      if (this.mapRef.current) {

        const offerCoordCity = [offerCities[cityOnMap].location.latitude, offerCities[cityOnMap].location.longitude];

        this.city = offerCoordCity;
        this.center = activeCard !== {} ? [activeCard.location.latitude, activeCard.location.longitude] : this.city;

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
            // attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }).addTo(this.map);

        leaflet
          .marker(offerCoordCity, {icon}).addTo(this.map);


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
  render() {
    const {offer, color} = this.props;
    console.log(offer);
    return <section
      style = {color !== `` ? {borderColor: `${color}`} : {}}
      className={offer.lenght > 3 ? `cities__map` : `property__map`} id="map" ref={this.mapRef}
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
  cityOnMap: PropTypes.number.isRequired,
  offerCities: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  })),
  activeCard: PropTypes.object,
  color: PropTypes.string,
};

export {Map};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offerCities: getCities(state),
  cityOnMap: getSelectCityNumber(state),
  offer: getHotels(state),
  activeCard: getActiveOffer(state),
  color: getPinColor(state),
});

export default connect(
    mapStateToProps
)(Map);
