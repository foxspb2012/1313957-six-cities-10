import type {Hotel} from './types/hotel';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const calculateRating = (rating: number) => (`${(rating * 100 / 5).toString()}%`) as string;
export const calculateRatingRound = (rating: number) => (`${(Math.round(rating) * 100 / 5).toString()}%`) as string;

export function sortHotels(stateOffers: Hotel[], defaultSortedOffers: Hotel[], sortType: string) {
  switch (sortType) {
    case 'Price: low to high':
      return stateOffers.sort((nextHotel, currentHotel) => nextHotel.price - currentHotel.price);
    case 'Price: high to low':
      return stateOffers.sort((nextHotel, currentHotel) => currentHotel.price - nextHotel.price);
    case 'Top rated first':
      return stateOffers.sort((nextHotel, currentHotel) => currentHotel.rating - nextHotel.rating);
    default:
      return defaultSortedOffers;
  }
}

export const getHotelsByCity = (hotelList: Hotel[], city: string) => hotelList.filter((hotel) => hotel.city.name === city);

export const validatePassword = (password: string) => {

  if (!password) {
    return false;
  }

  const regPassword = /(?=.*[0-9])/;

  return password.search(regPassword) > -1;
};
