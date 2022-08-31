import type {Hotel} from './hotel';
import type {Comment} from './comment';
import type {UserData} from './user-data';
import {store} from '../store';
import {AuthorizationStatus} from '../const';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type HotelData = {
  city: string,
  sortValue: string,
  hotels: Hotel[],
  hotelsByCity: Hotel[],
  isDataLoaded: boolean,
  hotel: Hotel | null,
  nearOffers: Hotel[],
  comments: Comment[],
  favoriteHotels: Hotel[],
  isLoadingError: boolean,
  reloadFavorites: boolean
}

export type OffersProcess = {
  hoverCityId: number | null
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserData | null,
};
