import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Loading from '../../components/loading/loading';
import Offer from '../../components/offer/offer';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchReviewsAction, fetchNearOfferAction, fetchOfferAction} from '../../store/api-action';
import {getLoadingError, getNearHotels, getHotel, getReviews} from '../../store/hotels-data/selectors';

function OfferScreen(): JSX.Element {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {id} = useParams() as { id: string };
  const hotel = useAppSelector(getHotel);
  const nearHotels = useAppSelector(getNearHotels);
  const comments = useAppSelector(getReviews);
  const isLoadingError = useAppSelector(getLoadingError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!hotel || hotel?.id !== Number(id)) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearOfferAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, hotel, dispatch]);

  if (id && (hotel === null || hotel.id !== Number(id))) {
    if (isLoadingError) {
      return <NotFoundScreen/>;
    }

    return (
      <Loading/>
    );
  }

  return (
    <div className="page">
      <Header isNavVisible/>
      {hotel ? <Offer hotel={hotel} nearHotels={nearHotels} comments={comments}/> : ''}
    </div>
  );
}

export default OfferScreen;
