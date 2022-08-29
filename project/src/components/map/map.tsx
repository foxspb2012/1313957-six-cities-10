import type {Hotel} from '../../types/hotel';
import useMap from '../../hooks/useMap';
import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';
import {PIN_SIZES} from '../../const';

type CityMapProps = {
  hotels: Hotel[];
  currentId?: number;
}

function Map({hotels, currentId = undefined}: CityMapProps): JSX.Element {

  const hotelId = useAppSelector((state) => state.hotelId);
  const selectedId = currentId || hotelId;

  const mapRef = useRef(null);
  const city = hotels[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const {location :{latitude, longitude, zoom}} = city;
      map.setView(
        [latitude, longitude],
        zoom,
      );

      hotels.forEach((hotel) => {

        const defaultPin = new Icon({
          iconUrl: 'img/pin.svg',
          iconSize: PIN_SIZES.iconSize,
          iconAnchor: PIN_SIZES.iconAnchor
        });

        const currentPin = new Icon({
          iconUrl: 'img/pin-active.svg',
          iconSize: PIN_SIZES.iconSize,
          iconAnchor: PIN_SIZES.iconAnchor
        });

        const marker = new Marker({
          lat: hotel.location.latitude,
          lng: hotel.location.longitude
        });

        marker
          .setIcon(
            hotel.id === selectedId
              ? currentPin
              : defaultPin
          )
          .addTo(map);
      });
    }

  }, [map, hotels, selectedId, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
