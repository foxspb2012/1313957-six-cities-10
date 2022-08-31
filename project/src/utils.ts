import type {Hotel} from './types/hotel';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {SortOptions} from './const';

export function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const calculateRating = (rating: number) => (`${(rating * 100 / 5).toString()}%`) as string;
export const calculateRatingRound = (rating: number) => (`${(Math.round(rating) * 100 / 5).toString()}%`) as string;

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

export const validatePassword = (password: string) => {

  if (!password) {
    return false;
  }

  const regPassword = /(?=.*[0-9])/;

  return password.search(regPassword) > -1;
};
