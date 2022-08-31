import dayjs from 'dayjs';
import type {Comment} from '../../types/comment';
import {calculateRating} from '../../utils';

type ReviewProps = {
  comment: Comment;
}

function Comments(props: ReviewProps): JSX.Element {

  const {comment} = props;

  const commentDate = (date: string) => (
    dayjs(date).format('MMMM YYYY')
  );

  const reviewRating = (rating: number) => calculateRating(rating);

  return (
    <li className="reviews__item" key={comment.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${comment.user.avatarUrl}`} width={54} height={54}
            alt="Comments avatar"
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: reviewRating(comment.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>
          {
            commentDate(comment.date)
          }
        </time>
      </div>
    </li>
  );
}

export default Comments;
