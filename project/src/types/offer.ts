export type FeaturesType = {
  entire: string,
  bedrooms: number,
  adults: number
}

export type OfferType = {
  id: number;
  city: string,
  title: string;
  imgMain: string;
  imgOffer: string[];
  features: FeaturesType,
  insideList: string[],
  user: number,
  review: number[],
  description: string[],
  price: number;
  rating: number;
  isBookmark: boolean,
  isPremium: boolean;
  isFavorite: boolean;
}
