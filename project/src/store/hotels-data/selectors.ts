import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Hotel} from '../../types/hotel';
import {Comment} from '../../types/comment';

export const getSelectedCity = (state: State): string => state[NameSpace.Data].city;
export const getSortValue = (state: State): string => state[NameSpace.Data].sortValue;
export const getHotelsByChoosenCity = (state: State): Hotel[] => state[NameSpace.Data].hotelsByCity;
export const getIsDataLoadedValue = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getHotel = (state: State): Hotel | null => state[NameSpace.Data].hotel;
export const getNearHotels = (state: State): Hotel[] => state[NameSpace.Data].nearOffers;
export const getReviews = (state: State): Comment[] => state[NameSpace.Data].comments;
export const getFavoriteHotels = (state: State): Hotel[] => state[NameSpace.Data].favoriteHotels;
export const getLoadingError = (state: State): boolean => state[NameSpace.Data].isLoadingError;
