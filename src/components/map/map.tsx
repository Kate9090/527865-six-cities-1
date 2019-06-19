import * as React from 'react';
import * as leaflet from 'leaflet';
import {connect} from 'react-redux';

import {getCities} from '../../reducer/data/selectors';
import {getSelectCity, getPinColor} from '../../reducer/user/selectors';
import { FavouriteOfferType } from '../../types';

const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [22, 30]
});
const activeIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});

let map = {
  ZOOM: 12,
  NEIGHBOURS: 3,
};

interface Props {
  offer: FavouriteOfferType[],
  nameCityOnMap: string,
  offerCities: string[],
  activeCard: FavouriteOfferType,
  color: string,
}

class Map extends React.Component<Props, null> {
  private mapRef: React.RefObject<HTMLFormElement>;

  private map: {};

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

export {Map};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offerCities: getCities(state),
  nameCityOnMap: getSelectCity(state),
  color: getPinColor(state),
});

export default connect(
    mapStateToProps
)(Map);
