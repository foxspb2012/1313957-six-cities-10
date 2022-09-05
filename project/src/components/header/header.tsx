import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-action';
import {getFavoriteHotels} from '../../store/hotels-data/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';
import Logo from '../logo/logo';

type HeaderProps = {
  isNavVisible: boolean;
}

function Header({isNavVisible}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  const favoritesOffers = useAppSelector(getFavoriteHotels);
  const quantityFavoritesOffers = favoritesOffers ? String(favoritesOffers.length) : '0';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo/>

          {isNavVisible ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus !== AuthorizationStatus.Auth ?
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li> :
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img src={user?.avatarUrl} alt="User Avatar"/>
                        </div>
                        <span className="header__user-name user__name">{user?.email}</span>
                        <span className="header__favorite-count">{AuthorizationStatus.Auth ? quantityFavoritesOffers : '0'}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        to={AppRoute.Main}
                        onClick={() => dispatch(logoutAction())}
                        className="header__nav-link"
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>}
              </ul>
            </nav> : ''}

        </div>
      </div>
    </header>
  );
}

export default Header;
