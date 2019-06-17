import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getCities} from '../../reducer/data/selectors';
import {getSelectCity, getPinColor} from '../../reducer/user/selectors';

const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [22, 30]
});
const activeIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});

const map = {
  ZOOM: 12,
  NEIGHBOURS: 3,
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    try {
      if (this.map) {
        this.map.remove();
      }
      this._init();
    } catch (err) {
      return true;
    }

    return true;
  }

  componentWillUpdate(exProps) {
    if (exProps.offer !== this.props.offer) {
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
    const {offer, nameCityOnMap, activeCard
    } = this.props;
    if (this.props.offerCities.length > 0) {
      if (this.mapRef.current) {
        if (nameCityOnMap !== ``) {
          let coordOffer = offer.filter((it) => it.city.name === nameCityOnMap).slice(0, 1);

          const offerCoordCity = [coordOffer[0].location.latitude, coordOffer[0].location.longitude];
          this.city = offerCoordCity;
        } else {
          let coordOffer = offer.filter((it) => it.city.name === this.props.offerCities[0]).slice(0, 1);

          const offerCoordCity = [coordOffer[0].city.location.latitude, coordOffer[0].city.location.longitude];
          this.city = offerCoordCity;
        }
        this.center = this.city;


        this.zooms = map.ZOOM;
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

  render() {
    const {offer} = this.props;

    return <section
      className={offer.length > map.NEIGHBOURS ? `cities__map` : `property__map`} id="map" ref={this.mapRef}
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
  activeCard: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    raiting: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  }),
  color: PropTypes.string,
};

export {Map};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offerCities: getCities(state),
  nameCityOnMap: getSelectCity(state),
  color: getPinColor(state),
});

export default connect(
    mapStateToProps
)(Map);
