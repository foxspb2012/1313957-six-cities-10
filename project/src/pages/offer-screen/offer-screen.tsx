import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Loading from '../../components/loading/loading';
import Offer from '../../components/offer/offer';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchReviewsAction, fetchNearOfferAction, fetchOfferAction} from '../../store/api-action';

function OfferScreen(): JSX.Element {

  const { id } = useParams() as { id: string };
  const offer = useAppSelector((state) => state.offer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const comments = useAppSelector((state) => state.comments);
  const isLoadingError = useAppSelector((state) => state.isLoadingError);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!offer || offer?.id !== Number(id)) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearOfferAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, offer, dispatch]);

  if (id && (offer === null || offer.id !== Number(id))) {
    if (isLoadingError) {
      return <NotFoundScreen />;
    }

    return (
      <Loading />
    );
  }

  return (
    <div className="page">
      <Header isNavVisible/>
      {offer ? <Offer hotel={offer} nearHotels={nearOffers} comments={comments}/> : ''}
    </div>
  );

  // const {id} = useParams();
  //
  // const hotels = useAppSelector((state) => state.hotels);
  //
  // const hotel = hotels.find((item) => item.id === Number(id));
  //
  // const authStatus = useAppSelector((state) => state.authorizationStatus);
  //
  // if (hotel === undefined) {
  //   return (
  //     <NotFoundScreen/>
  //   );
  // }
  //
  // const hotelForMap = [...hotelsNearby, hotel];
  //
  // const rating = calculateRating(hotel.rating);
  //
  // const propertyGallery = () => (
  //   hotel.images.length > 0 && hotel.images.slice(0, MAX_IMG_COUNT).map((url) => (
  //     <div className="property__image-wrapper" key={url}>
  //       <img className="property__image" src={`${url}`} alt="Pic studio"/>
  //     </div>)
  //   )
  // );
  //
  // const hotelPremium = (isPremium: boolean) => (
  //   isPremium &&
  //   <div className="property__mark">
  //     <span>Premium</span>
  //   </div>
  // );
  //
  // const propertyInside = (isInside: boolean) => (
  //   isInside &&
  //   <div className="property__inside">
  //     <h2 className="property__inside-title">What&apos;s inside</h2>
  //     <ul className="property__inside-list">
  //       {
  //         hotel.goods.map((item) => (
  //           <li className="property__inside-item" key={item}>
  //             {item}
  //           </li>
  //         ))
  //       }
  //     </ul>
  //   </div>
  // );
  //
  // const userPro = (isPro: boolean) => (
  //   isPro &&
  //   <span className="property__user-status">Pro</span>
  // );
  //
  // const commentsList = (hasComments: boolean) => (
  //   hasComments &&
  //   <Comments comments={comments}/>
  // );
  //
  // const commentsForm = (isAuth: boolean) => (
  //   isAuth &&
  //   <CommentsForm/>
  // );
  //
  // const nearHotels = () => (
  //   hotelsNearby.map((item) => (
  //     <PlaceCard key={item.id} hotel={item}/>
  //   ))
  // );
  //
  // return (
  //   <div className="page">
  //     <Header isNavVisible/>
  //     <main className="page__main page__main--property">
  //       <section className="property">
  //         <div className="property__gallery-container container">
  //           <div className="property__gallery">
  //             {
  //               propertyGallery()
  //             }
  //           </div>
  //         </div>
  //         <div className="property__container container">
  //           <div className="property__wrapper">
  //             {
  //               hotelPremium(hotel.isPremium)
  //             }
  //             <div className="property__name-wrapper">
  //               <h1 className="property__name">
  //                 {hotel.title}
  //               </h1>
  //               <button className="property__bookmark-button button" type="button">
  //                 <svg className="property__bookmark-icon" width={31} height={33}>
  //                   <use xlinkHref="#icon-bookmark"/>
  //                 </svg>
  //                 <span className="visually-hidden">To bookmarks</span>
  //               </button>
  //             </div>
  //             <div className="property__rating rating">
  //               <div className="property__stars rating__stars">
  //                 <span style={{width: rating}}/>
  //                 <span className="visually-hidden">Rating</span>
  //               </div>
  //               <span className="property__rating-value rating__value">{hotel.rating}</span>
  //             </div>
  //             <ul className="property__features">
  //               <li className="property__feature property__feature--entire">
  //                 {Housing[hotel.type]}
  //               </li>
  //               <li className="property__feature property__feature--bedrooms">
  //                 {`${hotel.bedrooms} Bedrooms`}
  //               </li>
  //               <li className="property__feature property__feature--adults">
  //                 {`Max ${hotel.maxAdults} adults`}
  //               </li>
  //             </ul>
  //             <div className="property__price">
  //               <b className="property__price-value">{`€${hotel.price}`}</b>
  //               <span className="property__price-text">&nbsp;night</span>
  //             </div>
  //             {
  //               propertyInside(hotel.goods.length > 0)
  //             }
  //             <div className="property__host">
  //               <h2 className="property__host-title">Meet the host</h2>
  //               <div className="property__host-user user">
  //                 <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
  //                   <img className="property__avatar user__avatar" src={`${hotel.host.avatarUrl}`} width={74}
  //                        height={74} alt="Host avatar"
  //                   />
  //                 </div>
  //                 <span className="property__user-name">{hotel.host.name}</span>
  //                 {
  //                   userPro(hotel.host.isPro)
  //                 }
  //               </div>
  //               <div className="property__description">
  //                 <p className="property__text" key={Math.random()}>
  //                   {hotel.description}
  //                 </p>
  //               </div>
  //             </div>
  //             <section className="property__reviews reviews">
  //               <h2 className="reviews__title">
  //                 Reviews · <span className="reviews__amount">{comments.length}</span>
  //               </h2>
  //               {
  //                 commentsList(comments.length > 0)
  //               }
  //               {
  //                 commentsForm(authStatus === AuthorizationStatus.Auth)
  //               }
  //             </section>
  //           </div>
  //         </div>
  //         <section className="property__map map" style={{width: 1144, margin: '0 auto 50px auto'}}>
  //           <Map hotels={hotelForMap} currentId={hotel.id}/>
  //         </section>
  //       </section>
  //       <div className="container">
  //         <section className="near-places places">
  //           <h2 className="near-places__title">
  //             Other places in the neighbourhood
  //           </h2>
  //           <div className="near-places__list places__list">
  //             {
  //               nearHotels()
  //             }
  //           </div>
  //         </section>
  //       </div>
  //     </main>
  //   </div>
  // );
}

export default OfferScreen;
