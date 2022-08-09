import {AuthorizationStatus} from '../../const';
import type {OfferType, FeaturesType} from '../../types/offer';
import type {UserType} from '../../types/user';
import type {ReviewType} from '../../types/review';
import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Reviews from '../../components/reviews/reviews';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {useParams} from 'react-router-dom';

const MAX_CARD_NEARBY = 3;

type OfferNotLoggedProps = {
  offers: OfferType[];
  users: UserType[];
  reviews: ReviewType[];
  authStatus: AuthorizationStatus;
}

function OfferScreen(props: OfferNotLoggedProps): JSX.Element {

  const {id} = useParams();
  const {offers, users, reviews, authStatus} = props;

  const offer = offers.find((item) => item.id === Number(id));

  if (offer === undefined) {
    return (
      <NotFoundScreen/>
    );
  }

  const userHost = users.find((user) => user.id === offer.user) as UserType;
  const reviewOffer = reviews.filter((review) => offer.review.includes(review.id)) as ReviewType[];
  const rating = `${(offer.rating * 100 / 5).toString()}%`;
  const {entire, bedrooms, adults} = offer.features as FeaturesType;

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            />
          </symbol>
        </svg>
      </div>
      <div className="page">
        <Header authStatus={authStatus}/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.imgOffer.length > 0 ?
                  offer.imgOffer.map((url) => (
                    <div className="property__image-wrapper" key={url + Math.random()}>
                      <img className="property__image" src={`img/${url}`} alt="Pic studio"/>
                    </div>)
                  )
                  : ''}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  :
                  ''}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
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
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {entire}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {`${bedrooms} Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {`Max ${adults} adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{`€${offer.price}`}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                {offer.insideList.length > 0 ?
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {
                        offer.insideList.map((item) => (
                          <li className="property__inside-item" key={item}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  : ''}
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={`img/${userHost.imgUser}`} width={74}
                        height={74} alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{userHost.name}</span>
                    <span className="property__user-status">{userHost.status}</span>
                  </div>
                  {offer.description.length > 0 ?
                    <div className="property__description">
                      {
                        offer.description.map((description) => (
                          <p className="property__text" key={Math.random()}>
                            {description}
                          </p>
                        ))
                      }
                    </div>
                    : ''}
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews · <span className="reviews__amount">{reviewOffer.length}</span>
                  </h2>
                  {reviewOffer.length > 0 ?
                    <Reviews users={users} offer={offer} reviewOffer={reviewOffer}/>
                    : ''}
                  {
                    authStatus === AuthorizationStatus.Auth ?
                      <ReviewsForm />
                      : ''
                  }
                </section>
              </div>
            </div>
            <section className="property__map map"/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {
                  offers.slice(0, MAX_CARD_NEARBY).map((item) => (
                    <PlaceCard key={item.id} offer={item} isNear/>
                  ))
                }
              </div>
            </section>
          </div>
        </main>
      </div>
    </>

  );
}

export default OfferScreen;
