import type {Pin} from './types/pin';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = 'offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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

export const SortOptions : string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum APIRoute {
  Hotels = '/hotels',
  HotelsId = '/hotels/{hotelId}',
  HotelsIdNearby = '/hotels/{hotelId}/nearby'
}

export const SORTING = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};
