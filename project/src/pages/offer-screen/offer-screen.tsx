import {useParams} from 'react-router-dom';
import type {HotelType} from '../../types/hotel';
import type {CommentType} from '../../types/comment';
import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Comments from '../../components/comments/comments';
import CommentsForm from '../../components/comments-form/comments-form';
import {AuthorizationStatus, Housing} from '../../const';
import {calculateRating} from '../../utils';
import Map from '../../components/map/map';

const MAX_CARD_NEARBY = 3;

type OfferNotLoggedProps = {
  hotels: HotelType[];
  comments: CommentType[];
  authStatus: AuthorizationStatus;
}

function OfferScreen(props: OfferNotLoggedProps): JSX.Element {

  const {id} = useParams();
  const {hotels, comments, authStatus} = props;

  const hotel = hotels.find((item) => item.id === Number(id));

  if (hotel === undefined) {
    return (
      <NotFoundScreen/>
    );
  }

  const rating = calculateRating(hotel.rating);

  return (
    <div className="page">
      <Header authStatus={authStatus}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {hotel.images.length > 0 && hotel.images.slice(0, 6).map((url) => (
                <div className="property__image-wrapper" key={url}>
                  <img className="property__image" src={`${url}`} alt="Pic studio"/>
                </div>)
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {hotel.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {hotel.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: rating}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{hotel.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {Housing[hotel.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${hotel.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${hotel.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{`€${hotel.price}`}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {hotel.goods.length > 0 &&
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      hotel.goods.map((item) => (
                        <li className="property__inside-item" key={item}>
                          {item}
                        </li>
                      ))
                    }
                  </ul>
                </div>}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={`${hotel.host.avatarUrl}`} width={74}
                      height={74} alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{hotel.host.name}</span>
                  {
                    hotel.host.isPro &&
                    <span className="property__user-status">Pro</span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text" key={Math.random()}>
                    {hotel.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{comments.length}</span>
                </h2>
                {comments.length > 0 &&
                  <Comments comments={comments}/>}
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <CommentsForm/>
                }
              </section>
            </div>
          </div>
          <section className="property__map map" style={{ width: '100%' }}>
            <Map hotels={hotels}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {
                hotels.slice(0, MAX_CARD_NEARBY).map((item) => (
                  <PlaceCard key={item.id} hotel={item} isNear/>
                ))
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
