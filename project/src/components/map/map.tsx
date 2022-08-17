import type {CityType} from '../../types/city';
import type {OfferType} from '../../types/offer';
import {useRef, useEffect} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

type CityMapProps = {
  offers: OfferType[];
  city: CityType;
}

function Map({offers, city}: CityMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const defaultCustomIcon = new Icon({
          iconUrl: 'img/pin.svg',
          iconSize: [20, 30],
          iconAnchor: [20, 30]
        });

        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
