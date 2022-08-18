import type {CityType} from './city';

export type HotelType = {
  city: CityType,
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  }
  description: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  id: number,
  reviews: number[],
}
