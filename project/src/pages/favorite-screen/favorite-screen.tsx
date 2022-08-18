import type {HotelType} from '../../types/hotel';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {AuthorizationStatus} from '../../const';

type FavoriteScreenType = {
  favorites: HotelType[];
  authStatus: AuthorizationStatus;
}

function FavoriteScreen({favorites, authStatus}: FavoriteScreenType): JSX.Element {

  const cities = favorites.map((item) => item.city.name)
    .reduce((acc: string[], item) => (acc.includes(item) ? acc : [...acc, item]), []).sort();

  const hasFavorites = favorites.length !== 0;

  return (
    <div className={`page ${!hasFavorites ? 'page--favorites-empty' : ''}`}>
      <Header authStatus={authStatus} />
      <main className={`page__main page__main--favorites ${!hasFavorites ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {hasFavorites ?
            <Favorites cities={cities} favorites={favorites}/>
            : <FavoritesEmpty />}
        </div>
      </main>
      <footer className={`footer ${hasFavorites ? 'container' : ''}`}>
        <Logo />
      </footer>
    </div>
  );
}

export default FavoriteScreen;
