import type {Hotel} from '../../types/hotel';
import {CardType, AuthorizationStatus, AppRoute} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import {calculateRatingRound} from '../../utils';
import {changeFavoriteStatusAction} from '../../store/api-action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import classNames from 'classnames';

type PlaceCardProps = {
  hotel: Hotel;
  cardType: string;
  onMouseOver?: (cardId: number) => void;
  onMouseLeave?: () => void;
};

function PlaceCard({hotel, cardType, onMouseOver, onMouseLeave}: PlaceCardProps): JSX.Element {

  const {id, price, title, type, previewImage, isFavorite} = hotel;

  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const rating = calculateRatingRound(hotel.rating);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    (isAuth) ?
      dispatch(changeFavoriteStatusAction({
        id,
        status: isFavorite ? 0 : 1
      }))
      : navigate(AppRoute.Login);
  };

  const articleClass = classNames('place-card',
    {
      'favorites__card': cardType === CardType.FAVORITES,
      'cities__card': cardType === CardType.CITIES,
      'near-places__card': cardType === CardType.NEAR_PLACES,
    });

  const markPremium = (isPremium: boolean) => (
    isPremium &&
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const imageClass = classNames('place-card__image-wrapper',
    {
      'favorites__image-wrapper': cardType === CardType.FAVORITES,
      'cities__image-wrapper': cardType === CardType.CITIES,
      'near-places__image-wrapper': cardType === CardType.NEAR_PLACES,
    });
  const imgWidth = cardType === CardType.FAVORITES ? '150' : '260';
  const imgHeight = cardType === CardType.FAVORITES ? '110' : '200';

  const cardInfoClass = classNames('place-card__info', {'favorites__card-info': cardType === CardType.FAVORITES});

  const buttonClass = classNames('button place-card__bookmark-button',
    {
      'place-card__bookmark-button--active': isFavorite && isAuth
    });

  return (
    <article className={articleClass} onMouseOver={() => onMouseOver?.(id)} onMouseLeave={() => onMouseLeave?.()}>
      {markPremium(hotel.isPremium)}

      <div className={imageClass}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place pic"/>
        </Link>
      </div>
      <div className={cardInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={buttonClass} type="button" onClick={handleClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
