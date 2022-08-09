import dayjs from 'dayjs';
import type {UserType} from '../../types/user';
import type {ReviewType} from '../../types/review';
import {OfferType} from '../../types/offer';

type ReviewProps = {
  offer: OfferType;
  users: UserType[];
  reviewOffer: ReviewType[];
}

function Reviews(props: ReviewProps): JSX.Element {

  const {users, offer, reviewOffer} = props;

  return (
    <ul className="reviews__list">
      {
        reviewOffer.map((review) =>{
          const user = (users.find((item) => item.id === review.user) as UserType);
          const reviewRating = `${(offer.rating * 100 / 5).toString()}%`;
          return (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={`img/${user.imgUser}`} width={54} height={54} alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">{user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: reviewRating}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {review.text}
                </p>
                <time className="reviews__time" dateTime={review.date}>
                  {dayjs(review.date).format('MMMM YYYY')}
                </time>
              </div>
            </li>);
        }
        )
      }
    </ul>
  );
}

export default Reviews;
