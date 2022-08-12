export type OfferType = {
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    }
    name: string,
  }
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
