import type {Hotel} from '../types/hotel';
import {DEFAULT_CITY} from '../const';
import {hotels} from '../mocks/hotels';
import {changeCity, hoverOnCard, changeSortTypeAction, clickSortMenuAction} from './action';
import {sortHotels} from '../utils';
import {createReducer} from '@reduxjs/toolkit';

const getHotelsByCity = (hotelList: Hotel[], city: string) => hotelList.filter((hotel) => hotel.city.name === city);

const initialState = {
  city: DEFAULT_CITY,
  hotels: getHotelsByCity(hotels, DEFAULT_CITY),
  hotelId: null,
  isSortMenuOpened: false,
  activeSortOption: 'Popular',
  defaultSortedOffers: hotels.filter((hotel) => hotel.city.name === DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.hotels = getHotelsByCity(action.payload.hotels, action.payload.city);
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
      state.hotels = sortHotels(state.hotels, state.defaultSortedOffers, action.payload.sortOption);
    });
});

export {reducer};
