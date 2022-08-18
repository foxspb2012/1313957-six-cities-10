import type {HotelType} from '../../types/hotel';
import {Housing} from '../../const';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {calculateRatingRound} from '../../utils';

type PlaceCardProps = {
  hotel: HotelType;
  isNear: boolean;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {hotel, isNear } = props;
  const rating = calculateRatingRound(hotel.rating);
  const [activeOfferId, setActiveOfferId] = useState<number>();

  return (
    <article onMouseOver={() => setActiveOfferId(hotel.id)} className={`${isNear ? 'near-places__card' : 'cities__card'} place-card`}>
      {hotel.isPremium ?
        <div className ="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div style={{ display: 'none' }}>{activeOfferId}</div>
      <div className={`${isNear ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${hotel.id}`}>
          <img className="place-card__image" src={`${hotel.previewImage}`} width={260} height={200} alt="Place pic"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{hotel.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${hotel.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <link href="#"/>
          {hotel.title}
        </h2>
        <p className="place-card__type">{Housing[hotel.type]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
