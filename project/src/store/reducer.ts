import type {Hotel} from '../types/hotel';
import type {UserData} from '../types/user-data';
import type {Comment} from '../types/comment';
import {DEFAULT_CITY, AuthorizationStatus} from '../const';

import {
  changeCity, hoverOnCard, changeSortTypeAction, clickSortMenuAction,
  loadHotelsAction, requireAuthorization, setDataLoadedStatus, setUser,
  setHotelAction, setNearHotelAction, setReviewAction, setDataLoadingError
} from './action';
import {sortHotels, getHotelsByCity} from '../utils';
import {createReducer} from '@reduxjs/toolkit';

type InitialStateType = {
  city: string;
  hotels: Hotel[];
  hotelsByCity: Hotel[];
  hotelId: null;
  isSortMenuOpened: boolean,
  activeSortOption: string;
  authorizationStatus: AuthorizationStatus;
  defaultSortedOffers: Hotel[];
  isDataLoaded: boolean;
  user: UserData | null;
  offer: Hotel | null;
  nearOffers: Hotel[];
  comments: Comment [];
  isLoadingError: boolean;
}

const initialState: InitialStateType = {
  city: DEFAULT_CITY,
  hotels: [],
  hotelsByCity: [],
  hotelId: null,
  isSortMenuOpened: false,
  activeSortOption: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  defaultSortedOffers: [],
  isDataLoaded: false,
  user: null,
  offer: null,
  nearOffers: [],
  comments: [],
  isLoadingError: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.hotelsByCity = getHotelsByCity(action.payload.hotels, action.payload.city);
      state.activeSortOption = 'Popular';
      state.isSortMenuOpened = false;
      state.defaultSortedOffers = getHotelsByCity(action.payload.hotels, action.payload.city);
    })
    .addCase(hoverOnCard, (state, action) => {
      state.hotelId = action.payload;
    })
    .addCase(clickSortMenuAction, (state) => {
      state.isSortMenuOpened = !state.isSortMenuOpened;
    })
    .addCase(changeSortTypeAction, (state, action) => {
      state.activeSortOption = action.payload.sortOption;
      state.isSortMenuOpened = false;
      state.hotelsByCity = sortHotels(getHotelsByCity(state.hotels, state.city), state.defaultSortedOffers, action.payload.sortOption);
    })
    .addCase(loadHotelsAction, (state, action) => {
      state.hotels = action.payload;
      state.hotelsByCity = getHotelsByCity(state.hotels, state.city);
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload.user;
    })
    .addCase(setHotelAction, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearHotelAction, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setReviewAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setDataLoadingError, (state, action) => {
      state.isLoadingError = action.payload;
    });
});

export {reducer};
