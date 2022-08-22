import type {Hotel} from '../../types/hotel';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesPlacesProps = {
  city: string;
  favorites: Hotel[];
}

function FavoritesPlaces({favorites, city}: FavoritesPlacesProps): JSX.Element {

  const favoritesPlaces = () =>
    favorites.filter((hotel) =>
      hotel.city.name === city).map((hotel) =>
      (
        <FavoriteCard key={hotel.id} hotel={hotel}/>
      ));

  return (
    <div className="favorites__places">
      {
        favoritesPlaces()
      }
    </div>
  );
}

export default FavoritesPlaces;
