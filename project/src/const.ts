import type {Pin} from './types/pin';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = 'offer/:id',
  NotFoundPage = '*',

}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  HotelsId = '/hotels/{hotelId}',
  HotelsIdNearby = '/hotels/{hotelId}/nearby',
  Login = '/login',
  Logout = '/logout',
  Comment = '/comments/',
  Favorites = '/favorite/'
}

export const Housing: { [key: string]: string } = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const Cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const MAX_IMG_COUNT = 6;

export const DEFAULT_CITY = 'Paris';

export const PIN_SIZES: Pin = {
  iconSize: [27, 39],
  iconAnchor: [14, 39]
};

export const SortOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

export const CardType = {
  FAVORITES: 'favorites',
  CITIES: 'cities',
  NEAR_PLACES: 'near-places'
};

export const RATING_DATA = [
  {
    rating: '5',
    value: 'perfect'
  },
  {
    rating: '4',
    value: 'good'
  },
  {
    rating: '3',
    value: 'not bad'
  },
  {
    rating: '2',
    value: 'badly'
  },
  {
    rating: '1',
    value: 'terribly'
  }
];

export const COMMENT_LENGTH_MIN = 50;

export enum NameSpace {
  Data = 'DATA',
  Offers = 'OFFERS',
  User = 'USER',
}
