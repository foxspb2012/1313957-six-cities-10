import type {Hotel} from '../types/hotel';
import {DEFAULT_CITY} from '../const';
import {hotels} from '../mocks/hotels';
import {changeCity, getHotels} from './action';
import {createReducer} from '@reduxjs/toolkit';

const getHotelsByCity = (hotelList: Hotel[], city: string) => hotelList.filter((hotel) => hotel.city.name === city);

const initialState = {
  city: DEFAULT_CITY,
  hotels: getHotelsByCity(hotels, DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getHotels, (state) => {
      state.hotels = getHotelsByCity(hotels, state.city);
    });
});

export {reducer};
