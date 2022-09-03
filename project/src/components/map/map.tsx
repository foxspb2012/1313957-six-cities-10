import type {Hotel} from '../../types/hotel';
import useMap from '../../hooks/useMap';
import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {IconUrl, PIN_SIZES} from '../../const';

type CityMapProps = {
  hotels: Hotel[];
  selectedHotel?: Hotel;
}

const defaultCity = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  name: 'Paris'
};

function Map({hotels, selectedHotel}: CityMapProps): JSX.Element {

  const mapRef = useRef(null);
  const city = (hotels.length !== 0) ? hotels[0]?.city : defaultCity;
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
          iconUrl: IconUrl.Default,
          iconSize: PIN_SIZES.iconSize,
          iconAnchor: PIN_SIZES.iconAnchor
        });

        const currentPin = new Icon({
          iconUrl: IconUrl.Current,
          iconSize: PIN_SIZES.iconSize,
          iconAnchor: PIN_SIZES.iconAnchor
        });

        const marker = new Marker({
          lat: hotel.location.latitude,
          lng: hotel.location.longitude
        });

        marker
          .setIcon(
            selectedHotel === hotel
              ? currentPin
              : defaultPin
          )
          .addTo(map);
      });
    }

    return () => {
      map?.eachLayer((it) => {
        if (it.getPane()?.classList.contains('leaflet-marker-pane')) {
          it.remove();
        }
      });
    };
  });

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
