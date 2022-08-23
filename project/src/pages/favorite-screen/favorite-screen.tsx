import type {Hotel} from '../../types/hotel';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {AuthorizationStatus} from '../../const';
import classNames from 'classnames';

type FavoriteScreenType = {
  favorites: Hotel[];
  authStatus: AuthorizationStatus;
}

function FavoriteScreen({favorites, authStatus}: FavoriteScreenType): JSX.Element {

  const favorite = true;

  const cities = favorites.map((item) => item.city.name)
    .reduce((acc: string[], item) => (acc.includes(item) ? acc : [...acc, item]), []).sort();

  const favoritesEmpty = Boolean(favorites.length === 0);

  const favoriteContainer = (): JSX.Element => (
    favorites.length !== 0 ?
      <Favorites cities={cities} favorites={favorites}/>
      :
      <FavoritesEmpty/>
  );

  const pageClass = classNames('page', {'page--favorites-empty': favoritesEmpty});

  const mainClass = classNames('page__main page__main--favorites', {'page__main--favorites-empty': favoritesEmpty});

  const footerClass = classNames('footer', {'container' : !favoritesEmpty});

  return (
    <div className={pageClass}>
      <Header hotels={favorites} authStatus={authStatus} isFavorites={favorite}/>
      <main className={mainClass}>
        <div className="page__favorites-container container">
          {favoriteContainer()}
        </div>
      </main>
      <footer className={footerClass}>
        <Logo/>
      </footer>
    </div>
  );
}

export default FavoriteScreen;
