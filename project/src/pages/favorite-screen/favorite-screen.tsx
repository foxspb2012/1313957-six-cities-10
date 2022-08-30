import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import {hotels} from '../../mocks/hotels';
import classNames from 'classnames';

function FavoriteScreen(): JSX.Element {
  const favoritesEmpty = Boolean(hotels.length === 0);

  const favoriteContainer = (): JSX.Element => (
    hotels.length !== 0 ?
      <Favorites favorites={hotels}/>
      :
      <FavoritesEmpty/>
  );

  const pageClass = classNames('page', {'page--favorites-empty': favoritesEmpty});

  const mainClass = classNames('page__main page__main--favorites', {'page__main--favorites-empty': favoritesEmpty});

  return (
    <div className={pageClass}>
      <Header isNavVisible/>
      <main className={mainClass}>
        <div className="page__favorites-container container">
          {favoriteContainer()}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoriteScreen;
