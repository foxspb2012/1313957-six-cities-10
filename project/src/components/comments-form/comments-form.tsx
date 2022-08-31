import React, {useState, ChangeEvent, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {RATING_DATA} from '../../const';
import {addCommentAction} from '../../store/api-action';

type CommentStateData = {
  rating: string;
  comment: string;
}

function CommentForm(): JSX.Element {

  const {id} = useParams() as { id: string };
  const dispatch = useAppDispatch();
  const [reviewData, setReviewData] = useState<CommentStateData>({comment: '', rating: ''});

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewData({
      ...reviewData,
      comment: event.target.value
    });
  };

  const onStarChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReviewData({
      ...reviewData,
      rating: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addCommentAction({
      offerId: id,
      commentData: {
        comment: reviewData.comment,
        rating: +reviewData.rating
      }
    }
    ));
    setReviewData({
      comment: '',
      rating: ''
    });
  };

  const isDisabled =
    reviewData.comment.length < 50 && reviewData.rating === '';

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {RATING_DATA.map(({rating, value}) => (
          <Fragment key={rating}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating}
              id={`${rating}-stars`}
              type="radio"
              checked={reviewData.rating === rating}
              onChange={onStarChange}
            />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={value}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextChange}
        value={reviewData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
