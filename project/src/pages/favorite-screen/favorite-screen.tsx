import type {OfferType} from '../../types/offer';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {AuthorizationStatus} from '../../const';

type FavoriteScreenType = {
  offers: OfferType[];
  authStatus: AuthorizationStatus;
}

function FavoriteScreen({offers, authStatus}: FavoriteScreenType): JSX.Element {

  const cities = offers.map((item) => item.city.name)
    .reduce((acc: string[], item) => (acc.includes(item) ? acc : [...acc, item]), []).sort();

  const hasFavorites = offers.length !== 0;

  return (
    <div className={`page ${!hasFavorites ? 'page--favorites-empty' : ''}`}>
      <Header authStatus={authStatus} />
      <main className={`page__main page__main--favorites ${!hasFavorites ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {hasFavorites ?
            <Favorites cities={cities} offers={offers}/>
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
