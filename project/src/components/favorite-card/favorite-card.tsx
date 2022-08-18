import type {HotelType} from '../../types/hotel';
import {calculateRatingRound} from '../../utils';
import {Link} from 'react-router-dom';

type FavoriteCardProps = {
  hotel: HotelType;
};

function FavoriteCard({hotel}: FavoriteCardProps): JSX.Element {
  const rating = calculateRatingRound(hotel.rating);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${hotel.id}`}>
          <img className="place-card__image" src={`${hotel.previewImage}`} width={150} height={110} alt="Place pic"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{hotel.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${hotel.id}`}>{hotel.title}</Link>
        </h2>
        <p className="place-card__type">{hotel.type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
