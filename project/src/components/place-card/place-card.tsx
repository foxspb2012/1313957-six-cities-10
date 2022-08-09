import type {OfferType} from '../../types/offer';
import {useState} from 'react';
import {Link} from 'react-router-dom';

type PlaceCardProps = {
  offer: OfferType;
  isNear: boolean;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {offer, isNear } = props;
  const rating = `${(Math.round(offer.rating) * 100 / 5).toString()}%`;
  const [activeOfferId, setActiveOfferId] = useState<number>();

  return (
    <article onMouseOver={() => setActiveOfferId(offer.id)} className={`${isNear ? 'near-places__card' : 'cities__card'} place-card`}>
      {offer.isPremium ?
        <div className ="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div style={{ display: 'none' }}>{activeOfferId}</div>
      <div className={`${isNear ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={`img/${offer.imgMain}`} width={260} height={200} alt="Place pic"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isBookmark ? 'place-card__bookmark-button--active' : ''} button`} type="button">
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
          {offer.title}
        </h2>
        <p className="place-card__type">{offer.features.entire}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
