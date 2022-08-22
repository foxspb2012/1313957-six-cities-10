import type {Hotel} from '../../types/hotel';
import {Housing} from '../../const';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {calculateRatingRound} from '../../utils';
import classNames from 'classnames';

type PlaceCardProps = {
  hotel: Hotel;
  isNear: boolean;
};

function PlaceCard({hotel, isNear}: PlaceCardProps): JSX.Element {

  const rating = calculateRatingRound(hotel.rating);

  const [activeOfferId, setActiveOfferId] = useState<number>();

  const onArticleHover = () => setActiveOfferId(hotel.id);

  const articleClass = classNames('place-card', {'near-places__card' : isNear, 'cities__card': !isNear} );

  const markPremium = (isPremium: boolean) => (
    isPremium &&
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const buttonClass = classNames('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active': hotel.isFavorite});

  return (
    <article onMouseOver={onArticleHover} className={articleClass}>
      {markPremium(hotel.isPremium)}
      <div style={{display: 'none'}}>{activeOfferId}</div>
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
          <button
            className={buttonClass}
            type="button"
          >
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
