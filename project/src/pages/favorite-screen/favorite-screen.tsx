import type {Hotel} from '../../types/hotel';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {AuthorizationStatus} from '../../const';

type FavoriteScreenType = {
  favorites: Hotel[];
  authStatus: AuthorizationStatus;
}

function FavoriteScreen({favorites, authStatus}: FavoriteScreenType): JSX.Element {
  const cities = favorites.map((item) => item.city.name)
    .reduce((acc: string[], item) => (acc.includes(item) ? acc : [...acc, item]), []).sort();

  const favoritesEmpty = Boolean(favorites.length === 0);

  const favoriteContainer = (): JSX.Element => (
    favorites.length !== 0 ?
      <Favorites cities={cities} favorites={favorites}/>
      :
      <FavoritesEmpty/>
  );

  const pageClass = () => `page ${favoritesEmpty ? 'page--favorites-empty' : ''}`;

  const mainClass = () => `page__main page__main--favorites ${favoritesEmpty ? 'page__main--favorites-empty' : ''}`;

  const footerClass = () => `footer ${favoritesEmpty ? '' : 'container'}`;

  return (
    <div className={pageClass()}>
      <Header authStatus={authStatus}/>
      <main className={mainClass()}>
        <div className="page__favorites-container container">
          {favoriteContainer()}
        </div>
      </main>
      <footer className={footerClass()}>
        <Logo/>
      </footer>
    </div>
  );
}

export default FavoriteScreen;
