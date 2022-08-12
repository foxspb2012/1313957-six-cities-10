import dayjs from 'dayjs';
import type {ReviewType} from '../../types/review';
import {calculateRating} from '../../utils';

type ReviewProps = {
  reviews: ReviewType[];
}

function Reviews(props: ReviewProps): JSX.Element {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {
        reviews.map((review) =>{
          const reviewRating = calculateRating(review.rating);
          return (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={`${review.user.avatarUrl}`} width={54} height={54} alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">{review.user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: reviewRating}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {review.comment}
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
