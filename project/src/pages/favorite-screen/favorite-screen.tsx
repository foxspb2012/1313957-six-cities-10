import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import classNames from 'classnames';
import {getFavoriteHotels} from '../../store/hotels-data/selectors';

function FavoriteScreen(): JSX.Element {

  const favoriteHotels = useAppSelector(getFavoriteHotels);

  const favoritesEmpty = Boolean(favoriteHotels.length === 0);

  const favoriteContainer = (): JSX.Element => (
    favoriteHotels.length !== 0 ?
      <Favorites favorites={favoriteHotels}/>
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
