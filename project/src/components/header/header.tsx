import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {AuthorizationStatus, AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {requireAuthorization} from '../../store/action';

type HeaderProps = {
  isNavVisible: boolean;
}

function Header({isNavVisible}: HeaderProps): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">{user?.email}</span>
                        <span className="header__favorite-count">3</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        to={AppRoute.Main}
                        onClick={() => dispatch(requireAuthorization(AuthorizationStatus.NoAuth))}
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

