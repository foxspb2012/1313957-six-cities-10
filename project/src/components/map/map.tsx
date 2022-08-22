import type {Hotel} from '../../types/hotel';
import {useRef, useEffect} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

type CityMapProps = {
  hotels: Hotel[];
}

function Map({hotels}: CityMapProps): JSX.Element {

  const mapRef = useRef(null);

  const map = useMap(mapRef, hotels[0].city);

  useEffect(() => {
    if (map) {
      hotels.forEach((hotel) => {
        const defaultCustomIcon = new Icon({
          iconUrl: 'img/pin.svg',
          iconSize: [20, 30],
          iconAnchor: [20, 30]
        });

        const marker = new Marker({
          lat: hotel.location.latitude,
          lng: hotel.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, hotels]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
