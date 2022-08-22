import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

type HeaderProps = {
  authStatus: AuthorizationStatus;
}

function Header({authStatus}: HeaderProps): JSX.Element {

  const navigationList = (status: AuthorizationStatus): JSX.Element => (
    status === AuthorizationStatus.Auth ?
      <>
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={'/favorite'}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            <span className="header__favorite-count">3</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to="/">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </>
      :
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                navigationList(authStatus)
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
