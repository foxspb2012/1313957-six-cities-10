import type {Hotel} from './types/hotel';
import {SortOptions, RATING_COEFFICIENT} from './const';

export const calculateRating = (rating: number) => (`${(rating * RATING_COEFFICIENT).toString()}%`) as string;
export const calculateRatingRound = (rating: number) => (`${(Math.round(rating) * RATING_COEFFICIENT).toString()}%`) as string;

export const getSortedHotels = (hotels: Hotel[], currentSort: string) => {
  switch (currentSort) {
    case SortOptions.POPULAR:
      return hotels;

    case SortOptions.PRICE_LOW_TO_HIGH:
      return hotels.sort((hotelA, hotelB) => (
        hotelA.price - hotelB.price
      ));

    case SortOptions.PRICE_HIGH_TO_LOW:
      return hotels.sort((hotelA, hotelB) => (
        hotelB.price - hotelA.price
      ));

    case SortOptions.TOP_RATED_FIRST:
      return hotels.sort((hotelA, hotelB) => (
        hotelB.rating - hotelA.rating
      ));

    default:
      return hotels;
  }
};

export const getHotelsByCity = (hotelList: Hotel[], city: string) => hotelList.filter((hotel) => hotel.city.name === city);

