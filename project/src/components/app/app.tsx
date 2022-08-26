import type {Hotel} from '../../types/hotel';
import type {Comment} from '../../types/comment';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ScrollToTop} from '../../utils';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppScreenProps = {
  hotels: Hotel[];
  comments: Comment[];
}

function App(props: AppScreenProps): JSX.Element {

  const {hotels, comments} = props;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Main}
          element={<MainScreen hotels={hotels} authStatus={AuthorizationStatus.Auth} />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <OfferScreen hotels={hotels} comments={comments} authStatus={AuthorizationStatus.Auth} />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoriteScreen authStatus={AuthorizationStatus.Auth} />
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
