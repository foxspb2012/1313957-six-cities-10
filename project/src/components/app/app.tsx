import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import type {OfferType} from '../../types/offer';
import type {ReviewType} from '../../types/review';
import type {UserType} from '../../types/user';

type AppScreenProps = {
  offers: OfferType[];
  reviews: ReviewType[];
  users: UserType[];
}

function App(props: AppScreenProps): JSX.Element {
  const {offers, reviews, users} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers} authStatus={AuthorizationStatus.Auth} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <OfferScreen offers={offers} users={users} reviews={reviews} authStatus={AuthorizationStatus.Auth} />
          }
        />
        <Route
          path={'/favorite'}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoriteScreen offers={offers.filter((offer) => offer.isFavorite === true)} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
