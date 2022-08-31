import type {Hotel} from '../../types/hotel';
import type {Comment} from '../../types/comment';
import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, CardType, MAX_IMG_COUNT} from '../../const';
import PlacesList from '../places-list/places-list';
import CommentForm from '../comments-form/comments-form';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {calculateRating} from '../../utils';
import CommentsList from '../comments-list/comments-list';
import {changeFavoriteStatusAction} from '../../store/api-action';
import classNames from 'classnames';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type OfferProps = {
  hotel: Hotel,
  nearHotels: Hotel[];
  comments: Comment[];
}

function Offer({nearHotels, comments, hotel}: OfferProps): JSX.Element {

  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const {id, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description, isFavorite} = hotel;
  const reviewRating = calculateRating(rating);

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

  const hotelForMap = [...nearHotels, hotel];

  const propertyGallery = () => (
    hotel.images.length > 0 && hotel.images.slice(0, MAX_IMG_COUNT).map((url) => (
      <div className="property__image-wrapper" key={url}>
        <img className="property__image" src={`${url}`} alt="Pic studio"/>
      </div>)
    )
  );

  const hotelPremium = () => (
    isPremium &&
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );

  const userPro = (isPro: boolean) => (
    isPro &&
    <span className="property__user-status">Pro</span>
  );

  const getCommentsList = (hasComments: boolean) => (
    hasComments &&
    <CommentsList comments={comments}/>
  );

  const commentsForm = () => (
    isAuth &&
    <CommentForm/>
  );

  const buttonClass = classNames('button property__bookmark-button',
    {
      'property__bookmark-button--active': isFavorite
    });

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              propertyGallery()
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              hotelPremium()
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={buttonClass} type="button" onClick={handleClick}>
                <svg className="place-card__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: reviewRating}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  goods.map((good) => (
                    <li key={`${id}-${good}`} className="property__inside-item">
                      {good}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={`${host.avatarUrl}`} width={74} height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{host.name}</span>
                {
                  userPro(host.isPro)
                }
              </div>
              <div className="property__description">
                <p className="property__text" key={Math.random()}>
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{comments.length}</span>
              </h2>
              {
                getCommentsList(comments.length > 0)
              }
              {
                commentsForm()
              }
            </section>
          </div>
        </div>
        <section className="property__map map" style={{width: 1144, margin: '0 auto 50px auto'}}>
          <Map hotels={hotelForMap} selectedHotel={hotel}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList hotels={nearHotels} type={CardType.NEAR_PLACES}/>
        </section>
      </div>
    </main>
  );
}

export default Offer;
